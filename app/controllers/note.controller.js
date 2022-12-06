const config = require("../config/auth.config");
const db = require("../models");
const Note = db.note;

var jwt = require("jsonwebtoken");
var bcrypt = require("bcryptjs");

exports.addnote = (req, res) => {
    const note = new Note({
        title: req.body.title,
        description: req.body.description,
        completed: false,
        id_user: req.body.id_user,
    });

    note.save((err, note) => {
        note.save(err => {
            if (err) {
                res.status(500).send({ message: err });
                return;
            }

            res.send({ message: "Nota añadida con exito." });
        });
    });
};

exports.allnotes = async (req, res) => {
    
    const x = await Note.find({ id_user: req.body.id_user });
    res.send(x);
};