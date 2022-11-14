import { getRequests, deleteRequest, getPlumbers, saveCompletion} from "./dataAccess.js"


export const Requests = () => {
    const requests = getRequests()

    let html = `
        <ul>
            ${
                requests.map(convertRequestToListElement).join("") //.map takes one element at a time from your array 
            }
        </ul>
    `

    return html
}

//returning HTML string encased in li tags takes in one perameter which is one request object, makes up HTML - returns the sercie Requests to HTMO
export const convertRequestToListElement = (getRequests) => {
    const plumbers = getPlumbers()
    let html = 
        `<li class="request_list">
        <div class="request_description">
            ${getRequests.description}</div>
        <button class="request__delete"
            id="request--${getRequests.id}">
            Delete
        </button>
        <select class="plumbers" id="plumbers">
    <option value="">Choose</option>
    ${
        plumbers.map( //want each individual request to have access to each plumber - .map creates dropdowns in each element - allows for a drop down of all plumbers to be shown next to each service request.
            plumber => {
                return `<option value="${getRequests.id}--${plumber.id}">${plumber.name}</option>`
            }
        ).join("")
    }
        </select>
        </li>
        `
        return html
}


//Adding event listener to the delete button
const mainContainer = document.querySelector("#container")

mainContainer.addEventListener("click", click => { //Listens for a click event 
    if (click.target.id.startsWith("request--")) { //if even starts with -- takes id and splits it in half and gives it to deleteRequest  parseInt takes a string and turns it into an integer
        const [,requestId] = click.target.id.split("--") //take the second thing, ignor the first thing
        deleteRequest(parseInt(requestId)) //ANy time taking a value out of HTML it is a string  Use parse Int any tinme you are pulling a value from an HTML element
    }
})



mainContainer.addEventListener(
    "change",
    (event) => {
        if (event.target.id === "plumbers") {
            const [requestId, plumberId] = event.target.value.split("--")

            /*
                This object should have 3 properties
                   1. requestId
                   2. plumberId
                   3. date_created
            */
            const completion = {
                requestId: (parseInt(requestId)), //parseInt any value you get from HTML  most commonly used in Event Listeners - Accepting user input pareInt before sending to database  Watch out for this in debugger "2" vs 2.
                plumberId: (parseInt(plumberId)),
                date_created: new Date().toDateString() //Copy this into Code to Remember - Date().toDateString excellent way to display date
             }

            /*
                Invoke the function that performs the POST request
                to the `completions` resource for your API. Send the
                completion object as a parameter.
             */
            saveCompletion(completion)
        }
    }
)