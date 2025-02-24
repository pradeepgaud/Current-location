const button = document.getElementById('get-locatiom-button')
async function getData (lat,long){
    const promise = await fetch(`http://api.weatherapi.com/v1/current.json?key=934c3b39a3bb475a85451459240812&q=${lat},${long}&aqi=yes`)
    return await promise.json()
}
async function geolocation(position){
 const result = await getData(position.coords.latitude,position.coords.longitude)
    console.log(result);
    

}

function failedToGot() {
    console.log('There was some issue');
    
}

button.addEventListener('click',async () =>{
navigator.geolocation.getCurrentPosition(geolocation,failedToGot)
})