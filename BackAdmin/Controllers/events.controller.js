const Events = require("../models/events.models");
const ValidateEvent = require("../validation/events.validation");


const AddEvent= async (req, res)=>{
    const { errors, isValid } = ValidateEvent(req.body);
    try {
        if (!isValid) {
          res.status(404).json(errors);
        } else {
          await Events.findOne({ EventName: req.body.EventName }).then(async (exist) => {
            if (exist) {
              errors.EventName = "Event Exist";
              res.status(404).json(errors);
            } else {
              await Events.create(req.body);
              res.status(201).json({ message: "Event added with success" });
            }
          });
        }
      } catch (error) {
        console.log(error.message);
      }
    };


const FindAllEvents= async (req, res)=>{
    try {
        const data = await Events.find();
        res.status(201).json(data);
      } catch (error) {
        console.log(error.message);
      }
    
};


const FindSinglEvent= async (req, res)=>{
    try {
        const data = await Events.findOne({ _id: req.params.id });
        res.status(201).json(data);
      } catch (error) {
        console.log(error.message);
      }
};


const UpdateEvent= async (req, res)=>{
  try {
      const data = await Events.findOneAndUpdate(
        { _id: req.params.id },
        req.body,
        { new: true }
      );
      res.status(201).json(data);
    }
    catch (error) {
    console.log(error.message);
  }
};


const DeleteEvent= async (req, res)=>{
    try {
        await Events.deleteOne({ _id: req.params.id });
        res.status(201).json({ message: "Event deleted with success" });
      } catch (error) {
        console.log(error.message);
      }
};



module.exports = {
    AddEvent,
    FindAllEvents,
    FindSinglEvent,
    UpdateEvent,
    DeleteEvent,
};