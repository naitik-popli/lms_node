const express = require("express");
const app = express();
const morgan = require("morgan");
const cors = require("cors");
const globalErrHandler = require("../middlewares/globalErrHandler");
const userRoutes = require("../routes/userRoute"); // Adjust this path if needed
// other routes...

// Middlewares
app.use(morgan("dev"));
app.use(express.json());
app.use(cors());

// ✅ Root route (fix for your Render homepage)
app.get("/", (req, res) => {
  res.send("🚀 LMS API is up and running!");
});

// Mount your routes here
app.use("/api/v1/users", userRoutes);
// app.use("/api/v1/other_routes", ...);

// Handle 404
app.use("*", (req, res, next) => {
  const err = new Error(`Cannot find ${req.originalUrl} on the server`);
  err.statusCode = 404;
  next(err);
});

// Global error handler
app.use(globalErrHandler);

module.exports = app;
