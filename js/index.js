document.addEventListener('DOMContentLoaded', () => {
  const formulario = document.getElementById('formulario');
  const tabela = document.getElementById('tabelaRegistro');
  const registrosLista = [];

  formulario.addEventListener('submit', (event) => {
    event.preventDefault();

    let nome = document.getElementById('inputNome').value.trim();
    let Data = document.getElementById('inputData').value.trim();
    const [ano, mes, dia] = Data.split('-')
    Data = `${dia}/${mes}/${ano}`


    if (!nome) {
      alert("Por favor, preencha o nome.");
      return;
    }

    if (verificaDuplicado(nome)) {
      alert("Esse nome já foi cadastrado.");
      return;
    }

    const novoRegistro = { inputNome: nome, inputData: Data, finalizado: false};

    registrosLista.push(novoRegistro);
    atualizarTabela();

    formulario.reset();
  });

  window.excluirRegistro = function (index) {
    registrosLista.splice(index, 1); // remove do vetor
    atualizarTabela(); // atualiza a tabela
  };

  window.finalizarRegistro = function (index) {
    registrosLista[index].finalizado = true; // remove do vetor
    atualizarTabela(); // atualiza a tabela
  };

  function atualizarTabela() {
    tabela.innerHTML = `
      <tr>
        <th>Nome</th>
        <th>Data</th>
        <th>Ações</th>
      </tr>
    `;

    registrosLista.forEach((item, index) => {
      const tr = document.createElement('tr');
      tr.innerHTML = `
        <td>${item.inputNome}</td>
        <td>${item.inputData}</td>
        <td>
          <button class="btn btn-success btn-sm" onclick="finalizarRegistro(${index})">finalizar</button>
          <button class="btn btn-danger btn-sm" onclick="excluirRegistro(${index})">Excluir</button>
        </td>
      `;
      item.finalizado ? tr.style.backgroundColor = 'green' : null;
      tabela.appendChild(tr);
    });
  }

  function verificaDuplicado(nome) {
    return registrosLista.some(registro => registro.inputNome.toLowerCase() === nome.toLowerCase());
  }
});
