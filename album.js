fetch("https://jsonplaceholder.typicode.com/photos")
.then(response => response.json())
    .then(photos =>{
       //console.log(photos)
       //console.log(document.body.innerHTML)
       let output=""
       for(let i=0;i<1;i++)
       {
        output+=`<img src="photos[i].url">`
       }
    //console.log(output)
  // console.log( document.body.innerHTML)
  document.body.innerHTML=output;








    })