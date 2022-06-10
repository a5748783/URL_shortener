const express = require('express')
const router = express.Router()
const Url = require("../../models/URL")

router.get("/", (req, res) => {
  res.render("index")
})

router.post("/", (req, res) => {
  res.render("index")
})
module.exports = router