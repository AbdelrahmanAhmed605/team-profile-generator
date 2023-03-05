// Import classes
const fs = require("fs");
const { JSDOM } = require("jsdom");

//Create an HTML file with a BootStrap5 card grid containing column cards for each team members card from the array
//teamCards
function createHTML(teamCards) {
  // Create a new JSDOM instance
    let dom = new JSDOM(`
<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta http-equiv="X-UA-Compatible" content="ie=edge" />
        <link
        href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css"
        rel="stylesheet"
        integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3"
        crossorigin="anonymous"
        />
        <title>Team Profile</title>
    </head>
    <body>
        <header class="text-center p-3 mb-2">
            <h1 class="display-3">My Team</h1>
        </header>
        <div class="container-fluid px-5">
            <div class="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
            </div>
        </div>
    </body>
</html>`);
  const document = dom.window.document; // Get the document object from the JSDOM instance

  //Create a bootstrap column div element for each card and append the card to it
  teamCards.forEach((memberCard) => {
    const cardColumn = document.createElement("div");
    cardColumn.className = "col";
    document
      .querySelector(".row.row-cols-1.row-cols-md-2.row-cols-lg-3.g-4")
      .appendChild(cardColumn);
      cardColumn.innerHTML = memberCard;
  });

    // Output the JSDOM instance to an html file in the dist folder
  fs.writeFile("./dist/index.html", dom.serialize(), (err) => {
    if (err) {
      console.error(err);
      return;
    }
    console.log("File written successfully!");
  });
}

module.exports = createHTML;