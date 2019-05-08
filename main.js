
$('.mina').click(function(){
  $('.mina').addClass('red')
})

$('.quadrato').click(function(){
  $(this).addClass('green')
})

$(document).ready(function(){


var quadrato = $('.quadrato');

var griglia = quadrato *64;

console.log(griglia);




});
