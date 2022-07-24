const express = require("express");
const { basedir } = global;
console.log(basedir);
const router = express.Router();
const { ctrlWrapper } = require(`${basedir}/helpers`);

const controller = require(`${basedir}/controllers/contacts`);

router.get("/", ctrlWrapper(controller.getAll));
router.get("/:contactId", ctrlWrapper(controller.getById));
router.post("/", ctrlWrapper(controller.createContacts));
router.delete("/:contactId", ctrlWrapper(controller.deleteContacts));
router.put("/:contactId", ctrlWrapper(controller.changeById));
router.patch("/:contactId/favorite", ctrlWrapper(controller.changeFavorite));

module.exports = router;
