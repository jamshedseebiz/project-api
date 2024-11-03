const registrationform = document.getElementById('registrationForm');

registrationform.addEventListener('submit', (event) => {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const password = document.getElementById('password').value;

    // console.log(phone);
    // console.log(email);
    // console.log(name);
    // console.log(password);

  
    const data = {
        name: name,
        email: email,
        phone: phone,
        password: password
    };
 
    const url = "http://localhost:3001/user";

  
    fetch(url, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
       
        
    })
    .then(response => response.json())
    .then(result => {
        console.log("Data saved:", result);
        registrationform.reset();
        window.location.replace("menu.html");

    })
    .catch(error => {
        console.error("Error:", error);
    });
});


 