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

// =======================
// 👤 USUARIOS
// =======================

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

  db.query(sql, [email, password, rol || "proveedor"], (err) => {
    if (err) return res.json(err);
    return res.json({ message: "Usuario creado" });
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

// =======================
// 📅 EVENTOS
// =======================
// 📅 OBTENER EVENTO POR ID
app.get("/eventos/:id", (req, res) => {
  db.query("SELECT * FROM eventos WHERE id = ?", [req.params.id], (err, result) => {
    if (err) return res.status(500).json(err);
    res.json(result[0]);
  });
});
// 📅 OBTENER EVENTOS
app.get("/eventos", (req, res) => {
  db.query("SELECT * FROM eventos", (err, result) => {
    if (err) return res.json(err);
    res.json(result);
  });
});

// 📅 CREAR EVENTO
app.post("/eventos", (req, res) => {
  console.log("Evento recibido:", req.body); // 🔥 debug

  const { titulo, descripcion, fecha } = req.body;

  const sql = "INSERT INTO eventos (titulo, descripcion, fecha) VALUES (?, ?, ?)";

  db.query(sql, [titulo, descripcion, fecha], (err) => {
    if (err) {
      console.log("Error MySQL:", err);
      return res.json(err);
    }
    res.json({ message: "Evento creado" });
  });
});

// 📅 ELIMINAR EVENTO
app.delete("/eventos/:id", (req, res) => {
  db.query("DELETE FROM eventos WHERE id = ?", [req.params.id], (err) => {
    if (err) return res.json(err);
    res.json({ message: "Evento eliminado" });
  });
});
// 📅 ACTUALIZAR EVENTO
app.put("/eventos/:id", (req, res) => {
  const { titulo, descripcion, fecha } = req.body;

  const sql = "UPDATE eventos SET titulo = ?, descripcion = ?, fecha = ? WHERE id = ?";

  db.query(sql, [titulo, descripcion, fecha, req.params.id], (err) => {
    if (err) return res.status(500).json(err);
    res.json({ message: "Evento actualizado" });
  });
});

app.get("/categorias", (req, res) => {
  db.query("SELECT * FROM categorias ORDER BY id DESC", (err, result) => {
    if (err) return res.status(500).json(err);
    res.json(result);
  });
});

app.post("/categorias", (req, res) => {
  const { nombre } = req.body;

  const sql = "INSERT INTO categorias (nombre) VALUES (?)";

  db.query(sql, [nombre], (err) => {
    if (err) return res.status(500).json(err);
    res.json({ message: "Categoría creada" });
  });
});

app.get("/categorias/:id", (req, res) => {
  db.query(
    "SELECT * FROM categorias WHERE id = ?",
    [req.params.id],
    (err, result) => {
      if (err) return res.status(500).json(err);
      res.json(result[0]);
    }
  );
});

app.put("/categorias/:id", (req, res) => {
  const { nombre } = req.body;

  const sql = "UPDATE categorias SET nombre = ? WHERE id = ?";

  db.query(sql, [nombre, req.params.id], (err) => {
    if (err) return res.status(500).json(err);
    res.json({ message: "Categoría actualizada" });
  });
});

app.delete("/categorias/:id", (req, res) => {
  db.query("DELETE FROM categorias WHERE id = ?", [req.params.id], (err) => {
    if (err) return res.status(500).json(err);
    res.json({ message: "Categoría eliminada" });
  });
});


// =======================
// 🚀 SERVIDOR
// =======================
app.listen(3001, () => {
  console.log("Servidor corriendo en http://localhost:3001 🚀");
});