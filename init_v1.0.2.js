$("body").append(
'<div class="wls-grid-a5f48f1g23sas9">'+
  '<div class="wls-fundomodal-ads80d8as09d8s"></div>'+
  '<svg class="wls-buttonclose-da6fd53g8adfss" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="15" y1="9" x2="9" y2="15"></line><line x1="9" y1="9" x2="15" y2="15"></line></svg>'+
  '<iframe class="wls-frame-as76dasf76d7as86d" frameborder="0" src="https://app.workleads.com.br/checkout/'+ urlID +'"></iframe>'+
'</div>'
);

function wls_loadcheckout(urlID, config) {
    if (config.full === true) {
      $(".wls-frame-as76dasf76d7as86d").addClass("wls-fullmodal-as76dasf76d7as86d");
      $(".wls-buttonclose-da6fd53g8adfss").css("display", "none");
    } else {
      $(".wls-frame-as76dasf76d7as86d").removeClass("wls-fullmodal-as76dasf76d7as86d");
    }

    if (config.page) {
      $(".wls-frame-as76dasf76d7as86d").attr("src", "https://app.workleads.com.br/checkout/" + urlID + "/" + config.page);
    }

  wls_openmodal(config.buttonClose);
}
$(".wls-buttonclose-da6fd53g8adfss").click(function() {
  wls_closemodal();
});

function wls_openmodal(buttonClose) {
  $(".wls-buttonclose-da6fd53g8adfss").css("display", "");

  if (buttonClose === false) {
    $(".wls-buttonclose-da6fd53g8adfss").css("display", "none");
  }

  $(".wls-fundomodal-ads80d8as09d8s").css("display", "");
  $(".wls-fundomodal-ads80d8as09d8s").css("background", "rgba(0, 0, 0, 0.73)");
  $(".wls-frame-as76dasf76d7as86d").css("height", "calc(100% - 100px)");
}
function wls_closemodal() {
  $(".wls-buttonclose-da6fd53g8adfss").css("display", "none");
  $(".wls-fundomodal-ads80d8as09d8s").css("display", "none");
  $(".wls-fundomodal-ads80d8as09d8s").css("background", "rgba(0, 0, 0, 0)");
  $(".wls-frame-as76dasf76d7as86d").css("height", "0");
}
