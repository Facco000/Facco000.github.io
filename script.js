document.addEventListener('DOMContentLoaded', () => {
    const snowContainer = document.createElement('div');
    snowContainer.classList.add('snowflakes');
    document.body.appendChild(snowContainer);

    for (let i = 0; i < 30; i++) {
        setTimeout(() => {
            const snowflake = document.createElement('div');
            snowflake.classList.add('snowflake');
            snowflake.textContent = '❄';
            snowflake.style.left = Math.random() * 100 + 'vw'; // Posizione casuale orizzontale
            snowflake.style.animationDelay = Math.random() * 2 + 's'; // Ritardo massimo di 2 secondi
            snowflake.style.animationDuration = 5 + Math.random() * 5 + 's'; // Durata casuale
            snowflake.style.fontSize = Math.random() * 2 + 1 + 'em'; // Dimensione casuale
            snowContainer.appendChild(snowflake);
        }, i * 200); // Ritardo incrementale nell'aggiunta dei fiocchi
    }
});
