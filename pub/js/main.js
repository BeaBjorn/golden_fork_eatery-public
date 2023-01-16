"use strict";

var infourl = "https://studenter.miun.se/~bebj2100/writeable/projekt_webservice_vt22-BeaBjorn/api/rest_about.php";

function init() {
  getInfo();
}

function getInfo() {
  fetch(infourl).then(function (e) {
    if (200 == e.status) return e.json().then(function (e) {
      return printInfo(e);
    })["catch"](function (e) {
      return console.log(e);
    });
  });
}

function printInfo(e) {
  var n = document.getElementById("aboutUs");
  n.innerHTML = "", e.forEach(function (e) {
    n.innerHTML += "<div class=\"infoDiv\"><h3 class=\"menuH3\" id=\"titel".concat(e.id, "\">").concat(e.titel, "</h3>\n                           <p class=\"descP\" id=\"info").concat(e.id, "\">").concat(e.info, "</td></div><br />\n                           ");
  });
}

window.onload = init;
var hoturl = "https://studenter.miun.se/~bebj2100/writeable/projekt_webservice_vt22-BeaBjorn/api/rest_hotDrinks.php",
    hotDrinks = document.getElementById("hotDrinks");

if (null != hotDrinks) {
  var e = function e() {
    fetch(hoturl).then(function (e) {
      if (200 == e.status) return e.json().then(function (e) {
        return n(e);
      })["catch"](function (e) {
        return console.log(e);
      });
    });
  };

  var n = function n(e) {
    var n = document.getElementById("hotDrinks");
    n.innerHTML = "", e.forEach(function (e) {
      n.innerHTML += "\n                           <h3 class=\"menuH3\" id=\"name".concat(e.id, "\">").concat(e.drinkName, "</h3>\n                           <p class=\"descP\" id=\"price").concat(e.id, "\">").concat(e.drinkPrice, " $ </p>\n                           ");
    });
  };

  window.onload = e;
}

var noalcurl = "https://studenter.miun.se/~bebj2100/writeable/projekt_webservice_vt22-BeaBjorn/api/rest_noAlcohol.php",
    noAlcohol = document.getElementById("noAlcohol");

if (null != noAlcohol) {
  var t = function t() {
    fetch(noalcurl).then(function (e) {
      if (200 == e.status) return e.json().then(function (e) {
        return o(e);
      })["catch"](function (e) {
        return console.log(e);
      });
    });
  };

  var o = function o(e) {
    var n = document.getElementById("noAlcohol");
    n.innerHTML = "", e.forEach(function (e) {
      n.innerHTML += "\n                           <h3 class=\"menuH3\" id=\"name".concat(e.id, "\">").concat(e.drinkName, "</h3>\n                           <p class=\"descP\" id=\"price").concat(e.id, "\">").concat(e.drinkPrice, " $ </p>\n                           ");
    });
  };

  window.onload = t;
}

var alcoholurl = "https://studenter.miun.se/~bebj2100/writeable/projekt_webservice_vt22-BeaBjorn/api/rest_alcohol.php",
    alcohol = document.getElementById("alcohol");

if (null != alcohol) {
  var i = function i() {
    fetch(alcoholurl).then(function (e) {
      if (200 == e.status) return e.json().then(function (e) {
        return s(e);
      })["catch"](function (e) {
        return console.log(e);
      });
    });
  };

  var s = function s(e) {
    var n = document.getElementById("alcohol");
    n.innerHTML = "", e.forEach(function (e) {
      n.innerHTML += "\n                           <h3 class=\"menuH3\" id=\"name".concat(e.id, "\">").concat(e.drinkName, "</h3>\n                           <p class=\"descP\" id=\"price").concat(e.id, "\">").concat(e.drinkPrice, " $ </p>\n                           ");
    });
  };

  window.onload = i;
}

var menu = document.querySelector(".menu"),
    menuItems = document.querySelectorAll(".menuItem"),
    hamburger = document.querySelector(".hamburger"),
    closeMenu = document.querySelector(".closeMenu"),
    openMenu = document.querySelector(".openMenu");

function toggleMenu() {
  menu.classList.contains("showMenu") ? (menu.classList.remove("showMenu"), closeMenu.style.display = "none", openMenu.style.display = "block") : (menu.classList.add("showMenu"), closeMenu.style.display = "block", openMenu.style.display = "none");
}

hamburger.addEventListener("click", toggleMenu);
var appurl = "https://studenter.miun.se/~bebj2100/writeable/projekt_webservice_vt22-BeaBjorn/api/rest_appetizers.php";
var appetizers = document.getElementById("appetizers");

if (null !== appetizers) {
  var l = function l() {
    fetch(appurl).then(function (e) {
      if (200 == e.status) return e.json().then(function (e) {
        return c(e);
      })["catch"](function (e) {
        return console.log(e);
      });
    });
  };

  var c = function c(e) {
    var n = document.getElementById("appetizers");
    n.innerHTML = "", e.forEach(function (e) {
      n.innerHTML += "\n                             <h3 class=\"menuH3\" id=\"name".concat(e.id, "\" contenteditable>").concat(e.appName, "</h3>\n                             <p class=\"descP\" id=\"description").concat(e.id, "\" contenteditable>").concat(e.appDescription, "</p>\n                             <p id=\"price").concat(e.id, "\" contenteditable>").concat(e.appPrice, " $</p>\n                             ");
    });
  };

  window.onload = l;
}

var mainurl = "https://studenter.miun.se/~bebj2100/writeable/projekt_webservice_vt22-BeaBjorn/api/rest_mains.php";
var mains = document.getElementById("mains");

if (null !== mains) {
  var a = function a() {
    fetch(mainurl).then(function (e) {
      if (200 == e.status) return e.json().then(function (e) {
        return r(e);
      })["catch"](function (e) {
        return console.log(e);
      });
    });
  };

  var r = function r(e) {
    var n = document.getElementById("mains");
    n.innerHTML = "", e.forEach(function (e) {
      n.innerHTML += "\n                <h3 class=\"menuH3\" id=\"name".concat(e.id, "\" contenteditable>").concat(e.mainName, "</h3>\n                <p class=\"descP\" id=\"description").concat(e.id, "\" contenteditable>").concat(e.mainDescription, "</p>\n                <p id=\"price").concat(e.id, "\" contenteditable>").concat(e.mainPrice, " $</p>\n                ");
    });
  };

  window.onload = a;
}

var dessurl = "https://studenter.miun.se/~bebj2100/writeable/projekt_webservice_vt22-BeaBjorn/api/rest_desserts.php";
var desserts = document.getElementById("desserts");

if (null !== desserts) {
  var u = function u() {
    fetch(dessurl).then(function (e) {
      if (200 == e.status) return e.json().then(function (e) {
        return d(e);
      })["catch"](function (e) {
        return console.log(e);
      });
    });
  };

  var d = function d(e) {
    var n = document.getElementById("desserts");
    n.innerHTML = "", e.forEach(function (e) {
      n.innerHTML += "\n                               <h3 class=\"menuH3\" id=\"name".concat(e.id, "\" contenteditable>").concat(e.dessName, "</h3>\n                               <p class=\"descP\" id=\"description").concat(e.id, "\" contenteditable>").concat(e.dessDescription, "</p>\n                               <p id=\"price").concat(e.id, "\" contenteditable>").concat(e.dessPrice, " $</p>\n                               ");
    });
  };

  window.onload = u;
}

var bookurl = "https://studenter.miun.se/~bebj2100/writeable/projekt_webservice_vt22-BeaBjorn/api/rest_booking.php";
var fName = document.getElementById("fName"),
    sName = document.getElementById("sName"),
    phoneNumber = document.getElementById("phoneNumber"),
    email = document.getElementById("email"),
    numberOfGuests = document.getElementById("numberOfGuests"),
    time = document.getElementById("time"),
    date = document.getElementById("date"),
    addBookingBtn = document.getElementById("addBookingBtn");
var message = document.getElementById("message");

if (null != fName && null != sName && null != phoneNumber && null != email && null != numberOfGuests && null != time && null != date) {
  var m = function m(e) {
    e.preventDefault();
    var n = fName.value,
        t = sName.value,
        o = phoneNumber.value,
        i = email.value,
        s = numberOfGuests.value,
        l = time.value,
        c = date.value,
        a = JSON.stringify({
      fName: n,
      sName: t,
      phoneNumber: o,
      email: i,
      numberOfGuests: s,
      date: c,
      time: l
    });
    fetch(bookurl, {
      method: "POST",
      headers: {
        "content-type": "application/json"
      },
      body: a
    }).then(function (e) {
      return e.json();
    }).then(function (e) {
      message.innerHTML = "", message.innerHTML = "The reservation has been saved!", p(), getBookings();
    })["catch"](function (e) {
      return console.log(e);
    });
  };

  var p = function p() {
    fName.value = "", sName.value = "", phoneNumber.value = "", email.value = "", numberOfGuests.value = "", time.value = "", date.value = "", getBookings();
  };

  null != addBookingBtn && addBookingBtn.addEventListener("click", m), window.onload = init;
}