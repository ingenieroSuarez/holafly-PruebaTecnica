const ejecute = async ( ip, headers, originalUrl, db) => {
    await db.insertLogging( ip, headers, originalUrl);
}
module.exports = {
    ejecute
}