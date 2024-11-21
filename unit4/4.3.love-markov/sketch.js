// The nonsensical text produced in my exercise is from the book "The Camp Fire Girls Amid the Snow," written by Margaret Vandercook.

let rm;

function setup() {
  rm = RiTa.markov(2);

  let data = document.getElementById("source").innerText;

  rm.addText(data);

  let lines = rm.generate(6);

  let letter = select("#letter");

  letter.child(createP('My Dearest Friend,'));

  for (let l = 0; l < lines.length; l++) {
    let paragraph = createP(lines[l]);
    letter.child(paragraph);
  }

  letter.child(createP('Sincerely,<br>Emma'));
}

function mousePressed(){
  letter.remove();
  letter = createDiv();
  letter.id("letter");
  setup();
}