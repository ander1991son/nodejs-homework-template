// const fs = require('fs/promises')
const { DB_HOST } = process.env;
const { Contact } = require("./db/schemas/contact");

const listContacts = async () => {
  console.log(Contact);
};

const getContactById = async (contactId) => {};

const removeContact = async (contactId) => {};

const addContact = async (body) => {};

const updateContact = async (contactId, body) => {};

module.exports = {
  listContacts,
  getContactById,
  removeContact,
  addContact,
  updateContact,
};
