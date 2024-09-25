document.addEventListener('DOMContentLoaded', function() {
  const blogPostsContainer = document.getElementById('blog-posts');
  const blogPosts = JSON.parse(localStorage.getItem('blogPosts')) || [];

  blogPosts.forEach(post => {
    const postDiv = document.createElement('div');
    postDiv.classList.add('post');
    postDiv.innerHTML = `
      <h2>${post.title}</h2>
      <p>${post.content}</p>
      <p><strong>Posted by:</strong> ${post.username}</p>
    `;
    blogPostsContainer.appendChild(postDiv);
  });
});
