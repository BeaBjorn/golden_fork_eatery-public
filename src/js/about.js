"use strict"

/*
Created by : Beatrice Bjorn
For : Project - Restaurant - webbutveckling III, DT173G
Last updated : 2022-08-21
*/

//gets the url for the rest-api to be used
let infourl = "https://studenter.miun.se/~bebj2100/writeable/projekt_webservice_vt22-BeaBjorn/api/rest_about.php";

//The function "init" is run when the page gets reloaded
window.onload = init;
//The function "init" which runs the function "getInfo"
function init() {
    getInfo();
}
//The function "getInfo" that gets the url stored in the variable "infourl"
//Through the url all the data stored in the database table gets collected
//The function "printInfo" is run and console.log is used to print any errors to the terminal
function getInfo() {
    fetch(infourl)
        .then(response => {
            if (response.status != 200) {
                return
            }
            return response.json()
                .then(data => printInfo(data))
                .catch(err => console.log(err))
        })
}

//The function printInfo gets the id to the element where data should be printed
//innerHTML is used to erase previous data from the element 
//A forEach-loop and innerHTML is used to print data from the database
function printInfo(info) {
    const infoEl = document.getElementById("aboutUs");
    infoEl.innerHTML = "";

    info.forEach(i => {
        infoEl.innerHTML += `<div class="infoDiv"><h3 class="menuH3" id="titel${i.id}">${i.titel}</h3>
                           <p class="descP" id="info${i.id}">${i.info}</td></div><br />
                           `
    });
}





