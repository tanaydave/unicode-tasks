{fetch("https://jsonplaceholder.typicode.com/users")
    .then(response => response.json())
    .then(user => {
       // console.log(user)
        let output = "";
        //for(let u of user ){
            //console.log(u)
            user.forEach(u => {
                
            
        output +=
            `<tr id="users">
     <th class="headings">${u.id}</th>
     <th class="headings">${u.name}</th>
     <th class="headings">${u.email}</th>
       <th class="headings"><button id="1btn${u.id}">to do list</button></th>
       <th class="headings"><button id="2btn${u.id}"><a href="album.html">albums</a></button></th>

      </tr>`
       // console.log(output)
    })
        const users=document.getElementById('users')
        //users.innerHTML=output;
        users.insertAdjacentHTML("afterend",output)
        let y=document.getElementById('1btn1')
        //console.log(y)
        y.addEventListener("click",function(e){
             console.log(e.target.innerHTML) 
             
         })
        
    }
    )
}

//button1.addEventListener=("click",()=> console.log("hello"))
