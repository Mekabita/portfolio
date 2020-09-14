const BASE_URL = "https://api.github.com/users/Mekabita";

function get(url = "") {
    return fetch(`${BASE_URL}${url}`).then(response => {
        if (response.ok) {
            return response.json();
        }
        throw new Error("Request Failed");
    });
}

export default {get};
