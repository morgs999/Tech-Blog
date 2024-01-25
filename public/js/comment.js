const commentHandler = async (event) => {
    event.preventDefault();
    const url = location.href;
    const urlArray = url.split('/')
    const post_id = urlArray[urlArray.length - 1];

    const contents = document.querySelector('#comment').value;

    if (contents) {

        const response = await fetch(`/api/posts/comment`, {
            method: 'POST',
            body: JSON.stringify({ contents, post_id }),
            headers: {
                'Content-Type': 'application/json',
            },
        });

        if (response.ok) {
            document.location.reload();
        } else {
            alert('Failed to post comment');
        }
    }
};

document
    .querySelector('.comment-form')
    .addEventListener('submit', commentHandler);