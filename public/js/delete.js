const delButtonHandler = async (event) => {
    if (event.target.hasAttribute('delete')) {
        const id = event.target.getAttribute('delete');

        const response = await fetch(`/api/posts/${id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
            },
        });

        if (response.ok) {
            document.location.replace('/profile');
        } else {
            alert('Failed to delete post');
        }
    }
};

document
    .querySelector('.btn-delete')
    .addEventListener('click', delButtonHandler);
