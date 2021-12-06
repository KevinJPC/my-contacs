export function fetchRegister(user) {
    return (fetch("http://localhost:8082/auth/local/register", {
        method: 'POST',
        body: JSON.stringify(user),
        headers: {
            'Content-Type': 'application/json'
        }
    }).then(res => res.json())
        .catch(error => {
            // console.error('Error:', error)
        })
    )
}

export function fetchLogin(user) {
    return (fetch("http://localhost:8082/auth/local", {
        method: 'POST',
        body: JSON.stringify(user),
        headers: {
            'Content-Type': 'application/json'
        }
    }).then(res => res.json())
        .catch(error => {
            // console.error('Error:', error)
        })
    )
}

export function fetchGetUserContacs(jwt) {

    return (fetch("http://localhost:8082/contacs", {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                Authorization: "Bearer " + jwt
            }
        })
            .then(res => res.json())
            .catch(error => console.log("Error", error))
    )

}