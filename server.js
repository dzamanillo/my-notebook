const express = require("express");
const htmlRoutes = require("./routes/htmlRoutes/htmlRoutes.js");
const app = express();

const PORT = process.env.PORT || 3001;

app.use("/", htmlRoutes);

app.get("/", (req, res) => {
	res.send("Hello World");
});

app.listen(PORT, () => {
	console.log(`Now listening to PORT: ${PORT}`);
});
