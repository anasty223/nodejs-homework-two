const { Contact, schemas } = require("../../models/contact");

const { createError } = require("../../helpers");

const changeById = async (req, res, next) => {

    const { error } = schemas.add.validate(req.body);
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
module.exports = changeById;
