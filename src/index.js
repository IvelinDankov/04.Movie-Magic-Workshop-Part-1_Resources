import express from "express";
import handlebars from "express-handlebars";
import routes from "./routes.js"

const app = express();

app.use(express.static("public"));
app.use(express.urlencoded({extended: false}))

app.engine(
  "hbs",
  handlebars.engine({
    extname: "hbs"
  })
);
app.set("view engine", "hbs");
app.set("views", "src/views");

app.use(routes)

app.listen(5000, () => `Server is listening on port 5000.....`);
