const validate = (...fields) => (req, res, next) => {
  const missingFields = fields.filter((field) => !req.body[field]).map((field) => `${field}: is required!`)

  missingFields.length > 0 ? res.json({ error: missingFields }) : next()
}

module.exports = {
  createUser: validate('username', 'password', 'firstName', 'lastName', 'address', 'country', 'email', 'phone')
}
