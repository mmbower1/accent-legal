const express = require("express");
const router = express.Router();
const Consultation = require("../models/ConsultationModel");

// middleware
const ErrorResponse = require("../utils/errorResponse");
const asyncHandler = require("../middleware/asyncHandler");

// email sending
const nodemailer = require("nodemailer");
const Mailgen = require("mailgen");

// @desc GET all consultations
// @route GET /consultation
// @access Public
router.get(
  "/",
  asyncHandler(async (req, res, next) => {
    const consultations = await Consultation.find();
    res.status(200).json({
      success: true,
      count: consultations.length,
      data: consultations,
    });
  })
);

// @desc GET single consultation
// @route GET /consultation/:id
// @access Public
router.get(
  "/:id",
  asyncHandler(async (req, res, next) => {
    const consultation = await Consultation.findById(req.params.id);
    if (!consultation)
      return next(
        new ErrorResponse(
          `Consultation not found with ID of ${req.params.id}`,
          404
        )
      );
    res.status(200).json({ success: true, data: consultation });
  })
);

// @desc POST a new consultation
// @route POST /consultation
// @access Public
router.post(
  "/",
  asyncHandler(async (req, res, next) => {
    const consultation = await Consultation.create(req.body);

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
        intro: "New consultation entry",
        table: {
          data: [{ information: consultation }],
        },
      },
    };
    console.log("Response ", response);

    const emailResponse = MailGenerator.generate(response);

    const message = {
      from: process.env.NODEMAILER_USER,
      to: process.env.NODEMAILER_USER,
      subject: "New consultation entry",
      html: emailResponse,
    };

    transporter.sendMail(message, (error) => {
      if (error) return console.error("Error sending email:", error);
      return res.status(201).json({
        msg: "New consultation email received",
      });
    });

    res.status(201).json({ success: true, data: consultation });
  })
);

module.exports = router;
