function playGame() {
    // Компьютер 1 загадывает число
    const secretNumber = Math.floor(Math.random() * 100) + 1;
    console.log(`Компьютер 1 загадал число: ${secretNumber}`);

    let low = 1;
    let high = 100;
    let guess;
    let attempts = 0;

    // Компьютер 2 пытается угадать число, используя бинарный поиск
    while (true) {
        guess = Math.floor((low + high) / 2);
        attempts++;

        console.log(`Компьютер 2: Пробую число ${guess}.`);

        if (guess === secretNumber) {
            console.log(`Компьютер 1: Угадал! Число ${secretNumber} было угадано за ${attempts} попыток.`);
            break;
        } else if (guess < secretNumber) {
            console.log(`Компьютер 1: Больше.`);
            low = guess + 1;
        } else {
            console.log(`Компьютер 1: Меньше.`);
            high = guess - 1;
        }
    }
}

// Запуск игры
playGame();
