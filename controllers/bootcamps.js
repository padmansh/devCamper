const Bootcamp = require("../models/Bootcamp");
const errorResponse = require("../utils/errorResponse");
const asyncHandler = require("../middlewares/asyncHandler");
// @desc Get all bootcamps
// @route GET api/v1/bootcamps
// access public
exports.getBootCamps = asyncHandler(async (req, res, next) => {
  const bootcamps = await Bootcamp.find();
  res.status(200).json({ success: true, data: bootcamps });
});

// @desc Get a bootcamp
// @route GET api/v1/bootcamps/:id
// access public
exports.getBootCamp = asyncHandler(async (req, res, next) => {
  const bootcamp = await Bootcamp.findById(req.params.id);
  if (!bootcamp) {
    return next(new errorResponse("boot camp not found", 404));
  }
  res.status(200).json({ success: true, data: bootcamp });
});

// @desc Create a bootcamp
// @route POST api/v1/bootcamps
// access private
exports.createBootCamp = asyncHandler(async (req, res, next) => {
  const bootcamp = await Bootcamp.create(req.body);
  res.status(201).json({ success: true, data: bootcamp });
});

// @desc Update a bootcamp
// @route PUT api/v1/bootcamps/:id
// access private
exports.updateBootCamp = asyncHandler(async (req, res, next) => {
  const update = await Bootcamp.findByIdAndUpdate(req.params.id, req.body, {
    runValidators: true,
    new: true,
  });
  if (!update) {
    return next(new errorResponse("boot camp not found", 404));
  }
  res.status(200).json({ success: true });
});

// @desc Delete a bootcamp
// @route Delete api/v1/bootcamps/:id
// access private
exports.deleteBootCamp = asyncHandler(async (req, res, next) => {
  const bootcamps = await Bootcamp.findByIdAndDelete(req.params.id);
  if (!bootcamps) {
    return next(new errorResponse("boot camp not found", 404));
  }
  res.status(200).json({ success: true, count: bootcamps.length });
});
