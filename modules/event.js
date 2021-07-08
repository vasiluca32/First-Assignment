class Event{

    constructor(Title,Poster,Date,Time,Address,Short_Description,Webinar,Location,Theme ){
        this.title = Title
        this.poster= Poster
        this.date = Date
        this.time = Time
        this.address = Address
        this.description = Short_Description
        this.webinar = Webinar
        this.location = Location
        this.theme = Theme
        

    }

    draw(){
        const newEvent = document.createElement("div");
        newEvent.className="event";

        const newTitle = document.createElement("h2");
        newTitle.innerHTML=this.title;
        newTitle.className="event-title";

        const poster = document.createElement("img");
        poster.src = this.poster;

        const date = document.createElement("p");
        date.innerHTML=`<span>When?:</span> ${this.date}`;
        date.className="date";

        const time = document.createElement("p");
        time.innerHTML=`<span>Time:</span> ${this.time}`;
        time.className="time"

        const description = document.createElement("p");
        description.innerHTML =`<span>Description:</span> ${this.description}`;
        description.className="description";

        const link = document.createElement("a");
        link.href=this.webinar;
        link.target="_blank";
        link.innerHTML=this.webinar;

        const webinar = document.createElement("p");
        webinar.innerHTML=`<span>Link: </span>`;
        webinar.className="webinar";

        const location = document.createElement("p");
        location.innerHTML=`<span>Where?:</span> ${this.location}`;
        location.className="location";

        const address = document.createElement("p");
        address.innerHTML = `<span>Address:</span> ${this.address}`;
        address.className="address";

        const theme = document.createElement("p");
        theme.innerHTML=`<span>Theme:</span> ${this.theme}`;
        theme.className="theme";

       

        let content = document.getElementById("content");
        webinar.appendChild(link);
        content.appendChild(newEvent);
        newEvent.appendChild(poster);
        newEvent.appendChild(newTitle);
        
        newEvent.appendChild(date);
        newEvent.appendChild(time);
        newEvent.appendChild(description);
        newEvent.appendChild(webinar);
        newEvent.appendChild(location);
        newEvent.appendChild(address);
        newEvent.appendChild(theme);

    }
    

}



export { Event };