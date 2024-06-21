const express = require("express");
const router = express.Router();
const Contact = require("../models/ContactModel");
// middleware
const ErrorResponse = require("../utils/errorResponse");
const asyncHandler = require("../middleware/asyncHandler");

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
