const express = require('express')
const router = express.Router()

// Add your routes here - above the module.exports line
router.post('/juggling-balls-answer', function (req, res) {

  var jugglingBalls = req.session.data['juggling-balls']

  if (jugglingBalls == "3 or more"){
    //Send user to next pageTitle
    res.redirect('/juggling-trick')
  }
  else {
    // Send user to ineligible page
    res.redirect('/ineligible')
  }
})

module.exports = router
