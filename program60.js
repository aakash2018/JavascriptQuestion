const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function shuffleArray(array) {
    let currentIndex = 0;
    for (let ch of array) {
        const randomIndex = Math.floor(Math.random() * (currentIndex + 1));
        [array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]];
        currentIndex++;
    }
    return array;
}

console.log(shuffleArray(numbers));
