const applicationState = {
    requests: []

}

const API = "http://localhost:8088"

//fetchRequests declaring a function, gives us back a fetch call - 
export const fetchRequests = () => {
    //fetch pulls info from API interplation
    return fetch(`${API}/requests`) //directions to a server resource - go to this place and get whatever is there  API is a variable name - could replace it with URL address
        .then(response => response.json()) //
        .then(
            //serviceRequests is the array you are getting
            (serviceRequests) => {
                // Store the external state in application state
                applicationState.requests = serviceRequests //saving the array so have access to it in program - saving the returned array
            }
        )
}



export const getRequests = () => {
    return applicationState.requests.map(request => ({...request}))
}

const mainContainer = document.querySelector("#container")
//fetch calls are instructions to the server
//POST method sends something to database perameter represents what we are sending
export const sendRequest = (userServiceRequest) => {
    const fetchOptions = {
        method: "POST", //saying add userServiceRequest to the database
        headers: { //tells how you want it formatted - will always use this format
            "Content-Type": "application/json"
        },
        body: JSON.stringify(userServiceRequest) //take the info I'm givin you and put it into a form json understands - turning it from JS to json - turn it into json format
    }




    return fetch(`${API}/requests`, fetchOptions) //telling it where to go 
        .then(response => response.json()) //lets promise resolve
        .then(() => {
            mainContainer.dispatchEvent(new CustomEvent("stateChanged")) //gets entire page to rerender - unrelated to fetch calls - can take it out and everything would still render - it is here to tell you when something is changed - will rerender the page   AS soon as customrer his submit button will immediately see order   See main.js mainContainer.addEventListener

        })
}

//Deleting an HTTP request
export const deleteRequest = (id) => {
    return fetch(`${API}/requests/${id}`, { method: "DELETE" })
        .then(
            () => {
                mainContainer.dispatchEvent(new CustomEvent("stateChanged"))
            }
        )
}

//Getting info about the plumbers from the API
export const fetchPlumbers = () => {
    return fetch(`${API}/plumbers`)
        .then(response => response.json())
        .then(
            (data) => {
                applicationState.plumbers = data
            }
        )
}

export const getPlumbers = () => {
    return applicationState.plumbers.map(plumber => ({...plumber}))
}


export const saveCompletion = (completionObject) => {
    const fetchOptions = {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(completionObject)
    }




    return fetch(`${API}/requests`, fetchOptions)
        .then(response => response.json())
        .then(() => {
            mainContainer.dispatchEvent(new CustomEvent("stateChanged"))

        })
}

//Getting
export const fetchCompletions = () => {
    return fetch(`${API}/plumbers`)
        .then(response => response.json())
        .then(
            (data) => {
                applicationState.plumbers = data
            }
        )
}
