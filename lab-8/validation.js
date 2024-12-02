

function validateForm() {
    // Get values from form inputs
    const firstName = DOMPurify.sanitize(document.getElementById("firstName").value);
    const lastName = DOMPurify.sanitize(document.getElementById("lastName").value);
    const email = DOMPurify.sanitize(document.getElementById("email").value);
    const password = DOMPurify.sanitize(document.getElementById("password").value);
    const confirmPassword = DOMPurify.sanitize(document.getElementById("confirmPassword").value);
    
    // Regular expression for email validation
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    // Check for empty fields
    if (!firstName || !lastName || !email || !password || !confirmPassword) {
        alert("All fields are required.");
        return false;
    }

    // Check email format
    if (!emailPattern.test(email)) {
        alert("Invalid email format.");
        return false;
    }

    // Check if passwords match
    if (password !== confirmPassword) {
        alert("Passwords do not match.");
        return false;
    }

    // If all validations pass
    return true;
}
