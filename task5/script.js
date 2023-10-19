const dublicateField = document.querySelector('#dublicateField');
const input = document.querySelector('input');
const button = document.querySelector('button');

input.addEventListener('input', function(event){
    event.preventDefault();
    dublicateField.textContent = input.value;
})

button.addEventListener('click', function(event){
    console.log(input.value);
    input.value = '';
    dublicateField.textContent = '';
})