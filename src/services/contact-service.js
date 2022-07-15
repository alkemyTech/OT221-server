const contactRepository = require('../repositories/contact-repository')

const getAllContacts = async (page) => {
    const contacts = await contactRepository.listContact(page);
    return contacts;
}

const createContact = async (contact) => {
    const contactStored = await contactRepository.createContact(contact)
    return contactStored
}

module.exports = {
    createContact,
    getAllContacts
}
