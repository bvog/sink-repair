// This code was provided, but was different from the code in the textbook that we were to copy and paste into the PerformanceNavigationTiming, so I commented it outerHeight.  The textbook code is below.
// import { SinkRepair } from "./SinkRepair.js"


// const mainContainer = document.querySelector("#container")

// const render = () => {
//     mainContainer.innerHTML = SinkRepair()
// }

// render()


import { fetchRequests } from "./dataAccess.js"
import { SinkRepair } from "./SinkRepair.js"



const mainContainer = document.querySelector("#container")

const render = () => {
    fetchRequests().then(
        () => {
            mainContainer.innerHTML = SinkRepair()
        }
    )
}

render()



