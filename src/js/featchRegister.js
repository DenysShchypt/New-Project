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
            console.log(response);

            if (!response.ok) {
                throw new Error('Networksfdfsdgs response was not ok');
            }
            return response.json();
        })
        .then((data) => {

            document.getElementById("successBlog").style.display = "block";
            window.location.href = "blog.html";
        })
        .catch(error => {
            console.log(error.message);
        });
}



