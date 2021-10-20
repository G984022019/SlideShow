let mainElement = document.querySelector("div.main>img");
let thumbnailsElement = document.querySelector("div.thumbnails");
let count = 1;
const MIN = 1;
const MAX = 19;
let id;
let url;
let nowPlaying = false;
let timer;
function play(){
    if (!nowPlaying){
      nowPlaying = true;
      autoPlay();
    }
}
function stop(){
    clearTimeout(timer);
    nowPlaying = false;
}
function reset() {
  stop();
  thumbnailsElement.children[count-1].classList.remove('selected');
  mainElement.setAttribute('src', "https://www.takushoku-u.ac.jp/summary/images/summary_successive-chancellor_img_01.jpg");
  thumbnailsElement.children[MIN-1].classList.add('selected');
  count = 1;
}

function autoPlay() {
  right();
  timer = setTimeout(function(){
    autoPlay();
  },1000);
}

function left(){
    count --;
    if(count < MIN){
      count = MAX;
      thumbnailsElement.children[0].classList.remove('selected');
    } else {
      thumbnailsElement.children[count].classList.remove('selected');
    }
    if (count < 10) {
      url = "https://www.takushoku-u.ac.jp/summary/images/summary_successive-chancellor_img_0" + count +".jpg";
    } else {
      url = "https://www.takushoku-u.ac.jp/summary/images/summary_successive-chancellor_img_" + count + ".jpg";
    }
    mainElement.setAttribute('src', url);
    thumbnailsElement.children[count-1].classList.add('selected');
}
function right(){
    count ++;
    if(count > MAX){
      count = MIN;
      thumbnailsElement.children[MAX-1].classList.remove('selected');
    } else {
       thumbnailsElement.children[count-2].classList.remove('selected');
    }
    if (count < 10) {
      url = "https://www.takushoku-u.ac.jp/summary/images/summary_successive-chancellor_img_0" + count +".jpg";
    } else {
      url = "https://www.takushoku-u.ac.jp/summary/images/summary_successive-chancellor_img_" + count + ".jpg";
    }
    mainElement.setAttribute('src', url);
    thumbnailsElement.children[count-1].classList.add('selected');
}
