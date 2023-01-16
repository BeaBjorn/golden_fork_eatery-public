"use strict"

/*
Created by : Beatrice Bjorn
For : Project - Restaurant - webbutveckling III, DT173G
Last updated : 2022-08-21
*/

//gets the url for the rest-api to be used
let hoturl = "https://studenter.miun.se/~bebj2100/writeable/projekt_webservice_vt22-BeaBjorn/api/rest_hotDrinks.php";

//Stores the element with id in variable
let hotDrinks = document.getElementById("hotDrinks");
//an if-statement checking weather elements are present on page or not
if (hotDrinks != null) {
    //The function "init" is run when the page gets reloaded
    window.onload = init;
    //The function "init" which runs the function "getDrinks"
    function init() {
        getDrinks();
    }
    //The function "getDrinks" that gets the url stored in the variable "hoturl"
    //Through the url all the data stored in the database table gets collected
    //The function "printDrinks" is run and console.log is used to print any errors to the terminal
    function getDrinks() {
        fetch(hoturl)
            .then(response => {
                if (response.status != 200) {
                    return
                }
                return response.json()
                    .then(data => printDrinks(data))
                    .catch(err => console.log(err))
            })
    }


    //The function printDrinks gets the id to the element where data should be printed
    //innerHTML is used to erase previous data from the element 
    //A forEach-loop and innerHTML is used to print data from the database
    function printDrinks(drinks) {
        const hotEl = document.getElementById("hotDrinks");
        hotEl.innerHTML = "";

        drinks.forEach(drink => {
            hotEl.innerHTML += `
                           <h3 class="menuH3" id="name${drink.id}">${drink.drinkName}</h3>
                           <p class="descP" id="price${drink.id}">${drink.drinkPrice} $ </p>
                           `
        });

    }

}

//gets the url for the rest-api to be used
let noalcurl = "https://studenter.miun.se/~bebj2100/writeable/projekt_webservice_vt22-BeaBjorn/api/rest_noAlcohol.php";

//Stores the element with id in variable
let noAlcohol = document.getElementById("noAlcohol");
//checks if element is present on page or not
if (noAlcohol != null) {
    //The function "init" is run when the page gets reloaded
    window.onload = init;
    //The function "init" which runs the function "getDrinks"
    function init() {
        getDrinks();
    }
    //The function "getDrinks" that gets the url stored in the variable "noalcurl"
    //Through the url all the data stored in the database table gets collected
    //The function "printDrinks" is run and console.log is used to print any errors to the terminal
    function getDrinks() {
        fetch(noalcurl)
            .then(response => {
                if (response.status != 200) {
                    return
                }
                return response.json()
                    .then(data => printDrinks(data))
                    .catch(err => console.log(err))
            })
    }

    //The function printDrinks gets the id to the element where data should be printed
    //innerHTML is used to erase previous data from the element 
    //A forEach-loop and innerHTML is used to print data from the database
    function printDrinks(drinks) {
        const noalcEl = document.getElementById("noAlcohol");
        noalcEl.innerHTML = "";

        drinks.forEach(drink => {
            noalcEl.innerHTML += `
                           <h3 class="menuH3" id="name${drink.id}">${drink.drinkName}</h3>
                           <p class="descP" id="price${drink.id}">${drink.drinkPrice} $ </p>
                           `
        });

    }

}

//gets the url for the rest-api to be used
let alcoholurl = "https://studenter.miun.se/~bebj2100/writeable/projekt_webservice_vt22-BeaBjorn/api/rest_alcohol.php";

let alcohol = document.getElementById("alcohol");
//const variables that stores the ids of the elements in index.html
if (alcohol != null) {
    //The function "init" is run when the page gets reloaded
    window.onload = init;
    //The function "init" which runs the function "getDrinks"
    function init() {
        getDrinks();
    }
    //The function "getDrinks" that gets the url stored in the variable "alcoholurl"
    //Through the url all the data stored in the database table gets collected
    //The function "printDrinks" is run and console.log is used to print any errors to the terminal
    function getDrinks() {
        fetch(alcoholurl)
            .then(response => {
                if (response.status != 200) {
                    return
                }
                return response.json()
                    .then(data => printDrinks(data))
                    .catch(err => console.log(err))
            })
    }

    //The function printDrinks gets the id to the element where data should be printed
    //innerHTML is used to erase previous data from the element 
    //A forEach-loop and innerHTML is used to print data from the database
    function printDrinks(drinks) {
        const alcEl = document.getElementById("alcohol");
        alcEl.innerHTML = "";

        drinks.forEach(drink => {
            alcEl.innerHTML += `
                           <h3 class="menuH3" id="name${drink.id}">${drink.drinkName}</h3>
                           <p class="descP" id="price${drink.id}">${drink.drinkPrice} $ </p>
                           `
        });

    }

}

