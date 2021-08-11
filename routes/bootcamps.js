const express = require("express");
const router = express.Router();

/* router.get("/", (req, res) => {
  res.status(200).json({ success: true, message: "all bootcamps" });
});

router.get("/:id", (req, res) => {
  // default type    ||  json object
  //res.send('true') ||  res.json({success:true})
  res.status(200).json({ success: true, message: `bootcamp ${req.params.id}` });
});

router.post("/", (req, res) => {
  res.status(200).json({ success: true, message: "add bootcamp" });
});

router.put("/:id", (req, res) => {
  res.status(200).json({ success: true, message: "edit bootcamp" });
});

router.delete("/:id", (req, res) => {
  res.status(200).json({ success: true, message: "delete bootcamp" });
}); */

const {
  getBootCamp,
  getBootCamps,
  createBootCamp,
  deleteBootCamp,
  updateBootCamp,
} = require("../controllers/bootcamps");

router.route("/").get(getBootCamps).post(createBootCamp);
router
  .route("/:id")
  .get(getBootCamp)
  .put(updateBootCamp)
  .delete(deleteBootCamp);

module.exports = router;
