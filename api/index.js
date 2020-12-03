const express = require("express");
const app = express();

app.get("/simple", function (request, response) {
	console.log("get");
	response.set({
		"Access-Control-Allow-Origin": "http://localhost:3000",
	});
	return response.json({
		name: "simple",
	});
});

app.post("/not-simple", function (request, response) {
	console.log("post");
	response.set({
		"Access-Control-Allow-Origin": "http://localhost:3000",
	});
	return response.json({
		name: "not-simple",
	});
});

app.options("*", function (request, response) {
	console.log("options");
	response.set({
		"Access-Control-Allow-Origin": "http://localhost:3000",
		"Access-Control-Allow-Methods": "POST",
		"Access-Control-Allow-Headers": "content-type",
	});
	return response.status(204).end();
});

const port = 4000;
app.listen(port, () => {
	console.log(`API app listening at http://localhost:${port}`);
});
