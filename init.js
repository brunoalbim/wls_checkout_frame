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
