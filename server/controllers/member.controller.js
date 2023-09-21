const {Member} = require("../models/member.model");

module.exports.list = (request, response) => {
    Member.find({})
        .then(members => {
            response.json(members)
        })
        .catch(err =>{
            response.status(400).json(err);
        })
}