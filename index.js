// Add your code here
function submitData (name, email) {

  let formData = {
    name: name,
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
    .then(function(response) {
      return response.json();
    })
    .then(function(object) {
      document.body.innerHTML = object.id;
    })
    .catch(function(error) {
      document.body.innerHTML = error.message;
    });
}


// function submitData (username, userEmail){
//
//   let formData = {
//     dogName: "Byron",
//     dogBreed: "Poodle"
//   };
//
//   let configObj = {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json",
//       "Accept": "application/json"
//     },
//     body: JSON.stringify(formData)
//
//   return fetch('http://localhost:3000/users', configObj);
// }
