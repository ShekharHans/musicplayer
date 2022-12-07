
// **PLay music 
let songIndex=0;
let audioElement = new Audio('./songs/1.mp3');
let masterPlay=document.getElementById('masterPlay');
let masterSongName=document.getElementById('masterSongName');
let myProgressBar=document.getElementById('myProgressBar');
let gif=document.getElementById('gif');
let songItem=Array.from(document.getElementsByClassName('songItem'));

let songs=[
    {songName:"Bhalobashar Morshum", filePath:"songs/1.mp3",coverPath : " covers/arijit1.png"},
    {songName:"Fitoor", filePath:"songs/2.mp3",coverPath : " covers/arijit2.png"},
    {songName:"Ami Je Tomar", filePath:"songs/3.mp3",coverPath : " covers/arijit3.png"},
    {songName:"Kalank", filePath:"songs/4.mp3",coverPath : " covers/arijit4.png"},
    {songName:"Laal Ishq", filePath:"songs/5.mp3",coverPath : " covers/arijit5.png"},
]
songItem.forEach((element,i) => {
    element.getElementsByTagName("img")[0].src=songs[i].coverPath;
    element.getElementsByClassName("songName")[0].innerHTML=songs[i].songName;
});
// audioElement.play();
// Handel Play/Pause click
masterPlay.addEventListener('click',()=>{
    if (audioElement.paused||audioElement.currentTime<=0) {
        audioElement.play();
        masterPlay.classList.remove('fa-circle-play');
        masterPlay.classList.add('fa-circle-pause')
        gif.style.opacity=1;
    }
    else{
        audioElement.pause();
        masterPlay.classList.remove('fa-circle-pause')
        masterPlay.classList.add('fa-circle-play');
        gif.style.opacity=1;
    }
})
// Listen to Events
audioElement.addEventListener('timeupdate',()=>{
// console.log('timeupdate');


// Update Seekbar
progress =parseInt((audioElement.currentTime/audioElement.duration)*100);
myProgressBar.value =progress;
})
myProgressBar.addEventListener('change',()=>{
    audioElement.currentTime=myProgressBar.value *audioElement.duration/100;
})
const makeAllPlays =()=>{
    Array.from(document.getElementsByClassName('songPlayBtn')).forEach((element)=>{
        element.classList.remove('fa-circle-pause');
        element.classList.add('fa-circle-play');
    })
}
Array.from (document.getElementsByClassName('songPlayBtn')).forEach((element)=>{
    element.addEventListener('click',(e)=>{
        makeAllPlays();
        gif.style.opacity=1;

        masterSongName.innerText=songs[songIndex].songName;
        songIndex=parseInt(e.target.id);
        e.target.classList.remove('fa-circle-play');
        e.target.classList.add('fa-circle-pause');
        audioElement.src=`songs/${songIndex}.mp3`;
        audioElement.currentTime=0;
        audioElement.play();
        masterPlay.classList.remove('fa-circle-play');
        masterPlay.classList.add('fa-circle-pause');

    })
})
document.getElementById('previous').addEventListener('click',()=>{
    if (songIndex<=0) {
        songIndex=4;
    }
    else{
        songIndex-=1;
    }
    audioElement.src=`songs/${songIndex}.mp3`;
    masterSongName.innerText=songs[songIndex].songName;
    gif.style.opacity=1;

        audioElement.currentTime=0;
        audioElement.play();
        masterPlay.classList.remove('fa-circle-play');
    masterPlay.classList.add('fa-circle-pause');
})
document.getElementById('next').addEventListener('click',()=>{
    if (songIndex>=4) {
        songIndex=0;
    }
    else{
        songIndex+=1;
    }
    audioElement.src=`songs/${songIndex}.mp3`;
    masterSongName.innerText=songs[songIndex].songName;
    gif.style.opacity=1;

        audioElement.currentTime=0;
        audioElement.play();
        masterPlay.classList.remove('fa-circle-play');
    masterPlay.classList.add('fa-circle-pause');
})
$(document).ready(function(){
    $('.container ul.toggle').click(function(){
        $(this).toggleClass('active');
        $('.container .sidebar').toggleClass('active');
    })
})