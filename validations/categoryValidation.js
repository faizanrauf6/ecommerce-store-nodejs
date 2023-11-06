const Joi = require("joi");

const newCategory = {
  body: Joi.object().keys({
    name: Joi.string().required(),
    description: Joi.string().required(),
  }),
};

const getCategory = {
  params: Joi.object().keys({
    slug: Joi.string().required(),
  }),
};

const deleteCategory = {
  params: Joi.object().keys({
    slug: Joi.string().required(),
  }),
};

const updateCategory = {
  params: Joi.object().keys({
    slug: Joi.string().required(),
  }),
  body: Joi.object().keys({
    name: Joi.string().required(),
    description: Joi.string().required(),
  }),
};

module.exports = {
  newCategory,
  getCategory,
  deleteCategory,
  updateCategory,
};
