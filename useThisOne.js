// automates Linkedin skill promoting process
//copy and paste all below into Chrome Dev tools
function dropmein(){
var connects = 0;
var fails = 0;
let CLICK_DELAY = 300;
const showMoreDiv = document.getElementsByClassName(
  "pv-profile-section__card-action-bar pv-skills-section__additional-skills artdeco-container-card-action-bar artdeco-button artdeco-button--tertiary artdeco-button--3 artdeco-button--fluid artdeco-button--muted pv-skills-section__additional-skills--mercado"
);

function selectButtonElements() {
  let buttons = document.getElementsByClassName(
    "pv-skill-entity__featured-endorse-button-shared  artdeco-button artdeco-button--circle artdeco-button--muted artdeco-button--1 artdeco-button--secondary ember-view"
  );
  return buttons;
}

// delays an html element click
//creates violation in linked in if <500sec
async function singleClick(elem) {
  return new Promise((resolve) => {
    setTimeout(() => {
      elem.click();
      resolve();
    }, 500);
  });
}


let buttons = document.getElementsByClassName(
  "pv-skill-entity__featured-endorse-button-shared  artdeco-button artdeco-button--circle artdeco-button--muted artdeco-button--1 artdeco-button--secondary ember-view"
);

async function bulkClick(buttons) {
  let elements = selectButtonElements()
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
singleClick(showMoreDiv[0])
bulkClick(buttons);

}
async function hi(){
  await dropmein()
  console.log(fails, "failed", "success", connects)
}


