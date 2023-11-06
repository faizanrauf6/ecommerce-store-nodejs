const Joi = require("joi");

const newProduct = {
  body: Joi.object().keys({
    name: Joi.string().required(),
    price: Joi.number().required(),
    description: Joi.string().required(),
    category: Joi.string().required(),
    stock: Joi.number().required(),
  }),
};

const getAllProducts = {
  query: Joi.object().keys({
    page: Joi.number().required(),
    limit: Joi.number().required(),
    name: Joi.string().required(),
    minPrice: Joi.number().required(),
    maxPrice: Joi.number().required(),
  }),
};

const getProduct = {
  params: Joi.object().keys({
    slug: Joi.string().required(),
  }),
};

const deleteProduct = {
  params: Joi.object().keys({
    slug: Joi.string().required(),
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
  newProduct,
  getAllProducts,
  getProduct,
  deleteProduct,
  updateProduct,
};
