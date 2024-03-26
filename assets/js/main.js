var formCpf = document.getElementById("formCpf");
var formNumber = document.getElementById("formNumber");

const spanOne = document.getElementById('spanOne');
const radioOne = document.getElementById('radioOne');

const spanTwo = document.getElementById('spanTwo');
const radioTwo = document.getElementById('radioTwo');

spanOne.addEventListener('click', function () {
    radioOne.checked = true;
    formNumber.classList.add("hidden");
    formNumber.value = "";
    formCpf.classList.remove("hidden");
})

spanTwo.addEventListener('click', function () {
    radioTwo.checked = true;
    formCpf.classList.add("hidden");
    formCpf.value = "";
    formNumber.classList.remove("hidden");
})


function verificarCampo() {

    const valorFormOne = document.getElementById('formNumber').value;
    const valorFormTwo = document.getElementById('formCpf').value;

    if (valorFormOne === '' && valorFormTwo === '') {
        alert(`Você deve preencher o campo primeiro`);
    } 
    
}

Inputmask({
    'mask': ['999.999.999-99','99.999.999/9999-99'],
    'keepStatic': true
}).mask('#formCpf');
