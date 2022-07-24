const { Contact } = require("../../models/contact");

const getById = async (req, res, next) => {
   
    const { contactId } = req.params;
    const result = await Contact.findById(contactId);
    res.json(result);
   
};
module.exports = getById;
