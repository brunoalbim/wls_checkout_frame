#### Iniciar módulo

    <script src="https://code.jquery.com/jquery-3.4.1.min.js" charset="utf-8"></script>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/brunoalbim/wls_checkout_frame/init.css">
    <script>var urlID = "urlID"; // Cole o ID unico de loja</script>
    <script src="https://cdn.jsdelivr.net/gh/brunoalbim/wls_checkout_frame/init_v1.0.2.js" charset="utf-8"></script>
    
    <script type="text/javascript">
    // Iniciar JavaScript
      $(document).ready(function() {
        wls_loadcheckout(urlID, {
          full: false, // "true" deixa a janela preenchendo toda a tela
          // page: "pedidos", // Carregar pagina de pedidos no lugar da pagina de carrinho
          buttonClose: false // Habilitando como "false" isso remove o botão e impede que o usuario feche a janela
        });
      });
    </script>
