module.exports = {
    get: (req, res) => {
        res.send({
            A00972539: {
                name:"Timoteo Shockness",
                course: "COMPUTER SYSTEM"
            }
        });
    },
    error: (req, res) => {
        res.status(404).send({
            error: "Page not found",
        })
    }
}