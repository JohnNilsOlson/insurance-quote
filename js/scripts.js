$(document).ready(function() {
  $("form#insurance").submit(function(event) {
    const age = parstInt($("input#age").val());
    const gender = $("select#gender").val();

    const quote = (100 - age) * 3;

    $("#rate").text(quote);
    $("#quote").show();
  });
});