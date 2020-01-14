let brand  = document.querySelector('#brand');
let titulo = brand.querySelector('span');

titulo.textContent = 'Daniela Gonzalez';


let campos = [
    document.querySelector('#nome'),
    document.querySelector('#data'),
    document.querySelector('#peso'),
    document.querySelector('#altura')
];

const form  = document.querySelector('form');
const tbody = document.querySelector('table.table > tbody#tabela-de-pacientes');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    let tr = document.createElement('tr');

    campos.forEach((campo) => {
        let td = document.createElement('td');
        td.textContent = campo.value;
        tr.appendChild(td);
    })

    let td = document.createElement('td');
    td.textContent = (campos[2].value / (campos[3].value**2)).toFixed(2);
    console.log(td)
    tr.appendChild(td);

    tbody.appendChild(tr);

    this.reset();
    campos[0].focus();
})
