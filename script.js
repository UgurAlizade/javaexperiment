eye = document.getElementById('eye')
slash = document.getElementById('slashed')
input = document.getElementById('input2')
document.getElementById('eye').addEventListener('click',function(){
    this.classList.add('move');
    slash.classList.add('move');
    input.type = 'password';
});
document.getElementById('slashed').addEventListener('click',function(){
    this.classList.remove('move');
    eye.classList.remove('move');
    input.type = 'text';
});