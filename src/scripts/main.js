// This code was provided, but was different from the code in the textbook that we were to copy and paste into the PerformanceNavigationTiming, so I commented it outerHeight.  The textbook code is below.
// import { SinkRepair } from "./SinkRepair.js"


// const mainContainer = document.querySelector("#container")

// const render = () => {
//     mainContainer.innerHTML = SinkRepair()
// }

// render()


import { fetchRequests, fetchPlumbers, fetchCompletions } from "./dataAccess.js"
import { SinkRepair } from "./SinkRepair.js"



const mainContainer = document.querySelector("#container")


//Notes from Sidney: 
const render = () => {
    fetchRequests()
        .then(() => fetchPlumbers())
        .then(() => fetchCompletions())
        .then(
            () => {
                mainContainer.innerHTML = SinkRepair() //Assigning SinkRepair to inner HTML - how we are seeing it - We have to fetch all the data about plumbers, requests, and completions to have something to display.  Getting our data and making it display on the page - that is what reder is doing.  Think of a promise as a pinky promise: I heard you and I will give you something.  .then says wait until this resolves   After I do a fetch call I write a .then  You can chain the .then 
            }
        )
}

render()


mainContainer.addEventListener(
    "stateChanged",
    customEvent => {
        render()
    }
)
