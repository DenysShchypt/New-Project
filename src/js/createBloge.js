const refs = {
    form: document.querySelector("#newBlog"),
    listBlogs: document.querySelector('#blog')
};

refs.form.addEventListener("submit", createNewBlogHandler);
function createNewBlogHandler(event) {
    event.preventDefault();

    const title = event.target.elements.title.value;
    const text = event.target.elements.description.value;


    const fetchCreateOptions = {
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ title, text }),
    };
    const fetchAllOptions = {
        method: "GET",
        headers: {
            'Content-Type': 'application/json'
        }
    };
    fetch(
        `http://localhost:3030/api/blogs`,
        fetchCreateOptions
    )
        .then(response => {
            console.log(response);
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then((data) => {
            console.log(data);

            // window.location.href = "blog.html";
            document.getElementById("successCreate").style.display = "block";
            // action = "index.html"

        })
        .catch(error => {
            console.log(error.message);
        });


    fetch(
        `http://localhost:3030/api/blogs`,
        fetchAllOptions
    )
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }


            return response.json();
        })
        .then(createBlogs)
        .catch(error => {
            console.log(error.message);
        });
    return false

}


function createBlogs(data) {
    const markupCard = createMarkupBlogs(data);
    refs.form.insertAdjacentHTML('afterend', markupCard);
}

function createMarkupBlogs(blogs) {

    return blogs.map(({ date, title, text }) => {
        return `<ul > Blog
    <li class="item-card">Title: ${title}</li>
    <li class="item-card">Text: ${text}</li>
    <li class="item-card">Date: ${date}°С</li>
  </ul>`}).join('')

}