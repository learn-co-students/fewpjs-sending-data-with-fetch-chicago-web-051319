// Add your code here
function submitData(name , email){
    return fetch('http://localhost:3000/users' , {
        method : 'POST' ,
        headers : {
            'Content-Type' : 'application/json' ,
            'Accept' : 'application/json'
        } ,
        body : JSON.stringify({
            'name' : name ,
            'email' : email
        })
    })
    .then(function(response){
        return response.json();
    })
    .then(function(object){
        console.log(object)
        let temp =  document.createElement('p')
        temp.innerHTML = object['id']
        document.body.appendChild(temp)
    }).catch(function(err){
        let temp = document.createElement('p')
        temp.innerHTML = err
        document.body.appendChild(temp)
    })
}


//submitData('waka' , 'wakalaka')
console.log('cream freiche')