const MemberController = require("../controllers/member.controller")

module.exports = function(app) {
    app.get("/api/members", MemberController.list);
}