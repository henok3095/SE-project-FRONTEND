// Create a new User as a Client

const formE1 = document.getElementById('signup-form');

formE1.addEventListener('submit', (event) => {
  event.preventDefault(); // Prevent the default form submission

  const formData = new FormData(formE1);
  const data = Object.fromEntries(formData);
  console.log(data)

  
  fetch('http://localhost:8000/auth/users/', {

  method: 'POST',
  headers: {
    'Content-type': 'application/json',
  },
  body: JSON.stringify(data),

})
  .then(response => {
    if (response.ok) {
      
      // location.href = "merged-frontend-stock/"
      
      window.location.href = '../login.html';
      return response.json(); // Parse the response JSON
    }else {
        // Handle login error
        document.getElementById('error-message').textContent = 'Email is already in use !';
        document.getElementById('error-message').style.display = 'block';
  }
  })
});


  