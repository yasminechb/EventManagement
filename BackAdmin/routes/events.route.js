const express = require('express');
const { AddEvent, FindAllEvents, FindSinglEvent, UpdateEvent, DeleteEvent } = require('../Controllers/events.controller');
const router = express.Router();


router.get('/api', (req,res)=>{
    res.send("work")
})


router.post('/addevent', AddEvent )

/* find all events */
router.get('/findevents', FindAllEvents)

/* find single event */
router.get('/sevent/:id', FindSinglEvent)

/* update event */
router.put('/upevent/:id', UpdateEvent)

/* delete event */
router.delete('/delevent/:id',DeleteEvent )

module.exports = router;


