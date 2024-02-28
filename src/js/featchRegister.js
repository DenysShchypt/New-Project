document.querySelector("#newUser").addEventListener("submit", formHandler);

function formHandler(event) {
    event.preventDefault();

    const firstName = event.target.elements.firstName.value;
    const lastName = event.target.elements.lastName.value;
    const email = event.target.elements.email.value;
    const password = event.target.elements.password.value;

    const fetchOptions = {
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ firstName, lastName, email, password }),
    };

    fetch(
        `http://localhost:3030/api/auth/signup`,
        fetchOptions
    )
        .then(response => {
            if (!response.ok) {
                throw new Error('Net response was not ok');
            }
            return response.json();
        })
        .then((data) => {
            const saveInformationUser = JSON.stringify(data);
            localStorage.setItem("user", saveInformationUser);
            window.location.href = "blog.html";
        })
        .catch(error => {
            console.log(error.message);
        });
    event.target.reset();
}



