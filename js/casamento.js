$( document ).ready(function() {
  for (var i = 65; i <= 90; i++) {
      $('#letras').append('<option>' + String.fromCharCode(i) + '</option>');
  }

  nomes = [];
  for (var j = 0; j < mesas.length ; j++) {
    for(var k = 0; k < mesas[j].pessoas.length; k++) {
      nomes.push(mesas[j].pessoas[k]);
    }
  }
  nomes.sort();
});

$('#letras').change(function() {
   $('#nomes').prop('disabled', true);
   $("#nomes").html(""); //clear existing options

    nomes_letra = []
    for(i=0; i<nomes.length; i++) {
      if (nomes[i].charAt(0) === this.value) {
        nomes_letra.push(nomes[i]);
      }
    }
    $("#nomes").append("<option>Nome...</option>");
   for (var i=0; i<nomes_letra.length; i++) {
       $("#nomes").append("<option>"+nomes_letra[i]+"</option>");
   }
   $('#nomes').prop('disabled', false); //enable the dropdown
   changeTables($('#nomes').val())
});

$('#nomes').change(function() {
  $("#pessoas_mesa").attr("hidden", "true");
  changeTables(this.value)
  $("#pessoas_mesa").removeAttr("hidden");
});

function changeTables(nome){
  $("#pessoas_mesa").attr("hidden", "true");
  $("#mesa").html("");
  $("#outcome").html("");
  $(".circle").removeClass("table_indicator");

  for (var i = 0; i < mesas.length; i++) {
    if (mesas[i].pessoas.includes(nome)){
      $("#outcome").text(mesas[i].mesa);

      $("#"+mesas[i].key).addClass("table_indicator");

      for (var j = 0; j < mesas[i].pessoas.length; j++) {
        $("#mesa").append(mesas[i].pessoas[j]) 
        $("#mesa").append("<br>") 
      }
    }
  }
}