const contactService = require('../services/contact-service')


const storeContact = async (req, res, next) => {
    try {
        const newContact = req.body
        console.log(req.body)
        const contactStored = await contactService.createContact(newContact)
        res.json(contactStored)
    } catch (err) {
        next(err)
    }
}

const getContacts = async (req, res, next) => {
    try {
        const { query } = req
        const page = query.page - 1;
        const allContacts = await contactService.getAllContacts(page)
        res.status(200).json(allContacts)
    }
    catch (err) {
        next(err)
    }
}

module.exports = {
    storeContact,
    getContacts
}