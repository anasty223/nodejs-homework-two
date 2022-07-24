const { Contact, shemas } = require("../../models/contact");
const { createError } = require("../../helpers");

const changeFavorite = async (req, res, next) => {
  const { error } = shemas.update.validate(req.body);
  if (error) {
    throw createError(400, error.message);
  }
  const { contactId } = req.params;

  const result = await Contact.findByIdAndUpdate(contactId, req.body, {
    new: true,
  });
  if (!result) {
    throw createError(404);
  }
  res.json(result);
};
module.exports = changeFavorite;
