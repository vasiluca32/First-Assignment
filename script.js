import { Event } from "./modules/event.js";


fetch("./data/data.json")
.then((response)=>response.json())
.then(function(data){
    let events = data.events;
    console.log(events);
    return events.map(function(event){
        console.log(event);
        let title=event.Title
        let poster = event.Poster
        let date = event.Date
        let time = event.Time
        let address = event.LiveEvent.Address
        let description = event.Short_Description
        let webinar = event.Webinar
        let location=event.LiveEvent.Location
        let theme = event.Party.Theme

        let event1 = new Event(title,poster,date,time,address,description,webinar,location,theme);
        event1.draw();

        
    })
})
.catch(function(error) {
    console.log(error);
});

