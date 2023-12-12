    let shows =[
        {date: "Mon Sept 06 2021", venue: "Ronald Lane", location:"San Francisco, CA", submit: "BUY TICKETS"},
        {date: "Tue Sept 21 2021", venue: "Pier 3 East", location:"San Francisco, CA", submit: "BUY TICKETS"},
        {date: "Fri Oct 15 2021", venue: "View Lounge", location:"San Francisco, CA", submit: "BUY TICKETS"},
        {date: "Sat Nov 06 2021", venue: "Hyatt Agency", location:"San Francisco, CA", submit: "BUY TICKETS"},
        {date: "Fri Nov 26 2021", venue: "Moscow Center", location:"San Francisco, CA", submit: "BUY TICKETS"},
        {date: "Wed Dec 15 2021", venue: "Press Club", location:"San Francisco, CA", submit: "BUY TICKETS"},

    ];
    
    // Function Created for Mobile
    function showsMobileFunk (i) {

        const mainContainer = document.createElement("div")
        mainContainer.classList.add("shows__mobilecontainer")
        const dateBlock = document.createElement("div")
        dateBlock.classList.add("mobile__dateblock")
        dateBlock.innerHTML = "DATE"
        const dateMain = document.createElement("div")
        dateMain.innerHTML = shows[i].date
        dateMain.classList.add("mobile__date")
        const venueBlock = document.createElement("div")
        venueBlock.innerHTML = "VENUE"
        venueBlock.classList.add("mobile__venueblock")
        const venueMain = document.createElement("div")
        venueMain.classList.add("mobile__venue")
        venueMain.innerHTML =shows[i].venue
        const locationBlock = document.createElement("div")
        locationBlock.innerHTML = "LOCATION"
        locationBlock.classList.add("mobile__locationblock")
        const locationMain = document.createElement("div")
        locationMain.innerHTML= shows[i].location
        locationMain.classList.add("mobile__location")
        const buyContainer = document.createElement("div")
        buyContainer.classList.add("mobile__buycontainer")
        const buyTickets = document.createElement("button")
        buyTickets.classList.add("mobile__buytickets")
        buyTickets.innerHTML = "BUY TICKETS"
        const mobileButtomline = document.createElement("div")
        mobileButtomline.classList.add("mobile__bottomline")
        
        //insertDOM.appendChild(mainContainer)
        mainContainer.appendChild(dateBlock)
        mainContainer.appendChild(dateMain)
        mainContainer.appendChild(venueBlock)
        mainContainer.appendChild(venueMain);
        mainContainer.appendChild(locationBlock);
        mainContainer.appendChild(locationMain);
        mainContainer.appendChild(buyContainer);
        buyContainer.appendChild(buyTickets);
        mainContainer.appendChild(mobileButtomline);
        return mainContainer;    
    }

    
    function showsTabDeskFunk (i) {
        const showsContainer = document.createElement("div")
        showsContainer.classList.add("shows__container")
        const showsDateOuter = document.createElement("div")
        showsDateOuter.classList.add("shows__dateOuter")
        showsDateOuter.innerHTML = shows[i].date;
        const venueOuter = document.createElement("div")
        venueOuter.classList.add("venueOuter")
        venueOuter.innerHTML = shows[i].venue
        const locationOuter = document.createElement("div")
        locationOuter.classList.add("locationOuter")
        locationOuter.innerHTML = shows[i].location
        const submitMain = document.createElement("div")
        submitMain.classList.add("submit__main")
        const submitButton = document.createElement("button")
        submitButton.classList.add("submit__button")
        submitButton.innerHTML = shows[i].submit
       
        
        showsContainer.appendChild(showsDateOuter)
        showsContainer.appendChild(venueOuter)
        showsContainer.appendChild(locationOuter)
        showsContainer.appendChild(submitMain)
        submitMain.appendChild(submitButton)
        
        return showsContainer;   
        }

        

let  insertDOM = document.querySelector(".inject__showshere");

function myFunction(x) {
  if (x.matches) { // If media query matches
    insertDOM.innerHTML= "";
    for (let i=0; i< shows.length; i++){
        
        insertDOM = document.querySelector(".inject__showshere")
        insertDOM.appendChild(showsMobileFunk(i))
        console.log(showsMobileFunk(i))
        
    }
            } 
else {
    
    insertDOM.innerHTML ="";
    for (let i=0; i< shows.length; i++){
       
        insertDOM = document.querySelector(".inject__showshere")
        insertDOM.appendChild(showsTabDeskFunk(i))
        console.log(showsTabDeskFunk(i))
     }
             }
}

// Create a MediaQueryList object
var x = window.matchMedia("(max-width: 767px)")

// Call listener function at run time
myFunction(x);

// Attach listener function on state changes
x.addEventListener("change", function() {
  myFunction(x);
})

    