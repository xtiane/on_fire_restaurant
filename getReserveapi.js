const path = require("path");

exports.getReservations = (req, res) => {
	res.sendFile(path.join(__dirname, "public/reserve.html"));
}