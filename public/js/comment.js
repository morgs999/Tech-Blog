const commentHandler = async (event) => {
    event.preventDefault();
    const url = location.href;
    const urlArray = url.split('/')
    console.log(urlArray);
    const post_id = urlArray[urlArray.length - 1];
    console.log(post_id);

    const contents = document.querySelector('#comment').value;
    console.log(contents);
    if (contents) {

        const response = await fetch(`/api/posts/comment`, {
            method: 'POST',
            body: JSON.stringify({ contents, post_id }),
            headers: {
                'Content-Type': 'application/json',
            },
        });

        if (response.ok) {
            console.log(response.body);
            document.location.reload();
        } else {
            alert('Failed to post comment');
        }
    }
};

document
    .querySelector('.comment-form')
    .addEventListener('submit', commentHandler);