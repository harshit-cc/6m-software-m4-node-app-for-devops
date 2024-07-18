function postUser(req, res) {
  let name = req.body.name;
  let email = req.body.email;
  let password = req.body.password;
  res.send("Hello " + name + ", you email is - " + email);
}
module.exports = postUser;
