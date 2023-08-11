
document.addEventListener('DOMContentLoaded', function () {

    const button = document.getElementById('button');
    const inputFrase = document.getElementById('input-frase');
    const outputFrase = document.getElementById('output-frase');

    button.addEventListener('click', function () {

        textInput = inputFrase.value;

        outputFrase.textContent = textInput;

    });

    document.addEventListener('keydown', function (event) {

        if (event.keyCode === 13) {

            textInput = inputFrase.value;

            outputFrase.textContent = textInput;

        }

    });

});
