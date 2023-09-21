const mongoose = require('mongoose');

const MemberSchema = new mongoose.Schema({
    firstName:{
        type: String,
        required: [
            true,
            "First Name is required"
        ]
    }, 
    lastName:{
        type: String,
        required: [
            true,
            "Last Name is required"
        ]
    }, 
    sport: { type: String},
    team: { type: String},
}, {timestamps: true})

module.exports.Member = mongoose.model('Member', MemberSchema);