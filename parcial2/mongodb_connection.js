const mongoose = require("mongoose");

(async () => {
    try {
        const db = await mongoose.connect('mongodb://localhost/parcial2_A012345678');
        console.log("Database connected to", db.connection.name);
    } catch (error) {
        console.error(error)
    }
})();