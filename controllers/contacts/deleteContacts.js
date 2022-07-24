const { Contact } = require("../../models/contact");
const { createError } = require("../../helpers");

const deleteContacts = async (req, res, next) => {
  
    const { contactId } = req.params;
    const result = await Contact.findByIdAndDelete(contactId);
    if (!result) {
      throw createError(404);
    }

    res.status(200).json({
      message: "contact deleted",
    });
  
};
module.exports = deleteContacts;
