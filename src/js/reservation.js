"use strict"

/*
Created by : Beatrice Bjorn
For : Project - Restaurant - webbutveckling III, DT173G
Last updated : 2022-08-21
*/

//gets the url for the rest-api to be used
let bookurl = "https://studenter.miun.se/~bebj2100/writeable/projekt_webservice_vt22-BeaBjorn/api/rest_booking.php";

//const variables that stores the ids to be used
const fName = document.getElementById("fName");
const sName = document.getElementById("sName");
const phoneNumber = document.getElementById("phoneNumber");
const email = document.getElementById("email");
const numberOfGuests = document.getElementById("numberOfGuests");
const time = document.getElementById("time");
const date = document.getElementById("date");
const addBookingBtn = document.getElementById("addBookingBtn");

let message = document.getElementById("message");

//an if-statement checking weather elements are present on page or not
if (fName != null && sName != null && phoneNumber != null && email != null && numberOfGuests != null && time != null && date != null) {
    //If element is not = 0 an eventlistener is added to the element 
    if (addBookingBtn != null) {
        addBookingBtn.addEventListener("click", addBooking);
    }
    //The function "init" is run when the page gets reloaded
    window.onload = init;

    //the function "addBooking" takes the values from the input fields in the form and turns them into JSON-format
    //the method POST is then used to post the data to the database, the form is cleared by using the function "clearForm" - 
    //This is done to prevent the same data to be sent several times. Console.log is used to display any errors in the terminal
    function addBooking(e) {
        e.preventDefault();

        let firstname = fName.value;
        let surname = sName.value;
        let phoneNum = phoneNumber.value;
        let mail = email.value;
        let guests = numberOfGuests.value;
        let t = time.value;
        let d = date.value;

        let jsonStr = JSON.stringify({

            fName: firstname,
            sName: surname,
            phoneNumber: phoneNum,
            email: mail,
            numberOfGuests: guests,
            date: d,
            time: t
        });


        //Fetch is used to get the URL and the method POST is used to post data in the database
        //The response is checked and if ok the data will get stored and a message about this will show on the screen
        //The function clearForm is run to empty all fields in the form
        //console.log is used to print error messages in console
        fetch(bookurl, {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: jsonStr
        })
            .then(response => response.json())
            .then(data => {
                message.innerHTML = "";
                message.innerHTML = "The reservation has been saved!";
                clearForm()
                getBookings()
            })
            .catch(err => console.log(err))

    }

    //The function "clearForm" sets all the values of the input fields to empty strings when the form has been submitted
    //the function "getBookings" is run to update the data printed on the screen
    function clearForm() {
        fName.value = "";
        sName.value = "";
        phoneNumber.value = "";
        email.value = "";
        numberOfGuests.value = "";
        time.value = "";
        date.value = "";

        getBookings();

    }

}



