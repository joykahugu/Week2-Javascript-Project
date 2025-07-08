//sets ensure string is not repeated e.g. name is not repeated 
let events = [
  
    {
        title: "Software class",
        date: {
            day: "Monday",
            date: "2025/03/06",
        },
        location: "Nairobi",
        attendees: new Set(["Peter", "Jane", "Joe", "Mary", "George", "Adam", "Ella", "Joy"]),


    },

   

    {
        title: "Meeting with Sam",
        date: {
            day: "Tuesday",
            date: "2025/03/07",
        },
        location: "Lavington",
        attendees: new Set(["Peter", "Peter", "Jane", "Joe", "Mary", "George", "Adam", "Ella", "Joy"]),

    },




    {
        title: "Software class",
        date: {
            day: "Wednesday",
            date: "2025/03/08",
        },
        location: "Nairobi",
        attendees: new Set(["Peter", "Jane", "Joe", "Mary", "George", "Adam", "Ella", "Joy"]),


    },




    {
        title: "Gym",
        date: {
            day: "Thursday",
            date: "2025/03/09",
        },
        location: "Nairobi",
        attendees: new Set(["Peter", "Jane", "Joe", "Mary", "George", "Adam", "Ella", "Joy"]),


    },




    {
        title: "Math Class",
        date: {
            day: "Friday",
            date: "2025/03/10",
        },
        location: "Nairobi",
        attendees: new Set(["Peter", "Joe", "Mary", "Peter", "George", "Adam", "Ella", "Joy"]),


    },





    {
        title: "Picnic with James",
        date: {
            day: "Saturday",
            date: "2025/03/11",
        },
        location: "Nairobi",
        attendees: new Set(["Peter", "Jane", "Joe", "Mary", "George", "Adam", "Ella", "Joy"]),


    },




    {
        title: "Soccer Match",
        date: {
            day: "Sunday",
            date: "2025/03/12",
        },
        location: "Nairobi",
        attendees: new Set(["Peter", "Jane", "Joe", "Mary", "George", "Adam", "Ella", "Joy"]),


    },

    {
       title: "Hiking in Ngong",
        date: {
            day: "Monday",
            date: "2025/03/13",
        },
        location: "Nairobi",
        attendees: new Set (["Peter", "Joy", "Lucy"])

    },
 
]
//  const weakMap = new WeakMap();
//  const title = events.find(e => e.title === title);
//  weakMap.set(title,"Organizer:Ruth");
//  weakMap.set("Soccer Match");

const weekEvents= events.filter(event => event.date.date < "2025/03/13");
console.log(weekEvents);

function addAttendee(eventTitle, attendeeName) {
  const event = events.find(e => e.title === eventTitle);
  if (event) {
    event.attendees.add(attendeeName);
    console.log(`Added ${attendeeName} to "${eventTitle}"`);
  } else {
    console.log(`Event titled "${eventTitle}" not found.`);
  }
}
addAttendee("Soccer Match", "Grace");

const firstEvent = events[0];
console.log(firstEvent.title);
console.log(firstEvent.date);
console.log(firstEvent.location);
console.log(firstEvent.attendees);
const keys = Object.keys(events[0]);
console.log(keys);
events.forEach((event) =>{
    let message = `${event.title} is on this date: ${event.date.date}`;
    console.log(message);
});












// WeakMap

// function addAttendee(title,name) {
//     new Set.add("Ruth");
// };
// addAttendee("Soccer")







