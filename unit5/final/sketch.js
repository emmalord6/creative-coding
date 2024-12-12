// Artist Statement: For Project 5: Final Project, I was very excited that we were allowed to express our full creativity in developing this project. When reading the project’s guidelines, I quickly knew what I wanted to generate. Since I was young, I have always loved silly one-tap video games that are engaging and distracting. Reflecting on some of my favorite video games as a child and reading the assignment instructions, I thought about the famous game Flappy Bird. Flappy Bird has millions of players worldwide, which is a testament to its success and entertainment ability. This was a leading factor in why I formed a game representing Flappy Bird. I knew my peers, and I would genuinely enjoy exploring and playing the game because of Flappy Bird’s impressive history. Thinking about how fun and popular Flappy Bird was, I knew I wanted my creation to be inspired by the game.
// At first, when I began generating ideas for what I wanted the presentation of my game to be, I was coming up with ideas such as a hot air balloon, an airplane, or some flying animal. However, I quickly realized that these ideas didn’t fully reflect my personality, which I wanted to incorporate into the project in some element because of the amount of freedom we were given with this assignment. Because of this, I decided to have my flying object be a musical note because music has been a passion of mine my entire life, specifically singing. The musical movement of the note also exemplifies a song, with several changes in keys, which I think is a fascinating hidden gem for anyone who catches it.
// In the larger community of creative coding, my project demonstrates how coding can be an appealing and personable experience, combatting some stereotypes about the coding process. Instead of attempting to replicate assignments or previous projects by coders, I could take my knowledge, learn from others, and make it my own. This project highlights how one’s interests can be intertwined into technical work, resulting in a unique and amusing creation. By combining my love for music with the interactive gaming aspect, I made an experience that was both fun and representative of my individuality.
// Overall, this project allowed me to explore and express my creativity in a personal and meaningful way. Completing this project reminded me that coding is not just about functionality, which was my thoughts after taking Intro to Coding. Coding is about designing experiences that resonate with individuals. Designing and developing this game has been enriching, and I hope it brings joy to those who play it, just as Flappy Bird did for me and countless others. Through this project, I have learned the importance of infusing personal elements into my work, making it technically sound and emotionally engaging. Additionally, this project has illustrated the broad potential of creative coding, highlighting how technical skills can form something truly special and reflective of one’s desires and interests.


// these sources significantly helped me develop this project. I combined my prior knowledge, pieces of code from the videos, and the use of debugging certain sections of code from Copilot to successfully develop my game.
// reference: https://youtu.be/P3egGN0EvYs?si=YURkDakdvYmyHxte
// reference: https://youtu.be/Xw2MEG-FBsE?si=gLdDcq4Iq-oAHDDy
// reference: https://copilot.microsoft.com


let note;
let obstacles = [];
let score = 0;
let gameOver = false;

function setup() {
    createCanvas(800, 800)
    note = { x: 64, y: height / 2, gravity: 0.4, lift: -12, velocity: 0 }; // create the note object
}

function draw() {
    background(75, 0, 130); // set background color

    if (!gameOver) {
        note.velocity += note.gravity; // apply gravity
        note.y += note.velocity; // update the note's position

        if (note.y > height) {
            note.y = height; // prevent the note from falling off the bottom
            note.velocity = 0;
        }

        if (note.y < 0) {
            note.y = 0; // prevent the note from going off the top
            note.velocity = 0;
        }

        fill(255, 182, 193); // set the note color to light pink
        textSize(32);
        text('♪', note.x, note.y); // display the note as a musical note

        if (frameCount % 70 === 0) {
            obstacles.push({ top: random(height / 2), bottom: random(height / 2), x: width, w: 20, speed: 4, passed: false }); // add new obstacles to the array
        }

        for (let i = obstacles.length - 1; i >= 0; i--) {
            obstacles[i].x -= obstacles[i].speed; // move the obstacle to the left

            fill(255, 182, 193); // set the obstacle color to light pink
            rect(obstacles[i].x, 0, obstacles[i].w, obstacles[i].top); // draw the top part of the obstacle
            rect(obstacles[i].x, height - obstacles[i].bottom, obstacles[i].w, obstacles[i].bottom); // draw the bottom part of the obstacle

            if (note.y < obstacles[i].top || note.y > height - obstacles[i].bottom) {
                if (note.x > obstacles[i].x && note.x < obstacles[i].x + obstacles[i].w) {
                    gameOver = true; // end the game if the note hits an obstacle
                }
            }

            if (obstacles[i].x < -obstacles[i].w) {
                obstacles.splice(i, 1); // remove offscreen obstacles
            }

            if (!obstacles[i].passed && obstacles[i].x < note.x) {
                score++; // increase score when the note passes an obstacle
                obstacles[i].passed = true;
            }
        }

        fill(255); // set text color to white
        textSize(24);
        text('Score: ' + score, 10, 30); // display the score
    } else {
        textSize(32);
        textAlign(CENTER, CENTER);
        fill(255); // set text color to white
        text('Aw...try again!', width / 2, height / 2); // display message when someone loses
    }
}

function keyPressed() {
    if (key === ' ' && !gameOver) {
        note.velocity += note.lift; // apply lift to move the note up when the spacebar is pressed
    }
}