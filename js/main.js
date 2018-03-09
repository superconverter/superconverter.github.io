const contador = document.querySelector('.contador');

// Definir a data de lançamento
const data_lancamento = new Date('July 19, 2018 23:59').getTime();

// Atualizar o tempo em cada segundo
const intervalo = setInterval(() => {

    // Obter o dia de hoje e o respetivo tempo
    const tempo_dia_atual = new Date().getTime();

    // O tempo que falta desde hoje até à data de lançamento
    const distancia = data_lancamento - tempo_dia_atual;

    // Cálculos do tempo
    const dias = Math.floor(distancia / (1000 * 60 * 60 * 24));

    const horas = Math.floor((distancia % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));

    const minutos = Math.floor((distancia % (1000 * 60 * 60)) / (1000 * 60));
    
    const segundos = Math.floor((distancia % (1000 * 60)) / (1000));

    // Mostrar os resultados
    contador.innerHTML = `
      <div>${dias} <span> Dias</span></div>
      <div>${horas} <span> Horas</span></div>
      <div>${minutos} <span> Minutos</span></div>
      <div>${segundos} <span> Segundos</span></div>
    `;
    
    // Se a data de lançamento acabar e o website não estiver pronto
    if(distancia < 0) {
        
        // Parar o intervalo
        clearInterval(intervalo);
        
        contador.style.collor = 'white';
        contador.innerHTML = 'Demorou mais do que o previsto..\nA aguardar para reniciar o temporizador...';

    }

}, 1000);