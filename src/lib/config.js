module.exports = {
    env: process.env.NODE_ENV,
    port: process.env.PORT || 3001,
    db: process.env.DB || "mongodb://localhost:27017/TodoApp"
}