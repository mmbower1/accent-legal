const express = require("express");
const router = express.Router();
const Consultation = require("../models/ConsultationModel");
// middleware
const ErrorResponse = require("../utils/errorResponse");
const asyncHandler = require("../middleware/asyncHandler");

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
    res.status(201).json({ success: true, data: consultation });
  })
);

module.exports = router;
