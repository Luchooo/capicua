$(document).ready(function()
{


  var contador=0;

  $("#boton_1").mouseover(function ()
  {
    $("#caja").attr("placeholder","Ingrese radio del circulo");
    $("#boton_1").click(function()
    {
      var input= $("#caja").val();
      var area_circulo=Math.PI*(Math.pow(input,2))
      swal("Un circulo de radio "+input+" tiene un área de: "+area_circulo);
    });
  });

  $("#boton_2").mouseover(function ()
  {
    $("#caja").attr("placeholder","Ingrese lado del cuadrado");
    $("#boton_2").click(function()
    {
      var input= $("#caja").val();
      var area_cuadrado=Math.pow(input,2)
      swal("Un cuadrado de lados "+input+" tiene un área de: "+area_cuadrado);
    });
  });

  $("#boton_3").mouseover(function ()
  {
    $("#caja").attr("placeholder","Ingrese base del triangulo");
    $("#boton_3").click(function()
    {
      var input= $("#caja").val();
      swal
      ({
        title: "Triangulo",
        text: "Escriba altura del triangulo:",
        type: "input",
        showCancelButton: true,
        closeOnConfirm: false,
        animation: "slide-from-top",
        inputPlaceholder: "altura triangulo"
      },
      function(inputValue)
      {
          if (inputValue === false)
          return false;

          if (inputValue === "")
          {
            swal.showInputError("No a escrito nada por favor escriba la base del trinagulo");
            return false
          }
            var area_triangulo= (input*inputValue)/2
            swal("Un triangulo de base "+input+" y altura " + inputValue+" tiene un  área de "+ area_triangulo);
      });
    });
  });

  $("#boton_4").mouseover(function ()
  {
    $("#caja").attr("placeholder","¿Capicua?");
    $("#boton_4").click(function ()
    {
      var numero= $("#caja").val();
      var invertido = numero.split("").reverse().toString();
      for (var i = 0; i < invertido.length; i++)
      {
	    invertido=invertido.replace(",","")
			};

      if (numero===invertido)
      {
        swal("El nùmero "+numero+ " es capicua")
      }
      else
      {
        swal("El nùmero "+numero+" NO es capicua")
      }
    });

  });


  $("#boton_5").click(function ()
  {
    var palabra= $("#caja2").val();
    var palabra_mensaje= $("#caja2").val();
    palabra=palabra.toLocaleLowerCase().split("");

    for (var i = 0; i < palabra.length; i++)
    {
      if ((palabra[i]==="a")||(palabra[i]==="e")||(palabra[i]==="i")||(palabra[i]==="o")||(palabra[i]==="u"))
      {
        contador++;
      }
    }

    var consonantes=palabra.length-contador;
    swal("La palabra "+palabra_mensaje+" tiene "+contador+" vocales y "+consonantes+" consonantes.")
    contador=0;

  });



});
