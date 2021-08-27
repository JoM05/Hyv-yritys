document.querySelector('.lisaaNappi').addEventListener('click', e =>{
  e.preventDefault();
  console.log(document.querySelector('#kentta').value);

  console.log(document.querySelector('#kentta2').value);
  document.querySelector('.ilmoitus').innerHTML = document.querySelector('#kentta').value + ": "+document.querySelector('#kentta2').value;


});


document.querySelector('.moro').addEventListener('click', e =>{
  e.preventDefault();
  console.log("Yea!!!!");

if (document.querySelector('#teht_a').checked){
    document.querySelector('.boksit').children[0].innerHTML = '<li class="sisalto"><input type="checkbox" id="teht_a" checked> Valmis </li>' ;
}

else {
    document.querySelector('.boksit').children[0].innerHTML = '<li class="sisalto"><input type="checkbox" id="teht_a" > HTML </li>' ;
}


if (document.querySelector('#teht_b').checked){
    document.querySelector('.boksit').children[1].innerHTML = '<li class="sisalto"><input type="checkbox" id="teht_b" checked> Valmis </li>' ;
}

else {
    document.querySelector('.boksit').children[1].innerHTML = '<li class="sisalto"><input type="checkbox" id="teht_b" > CSS </li>' ;
}

if (document.querySelector('#teht_c').checked){
    document.querySelector('.boksit').children[2].innerHTML = '<li class="sisalto"><input type="checkbox" id="teht_c" checked> Valmis </li>' ;
}

else {
    document.querySelector('.boksit').children[2].innerHTML = '<li class="sisalto"><input type="checkbox" id="teht_c" > JavaScript </li>' ;
}

if (document.querySelector('#teht_d').checked){
    document.querySelector('.boksit').children[3].innerHTML = '<li class="sisalto"><input type="checkbox" id="teht_d" checked> Valmis </li>' ;
}

else {
    document.querySelector('.boksit').children[3].innerHTML = '<li class="sisalto"><input type="checkbox" id="teht_d" > CI/CD </li>' ;
}

});

document.querySelector('.LisaaNappi').addEventListener('click', e =>{
  e.preventDefault();
  console.log("neemoseti");
  if (document.querySelector('#kentta').value=='' || document.querySelector("#kenttä2").value==''){
    document.querySelector('.Jorma').innerHTML = 'Täytä kaikki kentät';
    setTimeout(() => document.querySelector('.Jorma').innerHTML='', 3000);
}
else{
  document.querySelector('.Jorma').innerHTML = document.querySelector('#kentta').value + ": " + document.querySelector("#kentta2").value ;
}



});