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
    return data;
}
worldData()
.then((data)=>{
    console.log(data);
})

