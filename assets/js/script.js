function tabuada() {
  let valorA = document.querySelector('input#txtnum');
  let res = document.querySelector('select#seltab');
  //let item = ''; //inicia a variável em 0

  if (valorA.value.length == 0) {
    window.alert('[ERRO] Faltou digitar o número!');
    return;
  }

  valorA = Number(valorA.value);
  res.innerHTML = '';

  for (let valorB = 0; valorB <= 10; valorB++) {
    let item = document.createElement('option'); // criar option dentro do select
    let resultado = valorA * valorB;
    item.text = `${valorA} X ${valorB} = ${resultado}`;
    res.appendChild(item);
  }
  //res.innerHTML = item;
}