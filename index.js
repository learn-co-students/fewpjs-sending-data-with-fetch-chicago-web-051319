// Add your code here
function submitData(name="unknown",email="unknown@email.com"){
    let formData = {
        name: name,
        email: email
    }
    
    let configObj = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
        },
        body: JSON.stringify(formData)
    };
    let body = document.querySelector('body')

    return fetch('http://localhost:3000/users', configObj).then(response => response.json()).then(object => body.innerHTML = object.id).catch((error)=> body.innerHTML = error.message);
}