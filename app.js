import express from "express";
import passport from "passport";
import { database } from "./config/database.js";
import api from "./routes/api.js";
import web from "./routes/web.js";
import './config/passport.js';

const app = express();

app.use(express.json());

app.use(passport.initialize());

app.use(express.static("public"));

app.set("view engine", "ejs");

app.use(web);
app.use("/api", api);

app.listen(3000, () => {
	database();
	console.log(`Aplikasi berjalan di http://localhost:3000`);
});
