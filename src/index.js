import express from "express";

import routes from "./routes.js";
import handlebarsInit from "./config/handlebarsinit.js";
import expressInit from "./config/expressInit.js";

const app = express();

expressInit(app);
handlebarsInit(app);

app.use(routes);

app.listen(5000, () => `Server is listening on port 5000.....`);
