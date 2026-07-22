require("dotenv").config();
const express = require("express");
const connectDB = require('./src/config/database');
const app = express();

connectDB();

const auditoriaMiddleware = require("./src/middlewares/auditoria.middlwares");
const { errorHandler } = require("./src/middlewares/errorHandler.middlewares");

const turnosRoutes = require("./src/routes/turnos.routes");
const pacientesRoutes = require("./src/routes/pacientes.routes");

app.use(express.json());
app.use(auditoriaMiddleware);

app.use("/api/v1/turnos", turnosRoutes);
app.use("/api/v1/pacientes", pacientesRoutes);

app.use(errorHandler);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`===============================================`);
  console.log(`==========Servidor municipal anticipado =======`);
  console.log(`===============================================`);
  console.log(`Servidor escuchando en http://localhost:${PORT}`);
  console.log(`===============================================`);
  console.log(`Entorno: ${process.env.ENTORNO || "Local"}`);
  console.log(`===============================================`);
  console.log(`===============================================`);
});
