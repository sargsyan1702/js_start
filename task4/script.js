const linkText = document.querySelector('#changeText');
linkText.addEventListener('click', function(event) {
    event.preventDefault();
    const newLinkText = prompt('Новый текст ссылки');
    linkText.textContent = newLinkText;
})



