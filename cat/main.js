const noBtn = document.querySelector('.button');
const noBtnRect = noBtn.getBoundingClientRect();
noBtn.addEventListener('click', () => {
    const i = Math.floor(Math.random() * 400) + 1;
    const j = Math.floor(Math.random() * 400) + 1;
    noBtn.style.left = i + 'px';
    noBtn.style.top = j + 'px';
});
let count = 0;
        let btn = document.getElementById("btn");
        btn.onclick = function () {
         count++;
        if(count == 3){
            document.getElementById("video").style.display = 'block';
            video.autoplay = true;
            video.load();
            video.loop = true;
            document.getElementById("wrap").style.display = 'none';
            document.getElementById("image").style.display = 'block';
            document.getElementById("image2").style.display = 'block';
        }
        }
