import {sendRequest} from "./dataAccess.js"

//ServiceForm gives us the forms - makes forms appear on page   Creates HTML form for us
export const ServiceForm = () => {
    let html = `
        <div class="field">
            <label class="label" for="serviceDescription">Description</label>
            <input type="text" name="serviceDescription" class="input" />
        </div>
        <div class="field">
            <label class="label" for="serviceAddress">Address</label>
            <input type="text" name="serviceAddress" class="input" />
        </div>
        <div class="field">
            <label class="label" for="serviceBudget">Budget</label>
            <input type="number" name="serviceBudget" class="input" />
        </div>
        <div class="field">
            <label class="label" for="serviceDate">Date needed</label>
            <input type="date" name="serviceDate" class="input" />
        </div>

        <button class="button" id="submitRequest">Submit Request</button>
    `

    return html
}


const mainContainer = document.querySelector("#container")
//listening for the Submit Request button being clicked.  Once clicked it checks the target id on line 23.  Specifically looking for identifyer of id - property must match property on line 23 ie. if property was name, must be name - must match.
mainContainer.addEventListener("click", clickEvent => {
    if (clickEvent.target.id === "submitRequest") { //must match line 23
        // Get what the user typed into the form fields. If no value, the variable storing the value would say undefined.
        const userDescription = document.querySelector("input[name='serviceDescription']").value //looking at document and selecting particular piece of document (webpage) Searching document for specific elements, taking values out of them and assigning them to a variable name so can use it for something else.  Taking values out of what is being displayed on the page.
        const userAddress = document.querySelector("input[name='serviceAddress']").value
        const userBudget = document.querySelector("input[name='serviceBudget']").value
        const userDate = document.querySelector("input[name='serviceDate']").value

        // Make an object out of the user input.  Making an object that has unique values of what customer just entered, putting it into the function that lives in dataAccess
        const dataToSendToAPI = {
            description: userDescription,
            address: userAddress,
            budget: userBudget,
            neededBy: userDate
        }

        // Send the data to the API for permanent storage
        sendRequest(dataToSendToAPI)
    }
})