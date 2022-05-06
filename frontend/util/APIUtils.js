

const request = (options) => {
    const headers = new Headers({
        'Content-Type': 'application/json',
    })

    const defaults = {headers: headers};
    options = Object.assign({}, defaults, options);

    return fetch(options.url, options)
    .then(response => 
        response.json().then(json => {
            if(!response.ok) {
                return Promise.reject(json);
            }
            return json;
        })
    ).catch(response => console.log(response));
};

export function getAttributes() {
    return request({
        url: "http://localhost:80/api" + "/Attributes",
        method: "GET"
    })
}