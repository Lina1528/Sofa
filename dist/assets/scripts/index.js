"use strict";

var header = function header(context) {
  console.log(context);
};

$(document).ready(function () {
  header('this is string to header.js');
});