require("dotenv").config();
const express = require("express");
const morgan = require("morgan");
const methodOverride = require("method-override");
const { createViewPath } = require("./helpers/create_view_path");
const PORT = process.env.PORT;
const userRoute = require("./routes/users");
const userRoutejobs = require("./routes/jobs");
const userRoutecontact = require("./routes/contact");
const userRoutegallery = require("./routes/gallery");

const app = express();


app.use(express.static("styles")); 
app.use(express.static("images"));
app.use(express.urlencoded({extended: true})); 
app.set("view engine", "ejs");
app.use(morgan("combined")); 
app.use(methodOverride("_method"));




app.use(userRoute);
app.use(userRoutejobs)
app.use(userRoutecontact)
app.use(userRoutegallery)

app.use((req, res) => {
  res.render(createViewPath("error404"), {
    title: "Xatolik",
    page_name: "error",
  });
});

app.listen(PORT, () => {
  console.log(
    `Server ${PORT}-portda ishga tushdi`
  );
});
