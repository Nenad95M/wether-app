//inicijalizacija objekta vreme iz klase vreme
const weather=new Weather('Kragujevac', 'RS');
//inicijalizacija ui objekta iz klase UI
const ui=new UI();
//Ucitavanje vremena prilikom ucitavanja doma
document.addEventListener('DOMContentLoaded', getWeather);
//promena lokacije, event
document.getElementById('w-change-btn').addEventListener('click', (e)=>{
    const city=document.getElementById('city').value;
    const state=document.getElementById('state').value;
    weather.changeLocation('Kragujevac', 'RS');

    //uzmi i prikazi vreme
    getWeather();

    //zatvaramo modal preko j-queryja
     $('#locModal').modal('hide');
});

//posto je asinhrona, vraca obecanje
// weather.changeLocation("Dulene", "RS");
function getWeather(){
weather.getWeather().then(results=>{
    //pozivamo metodu koja upisuje u dom rezultate
    ui.paint(results);
})
.catch(err=>console.log(err));
}
