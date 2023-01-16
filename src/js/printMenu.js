"use strict"

/*
Created by : Beatrice Bjorn
For : Project - Restaurant - webbutveckling III, DT173G
Last updated : 2022-08-21
*/

//gets the url for the rest-api to be used
let appurl = "https://studenter.miun.se/~bebj2100/writeable/projekt_webservice_vt22-BeaBjorn/api/rest_appetizers.php";

//Stores the element with id in variable
const appetizers = document.getElementById("appetizers");
//an if-statement checking weather elements are present on page or not
if (appetizers !== null) {
    //The function "init" is run when the page gets reloaded
    window.onload = init;
    //The function "init" which runs the function "getAppetizers"
    function init() {
        getAppetizers();
    }
    //The function "getAppetizers" that gets the url stored in the variable "appurl"
    //Through the url all the data stored in the database table gets collected
    //The function "printAppetizers" is run and console.log is used to print any errors to the terminal
    function getAppetizers() {
        fetch(appurl)
            .then(response => {
                if (response.status != 200) {
                    return
                }
                return response.json()
                    .then(data => printAppetizers(data))
                    .catch(err => console.log(err))
            })
    }


    //The function printAppetizers gets the id to the element where data should be printed
    //innerHTML is used to erase previous data from the element 
    //A forEach-loop and innerHTML is used to print data from the database
    function printAppetizers(appetizers) {
        const appEl = document.getElementById("appetizers");
        appEl.innerHTML = "";

        appetizers.forEach(app => {
            appEl.innerHTML += `
                             <h3 class="menuH3" id="name${app.id}" contenteditable>${app.appName}</h3>
                             <p class="descP" id="description${app.id}" contenteditable>${app.appDescription}</p>
                             <p id="price${app.id}" contenteditable>${app.appPrice} $</p>
                             `
        });
    }

}


//gets the url for the rest-api to be used
let mainurl = "https://studenter.miun.se/~bebj2100/writeable/projekt_webservice_vt22-BeaBjorn/api/rest_mains.php";

//Stores the element with id in variable
const mains = document.getElementById("mains");
//an if-statement checking weather elements are present on page or not
if (mains !== null) {
    //The function "init" is run when the page gets reloaded
    window.onload = init;
    //The function "init" which runs the function "getMains"
    function init() {
        getMains();
    }
    //The function "getMains" that gets the url stored in the variable "mainurl"
    //Through the url all the data stored in the database table gets collected
    //The function "printMains" is run and console.log is used to print any errors to the terminal
    function getMains() {
        fetch(mainurl)
            .then(response => {
                if (response.status != 200) {
                    return
                }
                return response.json()
                    .then(data => printMains(data))
                    .catch(err => console.log(err))
            })
    }

    //The function printMains gets the id to the element where data should be printed
    //innerHTML is used to erase previous data from the element 
    //A forEach-loop and innerHTML is used to print data from the database
    function printMains(mains) {
        const mainEl = document.getElementById("mains");
        mainEl.innerHTML = "";

        mains.forEach(main => {
            mainEl.innerHTML += `
                <h3 class="menuH3" id="name${main.id}" contenteditable>${main.mainName}</h3>
                <p class="descP" id="description${main.id}" contenteditable>${main.mainDescription}</p>
                <p id="price${main.id}" contenteditable>${main.mainPrice} $</p>
                `
        });
    }

}


//gets the url for the rest-api to be used
let dessurl = "https://studenter.miun.se/~bebj2100/writeable/projekt_webservice_vt22-BeaBjorn/api/rest_desserts.php";
//Stores the element with id in variable
const desserts = document.getElementById("desserts");
//an if-statement checking weather elements are present on page or not
if (desserts !== null) {
    //The function "init" is run when the page gets reloaded
    window.onload = init;
    //The function "init" which runs the function "getDesserts"
    function init() {
        getDesserts();
    }
    //The function "getDesserts" that gets the url stored in the variable "dessurl"
    //Through the url all the data stored in the database table gets collected
    //The function "printDesserts" is run and console.log is used to print any errors to the terminal
    function getDesserts() {
        fetch(dessurl)
            .then(response => {
                if (response.status != 200) {
                    return
                }
                return response.json()
                    .then(data => printDesserts(data))
                    .catch(err => console.log(err))
            })
    }

    //The function printDesserts gets the id to the element where data should be printed
    //innerHTML is used to erase previous data from the element 
    //A forEach-loop and innerHTML is used to print data from the database
    function printDesserts(desserts) {
        const dessEl = document.getElementById("desserts");
        dessEl.innerHTML = "";

        desserts.forEach(dess => {
            dessEl.innerHTML += `
                               <h3 class="menuH3" id="name${dess.id}" contenteditable>${dess.dessName}</h3>
                               <p class="descP" id="description${dess.id}" contenteditable>${dess.dessDescription}</p>
                               <p id="price${dess.id}" contenteditable>${dess.dessPrice} $</p>
                               `
        });

    }

}

