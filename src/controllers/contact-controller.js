const contactService = require("../services/contact-service");
const emailService = require("../services/send-email");

const storeContact = async (req, res, next) => {
  try {
    const newContact = req.body;
    console.log(req.body.email);
   await emailService.sendEmail({
      to: newContact.email,
      subject: "SOMOS MAS - Gracias por contactarte", 
      text: emailService.contactEmailLayout(newContact.name)
    });
    const contactStored = await contactService.createContact(newContact);
    res.json(contactStored);
  } catch (err) {
    next(err);
  }
};

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
