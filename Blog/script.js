document.addEventListener('DOMContentLoaded', () => {
    const postsContainer = document.getElementById('posts-container')

    fetch('https://jsonplaceholder.typicode.com/posts')
        .then(response => response.json())
        .then(data => {
            data.forEach(post => {
                const postElement = document.createElement('div')
                postElement.className = 'post'

                const title = document.createElement('h2')
                title.textContent = post.title

                const body = document.createElement('p')
                body.textContent = post.body

                postElement.appendChild(title)
                postElement.appendChild(body)

                postsContainer.appendChild(postElement)
            })
        })
        .catch(error => {
            console.error('Erro ao carregar posts:', error)
        })
})
