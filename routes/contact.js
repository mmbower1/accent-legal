const express = require("express");
const router = express.Router();
const Contact = require("../models/ContactModel");

// middleware
const ErrorResponse = require("../utils/errorResponse");
const asyncHandler = require("../middleware/asyncHandler");

// email sending
const nodemailer = require("nodemailer");
const Mailgen = require("mailgen");

// @desc GET all contacts
// @route GET /contact
// @access Public
router.get(
  "/",
  asyncHandler(async (req, res, next) => {
    const contacts = await Contact.find();
    res
      .status(200)
      .json({ success: true, count: contacts.length, data: contacts });
  })
);

// @desc GET single contact
// @route GET /contact/:id
// @access Public
router.get(
  "/:id",
  asyncHandler(async (req, res, next) => {
    const contact = await Contact.findById(req.params.id);
    if (!contact)
      return next(
        new ErrorResponse(`Contact not found with ID of ${req.params.id}`, 404)
      );
    res.status(200).json({ success: true, data: contact });
  })
);

// @desc POST a new contact
// @route POST /contact
// @access Public
router.post(
  "/",
  asyncHandler(async (req, res, next) => {
    const contact = await Contact.create(req.body);

    const transporter = nodemailer.createTransport({
      service: "gmail",
      port: 465, // true for 465, false for other ports
      secure: true,
      auth: {
        user: process.env.NODEMAILER_USER,
        pass: process.env.NODEMAILER_PW,
      },
    });

    const MailGenerator = new Mailgen({
      theme: "default",
      product: {
        name: "Accent Legal",
        link: "accentlegal.us",
      },
    });

    const response = {
      body: {
        intro: "New contact entry",
        table: {
          data: [{ information: contact }],
        },
      },
    };
    console.log("Response ", response);

    const emailResponse = MailGenerator.generate(response);

    const message = {
      from: process.env.NODEMAILER_USER,
      to: process.env.NODEMAILER_USER,
      subject: "New contact entry",
      html: emailResponse,
    };

    transporter.sendMail(message, (error) => {
      if (error) return console.error("Error sending email:", error);
      return res.status(201).json({
        msg: "New contact email received",
      });
    });

    res.status(201).json({ success: true, data: contact });
  })
);

// @desc Delete a contact
// @route DELETE /contact/:id
// @access Private
router.delete(
  "/:id",
  asyncHandler(async (req, res, next) => {
    const contact = await Contact.findByIdAndDelete(req.params.id);
    if (!contact)
      return next(
        new ErrorResponse(`Contact not found with ID of ${req.params.id}`, 404)
      );
    res.status(200).json({ success: true, data: {} });
  })
);

module.exports = router;
