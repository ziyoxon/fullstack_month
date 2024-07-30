const axios = require("axios");
const { createViewPath } = require("../helpers/create_view_path");


const getContact = (req, res) => {
  res.render(createViewPath("contact"), {
    title: "Kontaklarim",
    page_name: "contact",
  });
};

module.exports = {getContact}
