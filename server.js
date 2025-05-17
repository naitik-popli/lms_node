require("dotenv").config();
require("./config/dbConnect"); // Database connection

const http = require("http");
const app  = require("./app/app");
const examRoutes = require('./routes/academics/examRoutes');
const examResultsRoutes = require('./routes/academics/examResultsRoutes');
const questionRoutes = require('./routes/academics/questionRoutes');
const adminRouter = require('./routes/staff/adminRouter');
const teacherRouter = require('./routes/staff/teacherRouter');
const studentRouter = require('./routes/students/studentRouter');

app.use('/exams', examRoutes);
app.use('/exam-results', examResultsRoutes);
app.use('/questions', questionRoutes);
app.use('/admin', adminRouter);
app.use('/teachers', teacherRouter);
app.use('/students', studentRouter);

const PORT = process.env.PORT || 2020;

// server
const server = http.createServer(app);
server.listen(PORT, console.log(`Server is running on port: ${PORT}`));