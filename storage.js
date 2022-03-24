class Storage{
    constructor(){
        this.city;
        this.state;
        this.defaultCity="Kragujevac";
        this.defaultState="Serbia";
    }
    //metoda koja pristupa sacuvanom gradu iz lokal storidza
    //ako nema nista, podesava defoultni grad, ako ima bice iz lokal storidza
    getLocationData(){
     if(localStorage.getItem(city)===null){
         this.city=this.defaultCity;
     } else{
         this.city=localStorage.getItem(this.city);
     }
     
     if(localStorage.getItem(state)===null){
        this.state=this.defaultState;
    } else{
        this.state=localStorage.getItem(this.state);
    }
     return{
        city:this.city,
        state:this.state
    }
    }
    //metoda za cuvanje grada i drzave u lokal storidzu
    setLocationData(city, state){
    localStorage.setItem('city', city);
    localStorage.setItem('state', state);
    }
   
}