const validate = (...fields) => (req, res, next) => {
  const missingFields = fields
    .filter((field) => !req.body[field])
    .map((field) => `${field}: is required!`)

  missingFields.length > 0 ? res.status(400).json({ error: missingFields }) : next()
}

module.exports = {
  createUser: validate(
    'username',
    'password',
    'firstName',
    'lastName',
    'address',
    'country',
    'email',
    'phone'
  ),
  signIn: validate('username', 'password')
}
