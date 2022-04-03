export async function statRetrievebyId(ID) {
    return fetch(process.env.REACT_APP_BASE_URL + "/stat/retrieve/" + ID, {
        method: "GET",
        headers: new Headers({
            "Content-Type": 'application/json',
            "Accept": 'application/json',
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Methods": "GET,POST,PUT,DELETE,OPTIONS",
            "Access-Control-Allow-Credentials": true,
        })
    })
    .then((res) => res.json())
}