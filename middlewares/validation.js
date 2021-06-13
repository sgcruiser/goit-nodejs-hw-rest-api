const Joi = require('joi')

const schemaAddContact = Joi.object({
  name: Joi.string()
    .alphanum()
    .min(3)
    .max(30)
    .required(),
  email: Joi.string()
    .email({
      minDomainSegments: 2, tlds: { allow: ['com', 'net', 'org', 'ru', 'ua'] }
    })
    .required(),
  phone: Joi.string()
    .pattern(/^[+]?[(]?[0-9]{3}[)]?[-\s]?[0-9]{3}[-\s]?[0-9]{4}$/)
    .required(),
})

const schemaUpdateContact = Joi.object({
  name: Joi.string()
    .alphanum()
    .min(2)
    .max(30)
    .optional(),
  email: Joi.string()
    .email({ minDomainSegments: 2, tlds: { allow: ['com', 'net', 'org', 'ru', 'ua'] } }).optional(),
  phone: Joi.string()
    .pattern(/^[+]?[(]?[0-9]{3}[)]?[-\s]?[0-9]{3}[-\s]?[0-9]{4}$/)
    .optional(),
})

const validate = async (schema, obj, next) => {
  try {
    await schema.validateAsync(obj)
  } catch (error) {
    next({ status: 400, message: error.message.replace(/"/g, '') })
  }
}

module.exports = {
  validationAddContact: (req, res, next) => {
    return validate(schemaAddContact, req.body, next)
  },
  validationUpdateContact: (req, res, next) => {
    return validate(schemaUpdateContact, req.body, next)
  }
}
