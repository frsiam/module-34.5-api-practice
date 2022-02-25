const loadComments = () => {
    fetch('https://jsonplaceholder.typicode.com/comments')
        .then(res => res.json())
        .then(data => displayComments(data))
}
// loadComments()

const displayComments = data => {
    console.log(data)
    data.forEach(comment => {
        console.log(comment)
        const commentDiv = document.getElementById('comments')
        const div = document.createElement('div')
        div.classList.add('container','border', 'border-2', 'bg-info','my-2', 'py-3')
        div.innerHTML =`
        <div onclick="commentsDetails('${comment}')">
            <h5>Name: ${comment.name}</h5>
            <h6>Email: ${comment.email}</h6>
        </div>
        `
        commentDiv.appendChild(div)
    })
}

const commentsDetails = post => {
    console.log(post)
    /* fetch('https://jsonplaceholder.typicode.com/comments')
        .then(res => res.json())
        .then(data => console.log(data[0].id)) */
}