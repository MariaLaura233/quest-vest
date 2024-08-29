require("dotenv").config();
const express = require("express");
const homeRoute = require("./src/routes/homeRoute");
const path = require("path");
const session = require ("express-session");
const database = require("./src/database/database");
const adminRoute = require("./src/routes/adminRoute");
const dashboardRoute = require("./src/routes/dashboardRoute");
const loginRoute = require("./src/routes/loginRoute");
const registerRoute = require("./src/routes/loginRegisterRoute");
const materiasRoute = require("./src/routes/materiasRoute");
const vestibularesRoute = require("./src/routes/vestibularesRoute");
const quemsomosRoute = require("./src/routes/quemsomosRoute");
const loginRegisterRoute = require("./src/routes/loginRegisterRoute");
const { name } = require("ejs");

const app = express();
const port = process.env.PORTSERVER || 3000;

app.set("view engine", "ejs");
app.set("views", "./src/views");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static(path.join(__dirname, "./public")));

app.use(session({
    name: "session",
    secret: process.env.SECRET,
    resave: true,
    cookie: {
      maxAge: 60 * 60 * 1000
    },
    saveUninitialized: true
}))

app.use("/", homeRoute);
app.use("/admin", adminRoute);
app.use("/dashboard", dashboardRoute);
app.use("/loginRegister", loginRegisterRoute);
app.use("/register", registerRoute);
app.use("/materias", materiasRoute);
app.use("/vestibulares", vestibularesRoute);
app.use("/quemsomos", quemsomosRoute);

app.listen(port, async () => {
  const [result] = await database.query('SELECT 1');
  if (result) {
    console.log(`http://localhost:${port}`);
  }
});
// database.connect((error) => {
//   if (error) {
//     console.log(error);
//   } else {
//     console.log("Conectado no banco de dados!");
//     app.listen(port, () => {
//       console.log(`http://localhost:${port}`);
//     });
//   }
// });

// const express = require("express");
// const route = require("./src/routes/route");
// const port = 5000;

// const app = express();

// app.set("view engine", "ejs");
// app.set("views", "./src/views");

// app.use(route);

// app.use(express.urlencoded({ extended: true }));
// app.use(express.json());

// app.listen(port, () => {
//   console.log(`http://localhost:${port}`);
// });
