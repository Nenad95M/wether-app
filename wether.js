//pravimo klasu vreme
class Weather{
	constructor(city,state){
		this.apiKey='fb4f9b6105msh5b6d7fb5fd910a1p1d64bbjsn5dd5e79cbc4f';
		this.city=city;
		this.state=state;
	}
	//fecovanje apija
	async getWeather(){
		const response=
		await fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${this.city},
		${this.country}&appid=dd2611e71b4e5fe6b7ebc8f358ce5012`);
		//uzimamo api odgovor kao objekat
		const responseData=await response.json();
       //vracamo ono objekat koji nam treba iz json-a.
		return responseData;
	}
	//podesavanje lokacije
	changeLocation(city, state){
		this.city;
		this.state=state;
	}
}






/*
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
*/