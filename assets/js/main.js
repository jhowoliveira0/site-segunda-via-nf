const spanOne = document.getElementById('spanOne');
const radioOne = document.getElementById('radioOne');

spanOne.addEventListener('click', function () {
    radioOne.checked = true;
})

const spanTwo = document.getElementById('spanTwo');
const radioTwo = document.getElementById('radioTwo');

spanTwo.addEventListener('click', function () {
    radioTwo.checked = true;
})


function verificarCampo() {

    const valorForm = document.getElementById('formNumber').value;

    if (valorForm === '') {
        alert(`Você deve preencher o campo primeiro`);
    } else {

    }
}