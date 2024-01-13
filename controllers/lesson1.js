const path = require('path');
const eduardoCortez = (req, res) => {
  const filePath = path.join(__dirname, '../public/index.html');
  res.sendFile(filePath);
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