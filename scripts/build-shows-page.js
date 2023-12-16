import BandSiteApi from "./band-site-api.js";
const apiKey ="77d4b93f-600d-4b30-9267-31ae6d9db9c0"
const postShowsCall = new BandSiteApi(apiKey);
const shows = await postShowsCall.getShows();
console.log(shows);

// Function Created for Mobile
    function showsMobileFunk (i) {
        const newTimeStamp = timeStampConversionShows(shows[i].date)
        const mainContainer = document.createElement("div")
        mainContainer.classList.add("shows__mobilecontainer")
        const dateBlock = document.createElement("div")
        dateBlock.classList.add("mobile__dateblock")
        dateBlock.innerHTML = "DATE"
        const dateMain = document.createElement("div")
        dateMain.innerHTML = newTimeStamp
        dateMain.classList.add("mobile__date")
        const venueBlock = document.createElement("div")
        venueBlock.innerHTML = "VENUE"
        venueBlock.classList.add("mobile__venueblock")
        const venueMain = document.createElement("div")
        venueMain.classList.add("mobile__venue")
        venueMain.innerHTML =shows[i].place
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

let  insertDOM = document.querySelector(".inject__showshere2");
    insertDOM.innerHTML= "";
    for (let i=0; i< shows.length; i++){
        
        insertDOM = document.querySelector(".inject__showshere2")
        insertDOM.appendChild(showsMobileFunk(i))
        console.log(showsMobileFunk(i))
        
    }
          

// The timestamp Conversion Function

function timeStampConversionShows(timestamp){
    // Got this from  the internet
       const date = new Date(timestamp);
       const options = { weekday: 'short', month: 'short', day: '2-digit', year: 'numeric' };
       const formattedDate = date.toLocaleDateString('en-US', options).replace(/,/g, '');
       return formattedDate;
   }