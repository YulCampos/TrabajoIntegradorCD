let contador = 0;

    function incrementar() {
      contador++;
      actualizarContador();
    }

    function decrementar() {
      if (contador > 0) {
        contador--;
        actualizarContador();
      } else {
        alert("No puedes hacer eso");
      }
    }

    function actualizarContador() {
      document.getElementById("contador").innerText = contador;
    }


    function actualizarDescuento() {
        var precioBase = 200;
        var descuento = 0;
    
        var categoriaSelect = document.getElementById('categoriaSelect');
        var tipo = categoriaSelect.options[categoriaSelect.selectedIndex].value;
        

        switch (tipo) {
            case '1':
                descuento = 0.8;
                break;
            case '2':
                descuento = 0.5;
                break;
            case '3':
                descuento = 0.15;
                break;
            default:
                break;
        }
    
        var totalPagar = contador*(precioBase - (precioBase * descuento));
        document.getElementById('totalPagar').innerText =  totalPagar.toFixed(2);

    }
