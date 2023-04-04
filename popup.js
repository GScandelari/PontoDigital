const btnBaterPonto = document.getElementById('btn-bater-ponto');
const btnListarPontos = document.getElementById('btn-listar-pontos');
const btnLimparPontos = document.getElementById('btn-limpar-pontos');

btnBaterPonto.addEventListener('click', () => {
  const dataHora = new Date().toLocaleString();
  chrome.storage.sync.get(['pontos'], (result) => {
    const pontos = result.pontos || [];
    pontos.push(dataHora);
    chrome.storage.sync.set({ pontos });

    const lista = document.createElement('ul');
    pontos.forEach((ponto) => {
      const item = document.createElement('li');
      item.textContent = ponto;
      lista.appendChild(item);
  });
  const div = document.createElement('div');
    div.appendChild(lista);
    const pontosAnteriores = document.querySelector('#pontos-anteriores');
    if (pontosAnteriores) {
      pontosAnteriores.remove();
    }
    div.id = 'pontos-anteriores';
    document.body.appendChild(div);
  });
});

btnListarPontos.addEventListener('click', () => {
  chrome.storage.sync.get(['pontos'], (result) => {
    const pontos = result.pontos || [];
    const lista = document.createElement('ul');
    pontos.forEach((ponto) => {
      const item = document.createElement('li');
      item.textContent = ponto;
      lista.appendChild(item);
    });
    const div = document.createElement('div');
    div.appendChild(lista);
    const pontosAnteriores = document.querySelector('#pontos-anteriores');
    if (pontosAnteriores) {
      pontosAnteriores.remove();
    }
    div.id = 'pontos-anteriores';
    document.body.appendChild(div);
  });
});

  btnLimparPontos.addEventListener('click', () => {
    chrome.storage.sync.set({ pontos: [] }, () => {
      const pontosAnteriores = document.querySelector('#pontos-anteriores');
      if (pontosAnteriores) {
        pontosAnteriores.remove();
      }
    });
  });

