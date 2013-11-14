/*
Demo codes for https://github.com/newghost/bootstrap-jquery-plugin
*/
var run = function(selector) {
  //console.log($(selector).text(), $(selector + "Result"));

  var result = eval($(selector).text())
    , $result = $(selector + "Result")
    ;

  $result.size() && $result.html(JSON.stringify(result));
};