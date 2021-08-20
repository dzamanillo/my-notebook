const { json } = require("express");
const fs = require("fs");
const dbReader = JSON.parse(fs.readFileSync("./db/db.json", "utf-8"));

function createNewNote(body) {
	const note = body;
	dbReader.unshift(note);
	fs.writeFileSync("./db/db.json", JSON.stringify(dbReader, null, 2));
	return note;
}

function validateNote(note) {
	if (!note.title || typeof note.title !== "string") {
		return false;
	}
	if (!note.text || typeof note.text !== "string") {
		return false;
	}
	for (let i = 0; i < dbReader.length; i++) {
		if (note.id === dbReader[i].id) {
			return false;
		}
	}
	return true;
}

function deleteNote(target) {
	const oldList = JSON.parse(fs.readFileSync("./db/db.json", "utf-8"));
	const newList = oldList.filter((note) => note.id !== target);
	fs.writeFileSync("./db/db.json", JSON.stringify(newList, null, 2));
	return newList;
}

module.exports = {
	createNewNote,
	validateNote,
	deleteNote,
};
