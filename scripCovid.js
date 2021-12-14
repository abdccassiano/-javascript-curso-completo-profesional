window.onload = iniciar;

function iniciar() {
    let boton = document.getElementById("btnCargar");
    boton.addEventListener('click', clickBoton);
}

async function cargarurl(url){
    let response = await fetch(url);
    return response.json();
}

async function clickBoton() {

    let pais = document.getElementById("selectPais").value;
    let fecha = document.getElementById("inputFecha").value;
    let url = `https://api.covid19tracking.narrativa.com/api/${fecha}/country/${pais}`;
    let json = await cargarurl(url);

    let estadisticas = json.dates[fecha].countries[pais];
    console.log(estadisticas)
    document.getElementById("today_confirmed").innerHTML = estadisticas.today_confirmed;
    document.getElementById("today_deaths").innerHTML = estadisticas.today_deaths;
    document.getElementById("today_intensive_care").innerHTML = estadisticas.today_intensive_care;
    document.getElementById("today_new_confirmed").innerHTML = estadisticas.today_new_confirmed;
    document.getElementById("today_new_deaths").innerHTML = estadisticas.today_new_deaths;
    document.getElementById("today_new_hospitalised_patients_with_symptoms").innerHTML = estadisticas.today_new_hospitalised_patients_with_symptoms;
    document.getElementById("today_new_intensive_care").innerHTML = estadisticas.today_new_intensive_care;
    document.getElementById("today_new_open_cases").innerHTML = estadisticas.today_new_open_cases;
    document.getElementById("today_new_recovered").innerHTML = estadisticas.today_new_recovered;

/*today_confirmed
today_deaths
today_hospitalised_patients_with_symptoms
today_intensive_care
today_new_confirmed
today_new_deaths
today_new_hospitalised_patients_with_symptoms
today_new_intensive_care
today_new_open_cases
today_new_recovered
today_new_total_hospitalised_patients*/

    console.log(estadisticas)

}