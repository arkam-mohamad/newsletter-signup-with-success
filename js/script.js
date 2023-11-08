$('#subscribe').click(function (e) { 
  if(isEmail($('input').val()) == false){
    $('input').addClass('red');
    $('.error').removeClass('hidden');
  } else {
    $('input').removeClass('red');
    $('.error').addClass('hidden');

    $('main').addClass('hidden');
    $('aside').removeClass('hidden')
  }
});
$('#dismiss').click(function (e) { 
  $('aside').addClass('hidden');
  $('main').removeClass('hidden')
});


function isEmail(mail){
  let regex = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;

  if(!regex.test(mail)){
    return false
  } else {
    return true
  }
}
