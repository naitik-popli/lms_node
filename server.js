require("dotenv").config();
require("./config/dbConnect"); // Database connection

const http = require("http");
const app  = require("./app/app");
const userRoutes = require('./routes/academics/examRoutes');
const userRoutes = require('./routes/academics/examResultsRoutes');
const userRoutes = require('./routes/academics/questionRoutes');
const userRoutes = require('./routes/staff/adminRouter');
const userRoutes = require('./routes/staff/teacherRouter');
const userRoutes = require('./routes/students/studentRouter');
const PORT = process.env.PORT  || 2020;

// server
const server = http.createServer(app);
server.listen(PORT, console.log(`Server is running on port: ${PORT}`));