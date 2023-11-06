const Joi = require("joi");

const createOrder = {
  body: Joi.object().keys({
    product: Joi.string().required(),
    address: Joi.string().required(),
    phone: Joi.string().required(),
  }),
};

const getAllOrders = {
  query: Joi.object().keys({
    status: Joi.string().required(),
  }),
};

const getSingleOrder = {
  params: Joi.object().keys({
    id: Joi.string().required(),
  }),
};

const updateOrder = {
  params: Joi.object().keys({
    id: Joi.string().required(),
  }),
  body: Joi.object().keys({
    status: Joi.string().required(),
  }),
};

const updateProduct = {
  params: Joi.object().keys({
    slug: Joi.string().required(),
  }),
  body: Joi.object().keys({
    name: Joi.string().required(),
    price: Joi.number().required(),
    description: Joi.string().required(),
    category: Joi.string().required(),
    stock: Joi.number().required(),
  }),
};

module.exports = {
  createOrder,
  getAllOrders,
  getSingleOrder,
  updateOrder,
};
