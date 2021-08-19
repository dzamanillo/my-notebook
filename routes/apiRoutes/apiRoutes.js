const express = require("express");
const router = require("express").Router();
const path = require("path");
const fs = require("fs");
const { v4: uuidv4 } = require("uuid");
const { createNewNote, validateNote } = require("../../lib/notes");

router.get("/api/notes", (req, res) => {
	res.send(JSON.parse(fs.readFileSync("./db/db.json", "utf-8")));
});

router.post("/api/notes", (req, res) => {
	req.body.id = uuidv4();

	if (!validateNote(req.body)) {
		res.status(400).send("Your notes is not properly formatted.");
	} else {
		const note = createNewNote(req.body);
		res.send(note);
	}
});

module.exports = router;
