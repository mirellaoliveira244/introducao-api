//index.js
import dotenv from "dotenv";
import express from "express";
import roteadorUsuario from "./routes/usuario.js";
dotenv.config();

const app = express(); // Instancia o Express
const port = 3000; // Define a porta

app.use(roteadorUsuario);
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ message: "Internal Server Error", error: err.message });
});

app.get("/", (req, res) => {
  console.log("Rota / solicitada");
  // Cria a rota da raiz do projeto
  res.json({
    nome: "Mirella Dias", // Substitua pelo seu nome
  });
});

app.listen(port, () => {
  // Um socket para "escutar" as requisições
  console.log(`Serviço escutando na porta:  ${port}`);
});