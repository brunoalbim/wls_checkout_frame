$(document).ready(function() {
    addWlsUtm(); appendInputWls();
  });

  function getUrl() {
    var parametros = window.location.search;
    parametros = parametros.replace("?", "");
    parametros = parametros.split("&");

    var data = {};
    parametros.forEach(function (parte) {
        var chaveValor = parte.split('=');
        var chaveUnica = chaveValor[0];
        var valorUnico = chaveValor[1];
        data[chaveUnica] = valorUnico;
    });
    return data;
  }

  function addWlsUtm() {
      if(getUrl()['utm_source'] || getUrl()['utm_medium'] || getUrl()['utm_campaign']) {
          if(localStorage.getItem("utm_campaign_wls") === null) {
              var data = [];
          } else {
              var data = localStorage.getItem("utm_campaign_wls");
              data = JSON.parse(data);
          }

          var includeArray = {
            utm_source: getUrl()['utm_source'] ? getUrl()['utm_source'] : null,
            utm_medium: getUrl()['utm_medium'] ? getUrl()['utm_medium'] : null,
            utm_campaign: getUrl()['utm_campaign'] ? getUrl()['utm_campaign'] : null
          }

          if (JSON.stringify(data).includes(JSON.stringify(includeArray)) === false) {
            data.push(includeArray);
            localStorage.setItem("utm_campaign_wls", JSON.stringify(data));
          }
      }
  }

  function appendInputWls() {
      if(localStorage.getItem("utm_campaign_wls") !== null && $("input[name='utm_campaign_wls']")) {
          $("input[name='utm_campaign_wls']").val(localStorage.getItem("utm_campaign_wls"));
      }
  }
