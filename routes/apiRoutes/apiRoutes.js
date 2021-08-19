const express = require("express");
const router = require("express").Router();
const path = require("path");
const fs = require("fs");
const dbReader = JSON.parse(fs.readFileSync("./db/db.json", "utf-8"));

console.log("Reader: ", dbReader);

function createNewNote(body) {
	const note = body;
	dbReader.push(note);
	fs.writeFileSync("./db/db.json", JSON.stringify(dbReader, null, 2));
	return note;
}

router.get("/api/notes", (req, res) => {
	res.send(dbReader);
});

router.post("/api/notes", (req, res) => {
	const note = createNewNote(req.body);

	res.send(note);
});

module.exports = router;
