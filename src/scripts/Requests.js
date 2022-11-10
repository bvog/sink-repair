

import { getRequests } from "./dataAccess.js"

export const Requests = () => {
    const requests = getRequests()

    let html = `
        <ul>
            ${
                requests.map(convertRequestToListElement).join("")
            }
        </ul>
    `

    return html
}


export const convertRequestToListElement = (getRequests) => {
    let html = 
        `<li>
        <div class="request_discription">
            ${getRequests.description}</div>
        </li>
        `
        return html
}