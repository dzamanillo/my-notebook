const { createNewNote } = require("../lib/notes");
const fs = require("fs");

test("new note is created", () => {
	const oldDataBase = JSON.parse(fs.readFileSync("./db/db.json", "utf-8"));

	createNewNote({
		title: "A Note",
		text: "I think I just got this to work!",
		id: "2df8a56b-c71e-4868-940f-0a1265fec858",
	});

	const newDataBase = JSON.parse(fs.readFileSync("./db/db.json", "utf-8"));

	expect(newDataBase.length).toEqual(oldDataBase.length + 1);
});
