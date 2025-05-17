// Global Error
const globalErrHandler = (err, req, res, next) => {
    const status     = err.status ? err.status : "failed"; // error status
    const message    = err.message; // error message
    const stack      = err.stack; //stack | which file, which line error occured
    const statusCode = err.statusCode ? err.statusCode:500;

    res.status(statusCode).json({
        status,
        message,
        stack,
    });
};
// Not found
const notFoundErr = (req, res, next) => {
    const error = new Error(`Cannot find ${req.originalUrl} on the server`);
    res.status(404).json({
      status: "failed",
      message: error.message,
      stack: error.stack
    });
  };
module.exports = { globalErrHandler, notFoundErr};