const consoleLog = document.querySelector('#consoleLog');

consoleLog.addEventListener('click', () => {

    alert('Служит для вывода информации в консоли');
})

const Alert = document.querySelector('#alert');

Alert.addEventListener('click', () => {

    alert('простой способ вывести информацию. Показывает диалоговое окно с сообщением и кнопкой OK.');
})

const Prompt = document.querySelector('#prompt');

Prompt.addEventListener('click', () => {

    alert('«собрат» функции alert(). Отображает диалоговое окно с запросом на ввод текста.');
})