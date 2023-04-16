const loggingMiddleware = (app) =>
    (req, res, next) => {
        const ip = (req.headers['x-forwarded-for'] || req.connection.remoteAddress || '').split(',')[0].trim();
        const headers = JSON.stringify(req.headers);
        const originalUrl = req.originalUrl;
        app.logs.serviceRegisterLog.ejecute(ip, headers, originalUrl, app.db );
        next();
    }

module.exports = loggingMiddleware;