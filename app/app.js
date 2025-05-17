const express = require('express');
const { globalErrHandler, notFoundErr } = require('../middlewares/globalErrHandler');

const adminRouter = require('../routes/staff/adminRouter');
const academicYearRouter = require('../routes/academics/academicYear');
const academicTermRouter = require('../routes/academics/academicTerm');
const classLevelRouter = require('../routes/academics/classLevel');
const programRouter = require('../routes/academics/program');
const subjectRouter = require('../routes/academics/subject');
const yearGroupRouter = require('../routes/academics/yearGroup');
const teachersRouter = require('../routes/staff/teacherRouter');
const examRouter = require('../routes/academics/examRoutes');
const studentRouter = require('../routes/students/studentRouter');
const questionsRouter = require('../routes/academics/questionRoutes');
const examResultRouter = require('../routes/academics/examResultsRoutes');

const app = express(); // create express app instance

/**
 * Middleware
 */
app.use(express.json()); // parse incoming JSON

/**
 * Health check route
 */
app.get("/", (req, res) => {
    res.send("API is running");
});

/**
 * Routes
 */
app.use("/api/v1/admins", adminRouter);
app.use("/api/v1/academic-years", academicYearRouter);
app.use("/api/v1/academic-terms", academicTermRouter);
app.use("/api/v1/class-levels", classLevelRouter);
app.use("/api/v1/programs", programRouter);
app.use("/api/v1/subjects", subjectRouter);
app.use("/api/v1/year-groups", yearGroupRouter);
app.use("/api/v1/teachers", teachersRouter);
app.use("/api/v1/exams", examRouter);
app.use("/api/v1/students", studentRouter);
app.use("/api/v1/questions", questionsRouter);
app.use("/api/v1/exam-results", examResultRouter);

/**
 * Error Middlewares
 */
app.use(notFoundErr);           // 404 handler
app.use(globalErrHandler);      // Global error handler

module.exports = app;
