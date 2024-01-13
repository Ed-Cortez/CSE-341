const eduardoCortez = (req, res) => {
    res.send("Eduardo Cortez");
  };


const luz = (req, res) => {
    res.send("Luz de Cortez");
  };


const gatito = (req, res) => {
    res.send("Gatito Cortez");
  };

const contacts = (req, res) => {
    res.send("Here go the contacts");
  };

module.exports = {
    eduardoCortez,
    luz,
    gatito,
    contacts
};