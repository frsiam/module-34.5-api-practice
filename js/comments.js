const loadComments = () => {
    fetch('https://jsonplaceholder.typicode.com/comments')
        .then(res => res.json())
        .then(data => displayComments(data))
}
// loadComments()

const displayComments = data => {
    // console.log(data)
    data.forEach(comment => {
        console.log(comment)
        const commentDiv = document.getElementById('comments')
        const div = document.createElement('div')
        div.classList.add('container', 'border', 'border-2', 'bg-info', 'my-2', 'py-3')
        div.innerHTML = `
        <div onclick="commentsDetails('${comment.id}')">
            <h5>Name: ${comment.name}</h5>
            <h6>Email: ${comment.email}</h6>
        </div>
        `
        commentDiv.appendChild(div)
    })
}

const commentsDetails = commentId => {
    console.log(commentId)
    const url = `https://jsonplaceholder.typicode.com/comments/${commentId}`
    fetch(url)
        .then(res => res.json())
        .then(data => console.log(data))
}