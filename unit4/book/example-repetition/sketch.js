let word = "imagine";
let wc = 0;

function setup() {
  // No canvas needed
  noCanvas();

  let content = select("body");
  content.attribute("id", "content");

  // Create the title page with the book's title and author
  // reference: https://p5js.org/reference/p5/createDiv/
  let titlePage = createDiv();
  titlePage.attribute("id", "titlePage");
  titlePage.child(createElement("h1", "Imagine a World Like That").style("text-align", "center").style("margin-top", "20vh"));
  titlePage.child(createElement("h2", "By: Emma Lord").style("text-align", "center").style("margin-top", "2vh"));
  content.child(titlePage);

  // Add a delay before generating book content to mimic turning the page
  // reference: https://www.w3schools.com/jsref/met_win_settimeout.asp
  setTimeout(() => {
    titlePage.remove(); // Remove the title page

    // Create a new section for book content
    let bookSection = createDiv();
    bookSection.attribute("id", "bookSection");
    select("#content").child(bookSection);

    // Generate book content
    while (wc < 50000) {
      bookSection.child(createElement("h2", String(word + " ").repeat(random(2, 6)).toUpperCase()));

      for (let p = 0; p < random(5, 20); p++) {
        let paragraph = '';
        for (let s = 0; s < random(3, 20); s++) {
          let internalPunct = [",", ",", ",", ";", " --"];
          let endPunct = [".", ".", "?", "!"];
          let sentence = word.charAt(0).toUpperCase() + word.slice(1);
          let sentenceLength = random(9, 25);
          wc += sentenceLength + 1;
          for (let w = 0; w < sentenceLength; w++) {
            sentence += " " + word;
            if (random() < 0.2) {
              sentence += random(internalPunct);
            }
          }
          sentence += random(endPunct) + " ";
          paragraph += sentence;
        }
        bookSection.child(createElement("p", paragraph));
      }
    }

    window.PagedPolyfill.preview();
  }, 2000);
}