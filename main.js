document.addEventListener('DOMContentLoaded', function() {
    let listVideo = document.querySelectorAll('.vdeo-list .vid');
    let mainVideo = document.querySelector('.main-video video');
    let title = document.querySelector('.main-video .title');

    listVideo.forEach(video => {
        video.onclick = () => {
            listVideo.forEach(vid => vid.classList.remove('active'));
            video.classList.add('active');
            if (video.classList.contains('active')) {
                let src = video.querySelector('video').getAttribute('src');
                mainVideo.src = src;
                let text = video.querySelector('.titel').textContent;
                title.textContent = text;
            }
        };
    });
});

let likesCount = 0;
let dislikesCount = 0;

function likeVideo() {
    likesCount++;
    document.getElementById("likes").innerText = likesCount;
}

function dislikeVideo() {
    dislikesCount++;
    document.getElementById("dislikes").innerText = dislikesCount;
}

document.getElementById("commentForm").addEventListener("submit", function(event) {
    event.preventDefault(); // mataytsftch dakchi 3chwai
    //    ta tkhrj l3bat 
    const comment = document.getElementById("comment").value;

    //   ta tbyn comment und kike und dislike  
    alert(Comment . likeVideo . dislikeVideo);
});