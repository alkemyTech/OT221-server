const { Contact } = require('../models')

const createContact = async (contact) => {
    const storedContact = await Contact.create(contact);
    return storedContact
}

const listContact = async (page) => {
    const limit = 10;
    const offset = page * limit;
    const { count, rows } = await Contact.findAndCountAll({
        attributes: ['id', 'name', 'phone', 'email', 'message'],
        offset: offset,
        limit: limit,
    })
    return { total_contacts: count, contacts: rows }
}

module.exports = {
    listContact,
    createContact
}