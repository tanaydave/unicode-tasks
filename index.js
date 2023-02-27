const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '1fc569f59fmsh5e94b4066fefa44p1257b9jsnda7312e5e63d',
		'X-RapidAPI-Host': 'corona-virus-world-and-india-data.p.rapidapi.com'
	}
};


async function worldData() {
	let response = await fetch(('https://corona-virus-world-and-india-data.p.rapidapi.com/api'), options);
	let data = await response.json();
	return data.countries_stat;
}
worldData()
	.then((data) => {

		console.table(data);
		var output = "";

		data.forEach((data) => {
			// console.log(data);
			output +=
				`<tr>
		<td>${data.country_name}</td>
		<td>${data.cases}</td>
		<td>${data.deaths}</td>
		<td>${data.total_recovered}</td>
		</tr>`
				;
		})
		print(data);
		let headings = document.getElementById('headings')
		headings.insertAdjacentHTML("afterend", output)
		let country = document.getElementById('country')
		country.addEventListener("click", () => {
			data.sort((x, y) => {
				let a = x.country_name.toUpperCase(),
					b = y.country_name.toUpperCase();
				return a == b ? 0 : a > b ? 1 : -1;


			})
			console.table(data);})
			// data.sort();
			
		// 	var output = "";

		// 	data.forEach((data) => {
		// 		// console.log(data);
		// 		output +=
		// 			`<tr>
		// <td>${data.country_name}</td>
		// <td>${data.cases}</td>
		// <td>${data.deaths}</td>
		// <td>${data.total_recovered}</td>
		// </tr>`

		// 	})
		// 	headings.insertAdjacentHTML("afterend", output)
		}
		
	)


