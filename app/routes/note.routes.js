const { authJwt } = require("../middlewares");
const controller = require("../controllers/note.controller");

module.exports = function(app) {
  app.use(function(req, res, next) {
    res.header(
      "Access-Control-Allow-Headers",
      "x-access-token, Origin, Content-Type, Accept"
    );
    next();
  });

  app.post("/api/notes/addnote",  controller.addnote);
  app.post("/api/notes/allnotes",  controller.allnotes);
  app.post("/api/notes/deletenote",  controller.deletenote);
  app.post("/api/notes/updatenote",  controller.updatenote);
};
