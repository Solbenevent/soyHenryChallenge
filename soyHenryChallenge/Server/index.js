const server = require("./src/app");
const { conn } = require("./src/db");

conn.sync({ force: false }).then(() => {
    server.listen(process.env.PORT || 3001, () => {
        console.log("Server on port", process.env.PORT || 3001)
    })
})