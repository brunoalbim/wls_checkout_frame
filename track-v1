function onlyUnique(value, index, self) {
    return self.indexOf(value) === index;
}

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
    if(getUrl()['utm_campaign']) {
        if(localStorage.getItem("utm_campaign") === null) {
            var data = [];
            data.push(getUrl()['utm_campaign']);
            data = data.filter(onlyUnique);
            localStorage.setItem("utm_campaign", JSON.stringify(data));
        } else {
            var data = localStorage.getItem("utm_campaign");
            data = JSON.parse(data);
            data.push(getUrl()['utm_campaign']);
            data = data.filter(onlyUnique);
            localStorage.setItem("utm_campaign", JSON.stringify(data));
        }

    }
}

function appendInputWls(idForm) {
    if(localStorage.getItem("utm_campaign") !== null) {
        $(idForm).append('<input name="utm_campaign_wls" style="display:none">');
        $("input[name='utm_campaign_wls']").val(localStorage.getItem("utm_campaign"));
    }
}
