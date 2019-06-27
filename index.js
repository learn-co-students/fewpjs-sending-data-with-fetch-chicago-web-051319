// Add your code here
function submitData(name, email){

    let formData = {name, email};

    const body = document.querySelector("body")

    const configObj = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify(formData)
    };

     function render(obj){
       body.innerHTML = obj["id"]
     };

     function error(err){
       body.innerHTML = err.message
     };

    return fetch("http://localhost:3000/users",configObj)
      .then((resp) => resp.json())
      .then((obj) => render(obj))
      .catch((err) => error(err))

};
