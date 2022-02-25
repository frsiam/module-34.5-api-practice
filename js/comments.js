const loadComments = () => {
    fetch('https://jsonplaceholder.typicode.com/comments')
        .then(res => res.json())
        .then(data => displayComments(data))
}
loadComments()

const displayComments = data => {
    console.log(data)
    data.forEach(comment => {
        console.log(comment)
    })
}