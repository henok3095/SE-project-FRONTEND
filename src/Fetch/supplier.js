const token = localStorage.getItem('token');   
const formE1 = document.getElementById('form');

console.log(token)

formE1.addEventListener('submit', (event) => {
  event.preventDefault(); // Prevent the default form submission

  const formData = new FormData(formE1);
  const data = Object.fromEntries(formData);
  console.log(data)
  /* const token = localStorage.getItem('token'); */

  fetch('http://localhost:8000/stock/suppliers/', {
    method: 'POST',
    headers:{
      'Content-type': 'application/json',
      'Authorization': `Token ${token}`,
    },
    body: JSON.stringify(data)
  })
    .then(response => response.json())
    .then(data => {
      // Handle the response from the API
      console.log(data);
    })
    .catch(error => console.log(error));
});

