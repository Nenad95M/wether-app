class UI{
    //klasa uzima dom elemente preko id-a
    constructor(){
     this.location=document.getElementById('w-location');
     this.desc=document.getElementById('w-desc');
     this.string=document.getElementById('w-string');
     this.details=document.getElementById('w-details');
     this.icon=document.getElementById('w-icon');
     this.feelsLike=document.getElementById('w-feelsLike');
     this.wind=document.getElementById('w-wind');
    }
    //metoda paint ubacije sadrzaj iz apija kao textContet ovih elemenata kojima smo pristupili
    //potrebna je dorada i ispravka, drugi je api u pitanju
    paint(weather){
        this.location.textContent=weather.display.location.full;
        this.desc.textContent=weather.weather;
        this.string.textContent=weather.temperature_string;
        this.icon.setAttribute('src',weather.icon_url);
        this.humidity.textContent=`Relativna vlaznost:
        ${weather.relative_humidity}`;
      
        this.feelsLike.textContent=`Subjektivni osecaj :
        ${weather.feelsLike_string}`;
        this.dewpoint.textContent=`Dewpoint:
        ${weather.dewpoint_string}`;
        this.wind.textContent=`Wind:
        ${weather.wind_string}`;
    }
}