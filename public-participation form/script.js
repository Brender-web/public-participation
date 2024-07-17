document.getElementById('participation-form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    // Get form data
    let name = document.getElementById('name').value;
    let email = document.getElementById('email').value;
    let feedback = document.getElementById('feedback').value;
    
    // Simulate sending data to a server (for demonstration)
    // In a real application, you would send this data to a backend server
    // using AJAX or fetch()
    console.log(`Name: ${name}, Email: ${email}, Feedback: ${feedback}`);
    
    // Show confirmation message
    document.getElementById('participation-form').style.display = 'none';
    document.getElementById('confirmation-message').style.display = 'block';
});
