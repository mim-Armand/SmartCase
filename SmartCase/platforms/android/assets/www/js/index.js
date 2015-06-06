var username = "SmartCase";
var pass = "password";
function checkAuth(){
    var u = $("#use").val();
    var p = $("#pas").val();
 if(u == username && p == pass){
    alert("good");
 }else{
    alert("Wrong Username and/or password!\nTry again!");
 }
}

// var app = {
//     // Application Constructor
//     initialize: function() {
//         this.bindEvents();
//     },
//     // Bind Event Listeners
//     //
//     // Bind any events that are required on startup. Common events are:
//     // 'load', 'deviceready', 'offline', and 'online'.
//     bindEvents: function() {
//         document.addEventListener('deviceready', this.onDeviceReady, false);
//     },
//     // deviceready Event Handler
//     //
//     // The scope of 'this' is the event. In order to call the 'receivedEvent'
//     // function, we must explicitly call 'app.receivedEvent(...);'
//     onDeviceReady: function() {
//         app.receivedEvent('deviceready');
//     },
//     // Update DOM on a Received Event
//     receivedEvent: function(id) {
//         var parentElement = document.getElementById(id);
//         var listeningElement = parentElement.querySelector('.listening');
//         var receivedElement = parentElement.querySelector('.received');

//         listeningElement.setAttribute('style', 'display:none;');
//         receivedElement.setAttribute('style', 'display:block;');

//         console.log('Received Event: ' + id);
//     }
// };

// app.initialize();
///////////////////////////////////////////////////
var url_bag = 'https://bagjourney.sita.aero/baggage/bagsforflight/v1.0/airport_code/AMS/arr_dep_indicator/D/airline_code/XS/flight_no/1823/dep_flight_date/2015-06-01';
///////////////////////////////////////////////////
function onBodyLoad() {

    showLoading();
    window.isRipple = (window.tinyHippos != null);
    window.isPhoneGap = /^file:\/{3}[^\/]/i.test(window.location.href);
    window.isIOS = !window.isRipple && navigator.userAgent.match(/(ios|iphone|ipod|ipad)/gi) != null;
    window.isAndroid = !window.isRipple && navigator.userAgent.match(/(android)/gi) != null;
    window.isWP8 = !window.isRipple && navigator.userAgent.match(/(Windows Phone)/gi) != null;

    if(isWP8 || isAndroid || isIOS){
        document.addEventListener("deviceready", onDeviceReady, false);
    } else {
        navigator.connection = {};
        Connection = {};
        navigator.connection.type = 'wifi';
        // if(appData.locations == undefined)testing();
        if(typeof navigator.notification === 'undefined') navigator.notification = window;
        onDeviceReady();
    }
}

function onDeviceReady(){
    console.log("Device is ready...");
    $.ajax({
        url: 'url_bag'
    }).done(function(d){
        console.log("Done: " + d);
    }).fail(function(err){
        console.log("ERR: " + JSON.stringify(err));
    })
}

function showLoading(){

}

function switchPages(o, i){
    $(o).hide();
    $(i).show();
}