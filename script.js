
// Funksjon for å hente data fra API
function fetchData() {

    let apiURL = ``;

    
    fetch(apiURL)
        .then(response => response.json())
        .then(data => {

            console.log(data); //Sjekker at dataen blir hentet og vilken data som ligger i API-en

            // document.getElementById('text2').innerHTML = `<h3>${data.name}, ${data.sys.country}</h3>`;
            // document.getElementById('text2').innerHTML = `<p>${data.main.temp} &deg;C </p>`;
            // document.getElementById('image').innerHTML = `<img src="./CLoud.png" alt="A Single Cloud" height="60px" width="60px"><h5> Cloud coverage: ${data.clouds.all} %</h5>`;

             //// Skjuller elementene før man skriver sted
            //  document.getElementById('skyies').style.display = 'block';
            //  document.getElementById('minTemp').style.display = 'block';
            //  document.getElementById('highTemp').style.display = 'block';
            
        })
        .catch(error => {
            console.error('Feil ved henting av data:', error);
        });
}

document.getElementById('btn').addEventListener('click', fetchData);

// Gjør at man kan bruke enter tasten på keyboard
document.getElementById('cityName').addEventListener('keypress', function (event) {
    if (event.key === 'Enter') {
        fetchData();
    }
});

// Kall fetchData() når siden lastes
window.onload = function() {
    fetchData();
};
