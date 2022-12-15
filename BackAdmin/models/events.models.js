const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const EventSchema = new Schema({
    EventName: String,
    Organisateur: String,
    Date: String,
    Description: String,
    Image: String,
}, {timestamps: true})
  



module.exports = mongoose.model('events', EventSchema)