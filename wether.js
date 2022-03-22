fetch("https://forecast9.p.rapidapi.com/status/", {
	"method": "GET",
	"headers": {
		"x-rapidapi-host": "forecast9.p.rapidapi.com",
		"x-rapidapi-key": "fb4f9b6105msh5b6d7fb5fd910a1p1d64bbjsn5dd5e79cbc4f"
	}
})
.then(response => {
	console.log(response);
})
.catch(err => {
	console.error(err);
});