let formulario = document.getElementById('formulario')
let registros = document.getElementById('tabelaRegistro')

formulario.addEventListener('submit', (evento) => {
  evento.preventDefault()
  let endereco = $('#formulario').serializeArray();
  endereco = arrayToObject(endereco);

  console.log(localStorage.getItem('dados'));

  let itens = JSON.parse(localStorage.getItem('dados')) || [];

  let produtosDuplicados = itens
        .map(produtos => (JSON.parse(produtos)).inputNome)
        .includes(endereco.inputNome);

        console.log(produtosDuplicados);

  if (produtosDuplicados) {
    return alert(`O usuario com nome ${endereco.inputNome}`);
  }

  console.log(itens);
  itens.push(endereco);
  localStorage.setItem('dados', JSON.stringify(itens));

  adicionarProdutoTabela(endereco);
});

function adicionarProdutoTabela (item) {
  const tr = document.createElement('tr');
  tr.innerHTML = `
    <tr>
      <td>${item.inputNome}</td>
      <td>${item.inputIdade}</td>
    </tr>
  `
  registros.appendChild(tr)
}

function arrayToObject(array){
  let object = {};
  array.forEach(campo => {
      object[campo.name] = campo.value;
  });
  return object
}

