const express = require('express');
const {
  handleGenerateNewShortURL,
  handleGetAnalytics,
  handleRedirectFromShortId,
} = require("../controllers/url");

const router = express.Router();

router.post("/", handleGenerateNewShortURL);
router.get("/analytics/:shortId", handleGetAnalytics);

// For redirecting short URL
router.get("/:id", handleRedirectFromShortId);

module.exports = router;