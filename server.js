const express = require("express");
const path = require("path");
const htmlRoutes = require("./routes/htmlRoutes/htmlRoutes.js");
const apiRoutes = require("./routes/apiRoutes/apiRoutes.js");
const app = express();

const PORT = process.env.PORT || 3001;

// parse incoming string or array data
app.use(express.urlencoded({ extended: false }));
// parse incoming JSON data
app.use(express.json());

app.use(express.static(path.join(__dirname, "./public")));
app.use("/", apiRoutes);
app.use("/", htmlRoutes);

app.listen(PORT, () => {
	console.log(`Now listening to PORT: ${PORT}`);
});
