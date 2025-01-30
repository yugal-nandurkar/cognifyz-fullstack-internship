// middleware/errorHandlers.js
module.exports = {
    notFound: (req, res, next) => {
        res.status(404).render('errors/404');
    },

    errorHandler: (err, req, res, next) => {
        console.error(err.stack);
        res.status(500).render('errors/500');
    },

    catchAsync: (fn) => (req, res, next) => {
        Promise.resolve(fn(req, res, next)).catch(next);
    }
};