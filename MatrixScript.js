const letters = "AbcdefghijklmNopqrstuvwxyz";
let iteration = 0;
let intervalTime = 50; // Initial interval time in milliseconds

function animateMatrix() {
    document.getElementById("matrix").innerText = document.getElementById("matrix").innerText
        .split("")
        .map((letter, index) => {
            if (index < iteration) {
                return document.getElementById("matrix").dataset.value[index];
            }
            return letters[Math.floor(Math.random() * 26)];
        })
        .join("");

    if (iteration >= document.getElementById("matrix").dataset.value.length) {
        setTimeout(() => {
            iteration = 0; // Reset iteration to 0 after the delay
            animateMatrix(); // Restart the animation
        }, 2000); // Delay in milliseconds before resetting iteration to 0
        return;
    }

    iteration += 1 / 3;

    setTimeout(animateMatrix, intervalTime); // Call the function recursively with the specified interval time
}

animateMatrix(); // Start the animation

