const Joi = require("joi");

exports.createRequestSchemaValidation = Joi.object({
    startDate: Joi.string().required(),
    endDate: Joi.string().required(),
    pickupLocation: Joi.string().required(),
    carId: Joi.string().required(),
})

exports.createCarSchemaValidation = Joi.object({
    name: Joi.string().required().min(4).max(40),
    brand: Joi.string().required().min(3).max(40),
    price: Joi.number().required(),
    currency: Joi.string().required(),
    imageUrl: Joi.string().required(),
    description: Joi.string().required(),
})


exports.createUserSchemaValidation = Joi.object({
    names: Joi.string().required().min(5).max(40),
    email: Joi.string().email().required().min(4).max(40),
    address: Joi.string().required().min(3).max(40),
    telephone: Joi.string().required(),
    password: Joi.string().min(4).max(16)
})

exports.upateUserSchemaValidation = Joi.object({
    names: Joi.string().required().min(5).max(40),
    email: Joi.string().email().required().min(4).max(40),
    address: Joi.string().required().min(3).max(40),
    telephone: Joi.string().required(),
})

exports.updatePasswordValidation = Joi.object({
    oldPassword: Joi.string().min(4).max(16),
    newPassword: Joi.string().min(4).max(16)
})

exports.deleteUserSchemaValidation = Joi.object({
    password: Joi.string().min(4).max(16)
})

exports.LoginSchemaValidation = Joi.object({
    email: Joi.string().email().required().min(4).max(40),
    password: Joi.string().min(4).max(16)
})