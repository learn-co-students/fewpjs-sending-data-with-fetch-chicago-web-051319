function submitData(userName, email) {
    let formData = {
        name: userName,
        email: email
      };
    
    let configObj = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify(formData)
      };  
    
    return fetch("http://localhost:3000/users", configObj)
        .then(res => res.json())
        .then(data => document.body.innerHTML = data.id)
        .catch(error => document.body.innerHTML = error);
}