import express from "express";
import handlebars from "express-handlebars";

const app = express();

app.use(express.static('public'))

app.engine(
  "hbs",
  handlebars.engine({
    extname: "hbs"
  })
);
app.set("view engine", "hbs");
app.set("views", "src/views");

app.get("/", (req, res) => {
  res.render("home");
});

app.listen(5000, () => `Server is listening on port 5000.....`);
