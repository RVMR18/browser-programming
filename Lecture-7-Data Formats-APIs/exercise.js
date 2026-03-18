const output = document.getElementById("output")

function log(text){
    output.textContent += text + "\n"
}

function clearOutput(){
    output.textContent = ""


}

document.getElementById("btnLoadUsers").onclick = loadUsers

async function loadUsers(){

    clearOutput()

    try{

        const response = await fetch(
            "https://jsonplaceholder.typicode.com/users"
        )

        // Check HTTP status
        if(!response.ok){
            throw new Error("HTTP error: " + response.status)
        }

        const users = await response.json()

        // Loop through users
        users.forEach(function(user){

            const name = user.name
            const email = user.email
            const city = user.address.city

            log(name + " - " + email + " - " + city)

        })

    }catch(error){

        log("Error: " + error.message)

    }

}   


