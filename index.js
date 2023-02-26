const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '1fc569f59fmsh5e94b4066fefa44p1257b9jsnda7312e5e63d',
		'X-RapidAPI-Host': 'corona-virus-world-and-india-data.p.rapidapi.com'
	}
};


async function worldData (){
    let response = await fetch(('https://corona-virus-world-and-india-data.p.rapidapi.com/api'),options);
    let data = await response.json();
    return data.countries_stat;
}
worldData()
.then((data)=>{
    console.log(data[0].country_name);
	var output="";
	data.forEach((data) => {
		console.log(data.country_name);
		output+=
		`<tr>
		<td>${data.country_name}</td>
		</tr>`
	;
})
let headings = document.getElementById('headings')
headings.insertAdjacentHTML("afterend",output)
})

