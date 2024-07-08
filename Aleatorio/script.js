// Get the button element
const button = document.createElement('button');
button.textContent = 'Change Background';

// Add event listener to change background color on button click
button.addEventListener('click', () => {
    const randomColor = getRandomColor();
    document.body.style.backgroundColor = randomColor;
});

// Function to generate a random color
function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

// Append the button to the container
const container = document.querySelector('.container');
container.appendChild(button);