let btn = document.getElementById('btn');
let div = document.getElementById('respostas');


let arrNum = [];


function calcular() {
    let nomeVar = document.getElementById('nome').value;
    let cursoVar = document.getElementById('curso').value;
    let nota1Var = parseInt(document.getElementById('nota1').value);
    let nota2Var = parseInt(document.getElementById('nota2').value);
    let nota3Var = parseInt(document.getElementById('nota3').value);

    if (cursoVar !== '0') {
        let numeros = {
            nome: nomeVar,
            curso: cursoVar,
            nota1: nota1Var,
            nota2: nota2Var,
            nota3: nota3Var,
            media: (nota1Var + nota2Var + nota3Var) / 3
        };

        arrNum.push(numeros);
        console.log(arrNum);

        criarTabela();
        limpar();
    } else {
        alert('Escolha o Curso do Aluno');
    }
}

function limpar() {
    document.getElementById('nome').value = '';
    document.getElementById('nome').focus();
    document.getElementById('curso').value = '0';
    document.getElementById('nota1').value = '';
    document.getElementById('nota2').value = '';
    document.getElementById('nota3').value = '';
}

function criarTabela() {
    let table01 = document.getElementById('table01');
    table01.innerHTML = '';

    for (let i = 0; i < arrNum.length; i++) {
        table01.innerHTML += `
            <tr style="width:100%;"> 

                <td>${arrNum[i].nome}</td>
                <td>${arrNum[i].curso}</td>
                <td>${arrNum[i].nota1}</td>
                <td>${arrNum[i].nota2}</td>
                <td>${arrNum[i].nota3}</td>
                <td>${arrNum[i].media.toFixed(2)}</td>

            </tr>
        `;
    }

    let mediaG = 0

    for(let i=0; i<arrNum.length;i++){
        mediaG += arrNum[i].media
    }

    mediaG /= arrNum.length;


    let mediaAc=0
    let mediaAb=0
    for(let i=0; i<arrNum.length;i++){
        if(arrNum[i].media >= mediaG){
            mediaAc++

        }
        else{
            mediaAb++
        }
    }

    // arrNum.innerHTML=`Alunos cadastrados ${arrNum.length}`;
    div.innerHTML=`O numero de alunos cadastrados é ${arrNum.length}<br>
    A media geral é ${mediaG.toFixed(1)}<br>
    Media acima é ${mediaAc}<br>
    Media acima é ${mediaAb}
    `;
    

    
    
   
}

btn.addEventListener('click', calcular);
