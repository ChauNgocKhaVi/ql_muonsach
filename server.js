const app = require("./app");
const config = require("./app/config");
const MongoDB = require("./app/utils/mongodb.util");
const PORT = config.app.port; // Sửa lại chỗ này

async function startServer() {
   try {
    await MongoDB.connect(config.db.uri);
    console.log("Connected to the database!");

    const PORT = config.app.port;
    app.listen(PORT, () => {
        console.log(`Server is running on port${PORT}`);
    });
   }catch (error) {
    console.log("Cannot connect to the database!", error);
   }
}

startServer();
