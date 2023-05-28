// ====================Mobile nav=======================//
const mobileNavButton = document.querySelector('.mobile-nav-button');
const mobileNavIcon = document.querySelector('.mobile-nav-button__icon');
const mobileNav = document.querySelector('.mobile-nav');

mobileNavButton.addEventListener('click', function(){
    mobileNavIcon.classList.toggle('active');
    mobileNav.classList.toggle('active');
    document.body.classList.toggle('no-scroll');
})
// ==================Video==========================//
const videoBtn = document.querySelector('#video-btn');
const videoBtnIcon = document.querySelector('#video-story-icon');
const videoFile = document.querySelector('#video-story');
const videoStoryOverlay = document.querySelector('#video-story-overlay');


videoBtn.addEventListener('click', function() {

    function toggleOverlay(event){
        if(event.type === 'mouseleave') {
            videoStoryOverlay.classList.add('hidden');
        } else {
            videoStoryOverlay.classList.remove('hidden');
        }
    };
    if(videoFile.paused) {
        videoFile.play();
        videoBtnIcon.src = 'img/story/pause_icon.svg';
        videoStoryOverlay.onmouseleave = toggleOverlay;
        videoStoryOverlay.onmouseenter = toggleOverlay;
    } else {
        videoFile.pause();
        videoBtnIcon.src = 'img/story/play.svg';
        videoStoryOverlay.onmouseleave = null;
        videoStoryOverlay.onmouseenter = null;
    }
})
