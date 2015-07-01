var username = "SmartCase";
var pass = "password";
function checkAuth() {
  var u = $("#use").val();
  var p = $("#pas").val();
  if (u == username && p == pass) {
    switchPages("#page_login", "#page_2");
    startCheckin();
  } else {
    alert("Wrong Username and/or password!\nuser: SmartCase\nPassword: password\nTry again!");
  }
}
//________________________________________________________________________________________


///////////////////////////////////////////////////
var url_bag = 'https://bagjourney.sita.aero/baggage/bagsforflight/v1.0/airport_code/AMS/arr_dep_indicator/D/airline_code/XS/flight_no/1823/dep_flight_date/2015-06-01';
///////////////////////////////////////////////////
function onBodyLoad() {

  showLoading(666);
  window.isRipple = (window.tinyHippos != null);
  window.isPhoneGap = /^file:\/{3}[^\/]/i.test(window.location.href);
  window.isIOS = !window.isRipple && navigator.userAgent.match(/(ios|iphone|ipod|ipad)/gi) != null;
  window.isAndroid = !window.isRipple && navigator.userAgent.match(/(android)/gi) != null;
  window.isWP8 = !window.isRipple && navigator.userAgent.match(/(Windows Phone)/gi) != null;

  if (isWP8 || isAndroid || isIOS) {
    document.addEventListener("deviceready", onDeviceReady, false);
  } else {
    navigator.connection = {};
    Connection = {};
    navigator.connection.type = 'wifi';
    // if(appData.locations == undefined)testing();
    if (typeof navigator.notification === 'undefined')
      navigator.notification = window;
    onDeviceReady();
  }
}

function onDeviceReady() {
  console.log("Device is ready...");
}

function showLoading(t) {
  $('body').removeClass('loaded');
  setTimeout(function() {
      $('body').addClass('loaded');
  }, t);
}

function switchPages(o, i) {
  showLoading(Math.random() * 1000);
  console.log(Math.random() * 1000)
  $(o).hide();
  $(i).show();
}


// _______________________________________________________________________________________

// _______________________________________________________________________________________
var chkstep = 0;
var sck_started = false;
function startCheckin() {
    console.log('startCheckin();');
  if (!sck_started) {
    $('#prgs_cont').css("opacity", "1");
    setTimeout(function() {
      startCheckin()
    }, 2222);
    $('#chckinIcn').removeClass().addClass('list_icons icon-spin1 animate-spin');
    $('#chckinTxt').text('Just a sec!');
    sck_started = true;
  } else {

    if (chkstep < 5) {
      chkstep++;
      setTimeout(function() {
        startCheckin();
      }, 3333 + (Math.random() * 33));
      $('#prgrs_bar').css("width", ((chkstep - 1) * 25) + 0 + "%");
      $('#prgrs_tcks>span:nth-child(' + chkstep + ')>span').addClass('prgrs_tick_fill');
      console.log(chkstep);
      switch (chkstep) {
        case 1:
          $('#chckinIcn').removeClass().addClass('list_icons icon-ok-circled2');
          $('#chckinTxt').text('Check-In ...');
          break;
        case 2:
          $('#chckinIcn').removeClass().addClass('list_icons icon-suitcase');
          $('#chckinTxt').text('Customs ...');
          break;
        case 3:
          $('#chckinIcn').removeClass().addClass('list_icons icon-flight');
          $('#chckinTxt').text('Airliner ...');
          break;
        case 4:
          $('#chckinIcn').removeClass().addClass('list_icons icon-address');
          $('#chckinTxt').text('To Airplane');
          break;
        case 5:
          $('#chckinIcn').removeClass().addClass('list_icons icon-plane-outline');
          $('#chckinTxt').text('All There!');
          $('#prgrs_li').css("opacity", "0");
          $('#prgrs_li').css("height", "0");
          $('#prgrs_li').removeClass();
          break;
      }
    } else {
        $('#done_txt').text('Done!');
        isDone = true;
        $('#prgrs_li').remove();
        // $('#cdg_ams').css("opacity", "0");
        // $('#cdg_ams').remove();
    }
  }
}


var isDone = false;
function finish(){
    if(!isDone) return;
    switchPages( '', '#win_bye')
    setTimeout(function(){
        navigator.app.exitApp();
    }, 1800);
}
// _______________________________________________________________________________________




$("#bod").ready(function () { onBodyLoad(); });
$("#lili1").click(function(){ switchPages('', '#win_new');});
$("#lili2").click(function(){ switchPages('', '#win_taxi');});
$("#lili3").click(function(){ switchPages('', '#win_bus');});
$("#lili4").click(function(){ switchPages('', '#win_asic');});
$("#lili5").click(function(){ switchPages('', '#win_beer');});

$("#done_txt").click(function(){ finish();});

$("#btn_login").click(function(){ switchPages('#page_start', '#page_login');});
$("#btn_info").click(function(){ alert('this function is unavailable for now.\n\n\nplease try again later.');});
$("#btn_suitcase").click(function(){ switchPages('', '#win_new');});

$('#btn_jhjsfdfg').click(function(){switchPages('#win_taxi', ''); alert('A taxi will wait for you on exit (5) in (7 Minutes).\n\nYou\'ll recieve an SMS when it get there.');});
$('#btn_jdsyel').click(function(){switchPages('#win_taxi', '');});

$('#btn_jdsuksns').click(function(){switchPages('#win_new', ''); alert('Sorry!\n\nThis functionality will be added very soon!');});
$('#btn_kdkfdkfdj').click(function(){switchPages('', '#win_new')});
$('#btn_jdsyel').click(function(){switchPages('#win_new', '');});

$('#btn_lsdjdhsj').click(function(){switchPages('#win_beer', ''); alert('Please follow the directions to get a cold beverage!');});
$('#btn_jsdklfdskj').click(function(){switchPages('#win_beer', '');});

$('#btn_kksdlfdsee').click(function(){switchPages('#win_asic', ''); alert('Please wait, we are on our way...');});
$('#btn_jjHFYHJVFjhg').click(function(){switchPages('#win_asic', '');});


$('#btn_jkldfkfdjl').click(function(){switchPages('#win_bus', ''); alert('Sorry but ...\nOur commun transport API is under maintanance!');});
$('#btn_jksjslljhvjh').click(function(){switchPages('#win_bus', '');});

$('#kdfhgdlkfhgfdhgldf').click(function(){switchPages('#page_login', '#page_start');});
$('#btn_dfkdfhjkfd').click(function(){checkAuth();});