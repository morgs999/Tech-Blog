const newFormHandler = async (event) => {
  event.preventDefault();

  const title = document.querySelector('#post-title').value.trim();
  const contents = document.querySelector('#post-contents').value.trim();

  if (title && contents) {
    const response = await fetch(`/api/posts`, {
      method: 'POST',
      body: JSON.stringify({ title, contents }),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (response.ok) {
      document.location.replace('/profile');
    } else {
      alert('Failed to create post');
    }
  }
};

document
  .querySelector('.new-post-form')
  .addEventListener('submit', newFormHandler);


// const delButtonHandler = async (event) => {
//   if (event.target.hasAttribute('data-id')) {
//     const id = event.target.getAttribute('data-id');

//     const response = await fetch(`/api/post/${id}`, {
//       method: 'DELETE',
//     });

//     if (response.ok) {
//       document.location.replace('/profile');
//     } else {
//       alert('Failed to delete post');
//     }
//   }
// };


// document
//   .querySelector('.post-list')
//   .addEventListener('click', delButtonHandler);



// let form = document
//   .querySelector('.new-post-form')
// if (form) {
//   form.addEventListener('submit', newFormHandler);
// }
// let deleter = document
//   .querySelectorAll('.btn-danger');
// if (deleter) {
//   for (let i = 0; i < deleter.length; i++) {
//     deleter[i].addEventListener('click', delButtonHandler);
//   }
// }