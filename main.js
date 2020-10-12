leftSong="";

leftScore=0;

song_1="";
song_2="";

leftWristX=0;
leftWristY=0;

rightWristX=0;
rightWristY=0;

function preload(){
song_1=loadSound("319_harry_potter_themes_mp3_ringtone_ringtone_mp3.mp3");
song_2=loadSound("13_007_james_bond_original_theme_mp3_ringtone_ringtone_mp3.mp3");
}

function setup(){
canvas=createCanvas(600, 500);
canvas.position(475,100);
video=createCapture(VIDEO);
video.hide();
poseNet=ml5.poseNet(video,modeLoaded);
poseNet.on('pose',gotPoses);
}

function draw(){
image(video, 0, 0, 600, 500);

song_1.isPlaying()

fill("#3cff00");
strokeWeight(2);
stroke("#ff0000");

if(score_leftWrist>0.2){
        circle(leftWristX ,leftWristY ,20);
        song_2.stop()
        if(song_1==false){
            song_1.play()
            document.getElementById("name_of_song").innerHTML="Song: Harry Potter Theme Song"
        }
    }
}


function modeLoaded(){
    console.log("poseNet is initialized");
}

function gotPoses(results){
    if(results.length>0){
        console.log(results);
        leftWristX=results[0].pose.leftWrist.x;
        leftWristY=results[0].pose.leftWrist.y;

        leftScore=results[0].pose.keypoints[9].score;

        rightWristX=results[0].pose.rightWrist.x;
        rightWristY=results[0].pose.rightWrist.y;
    }
}