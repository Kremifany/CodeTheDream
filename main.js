let request = new Request("https://swapi.dev/api/films/1/") 
let result =  fetch(request).then(result => {
    let response =  result.json().then((data) => {
        console.log(data)
            console.log(document.getElementById("demo"));
            document.getElementById("demo").style.fontSize = "25px"; 
            document.getElementById("demo").style.color = "red";
            document.getElementById("demo").style.backgroundColor = "yellow";        
          document.getElementById("demo").innerHTML=data.title;
    });

});
