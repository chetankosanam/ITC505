function sortArray() {
    // Get user input and split it into an array of numbers
    const input = document.getElementById("numberInput").value;
    let numbers = input.split(",").map(Number);
    
    // Bubble sort implementation
    for (let i = 0; i < numbers.length; i++) {
        for (let j = 0; j < numbers.length - i - 1; j++) {
            if (numbers[j] > numbers[j + 1]) {
                // Swap elements if they are in the wrong order
                let temp = numbers[j];
                numbers[j] = numbers[j + 1];
                numbers[j + 1] = temp;
            }
        }
    }
    
    // Display the sorted array
    document.getElementById("sortedOutput").textContent = numbers.join(", ");
}

function navigateHome() {
    window.location.href = "/home";  // Replace with the actual URL if available
}

function navigateAbout() {
    window.location.href = "/about"; // Replace with the actual URL if available
}

function navigateServices() {
    window.location.href = "/services"; // Replace with the actual URL if available
}

function navigateContact() {
    window.location.href = "/contact"; // Replace with the actual URL if available
}

