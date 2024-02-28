const refs = {
    title: document.querySelector("#titleBlog"),
    form: document.querySelector("#newBlog"),
    listBlogs: document.querySelector('#listBlogs')
};
document.addEventListener("DOMContentLoaded", createAllBlogsHandler)
refs.form.addEventListener("submit", createNewBlogHandler);
const getInformationUser = localStorage.getItem('user');
const informationUser = JSON.parse(getInformationUser);
const token = informationUser.token


const fetchAllOptions = {
    method: "GET",
    headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + token
    }
};


function createAllBlogsHandler() {



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
        .then(createAllBlogs)
        .catch(error => {
            console.log(error.message);
        });
    fetch(
        `http://localhost:3030/api/auth/current`,
        fetchAllOptions
    )
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            refs.title.innerHTML = `Hello ${data}`
        })
        .catch(error => {
            console.log(error.message);
        });
}

function createNewBlogHandler(event) {
    event.preventDefault();

    const title = event.target.elements.title.value;
    const text = event.target.elements.description.value;
    const fetchCreateOptions = {
        method: "POST",
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + token
        },
        body: JSON.stringify({ title, text }),
    };
    fetch(
        `http://localhost:3030/api/blogs`,
        fetchCreateOptions
    )
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(createNewBlog)
        .catch(error => {
            console.log(error.message);
        });
    refs.form.reset()
}
function createNewBlog(data) {
    const markupCard = createMarkupOneBlog(data);
    refs.listBlogs.insertAdjacentHTML("beforeend", markupCard);
}

function createMarkupOneBlog(blog) {
    return `<ul class="list boxBlog" >
    <li class="itemFirstName"> ${blog.firstName}</li>
    <li class="itemLastName"> ${blog.lastName}</li>
    <li class="itemTitle">Title: ${blog.title}</li>  
    <li class="itemText">Text: ${blog.text}</li>
    <li class="itemDate">Date: ${blog.date}</li>  
  </ul>`
}
function createAllBlogs(data) {
    const markupCards = createMarkupBlogs(data);
    refs.listBlogs.innerHTML = markupCards;
}

function createMarkupBlogs(blogs) {
    return blogs.map(({ date, title, text, firstName, lastName }) => {
        return `<ul class="list boxBlog" >
    <li class="itemFirstName">${firstName}</li>
    <li class="itemLastName">${lastName}</li>
    <li class="itemTitle">Title: ${title}</li>
    <li class="itemText">${text}</li>
    <li class="itemDate">Date: ${date}</li>
  </ul>`}).join('')

}





