// This is the only function that will be called by the endpoint.

function home1(req, res) {
  res.send("This is the home page!!");
}

module.exports = home1;
