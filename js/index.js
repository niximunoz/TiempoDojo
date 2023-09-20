function cityAlert() {
    alert('Loading weather report...');
}

function changeDegrees(elemento) {
    for (let i = 1; i <= 8; i++) {
        let temp = parseInt(document.querySelector('#degrees' + i).innerText);
        if (elemento.value == "celsius") {
            document.querySelector('#degrees' + i).innerText = Math.round((temp - 32) * 5/9) + '°';
        } else {
            document.querySelector('#degrees' + i).innerText = Math.round(( temp * 9/5) + 32) + '°';
        }
    }
}
function AcceptCokkies(elemento){
    elemento.closest('.cookies').remove();
}
