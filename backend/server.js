const express = require("express");
const mysql = require("mysql");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

// 🔌 conexión a MySQL (XAMPP)
const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "directorio-mineria-sj"
});

// TEST
app.get("/", (req, res) => {
  res.send("Backend funcionando 🚀");
});

// 📌 Obtener usuarios
app.get("/usuarios", (req, res) => {
  db.query("SELECT * FROM usuarios", (err, result) => {
    if (err) return res.json(err);
    return res.json(result);
  });
});

// 📌 Crear usuario
app.post("/usuarios", (req, res) => {
  const { email, password, rol } = req.body;

  const sql = "INSERT INTO usuarios (email, password, rol) VALUES (?, ?, ?)";
  
  db.query(sql, [email, password, rol || "proveedor"], (err, result) => {
    if (err) return res.json(err);
    return res.json("Usuario creado");
  });
});

// 🔐 LOGIN
app.post("/login", (req, res) => {
  const { email, password } = req.body;

  const sql = "SELECT * FROM usuarios WHERE email = ? AND password = ?";

  db.query(sql, [email, password], (err, result) => {
    if (err) return res.json(err);

    if (result.length > 0) {
      return res.json({
        success: true,
        user: result[0]
      });
    } else {
      return res.json({
        success: false,
        message: "Credenciales incorrectas"
      });
    }
  });
});

// 🚀 SERVIDOR
app.listen(3001, () => {
  console.log("Servidor corriendo en puerto 3001");
});