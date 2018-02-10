const controller = require("./controller.js");

module.exports = (app) => {

	app.get("/",controller.home);
	app.get("/table",controller.table);
	app.get("/reserve", controller.getReserve);
	app.post("/reserve",controller.postReserve);
}