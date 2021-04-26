// automates Linkedin skill promoting process
//copy and paste all below into Chrome Dev tools

var connects = 0;
var fails = 0;
let CLICK_DELAY = 300;
function selectButtonElements() {
  let buttons = document.getElementsByClassName(
    "pv-skill-entity__featured-endorse-button-shared  artdeco-button artdeco-button--circle artdeco-button--muted artdeco-button--1 artdeco-button--secondary ember-view"
  );;
  return buttons;
}
selectButtonElements();

// delays an html element click
async function singleClick(elem) {
  return new Promise((resolve) => {
    setTimeout(() => {
      elem.click();
      resolve();
    }, CLICK_DELAY);
  });
}

// click on all but a few Connect buttons
async function bulkClick() {
  let elements = selectButtonElements();
  console.log("elements length:", elements.length);
  for (let i = 0; i < elements.length; i++) {
    try {
      await singleClick(elements[i]);
      console.log("click!");
      connects++;
    } catch (err) {
      fails++;
    }
  }
}
bulkClick();
