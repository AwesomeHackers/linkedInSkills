// automates Linkedin skill promoting process
//copy and paste all below into Chrome Dev tools
async function dropmein() {
  const SCROLL_TIMEOUT = 600;
  const showMoreDiv = document.getElementsByClassName(
    "pv-profile-section__card-action-bar pv-skills-section__additional-skills artdeco-container-card-action-bar artdeco-button artdeco-button--tertiary artdeco-button--3 artdeco-button--fluid artdeco-button--muted pv-skills-section__additional-skills--mercado"
  );

  let buttons = document.getElementsByClassName(
    "pv-skill-entity__featured-endorse-button-shared  artdeco-button artdeco-button--circle artdeco-button--muted artdeco-button--1 artdeco-button--secondary ember-view")

  async function singleScroll() {
    if (await showMoreDiv) {
      return new Promise((resolve) => {
        setTimeout(() => {
          window.scrollTo(0, document.body.scrollHeight);
          console.log("scroll!");
          resolve();
        }, SCROLL_TIMEOUT);
      });
    }
  }

  async function singleClick(elem) {
    return new Promise((resolve) => {
      setTimeout(() => {
        elem.click();
        resolve();
      }, 500);
    });
  }

  async function bulkClick() {
    let elements = buttons;
    console.log("elements length:", elements.length);
    for (let i = 0; i < elements.length; i++) {
        await singleClick(elements[i]);
        console.log("click!");
    }
  }
  await singleScroll();
  await singleClick(showMoreDiv[0]);
  await bulkClick(buttons);
  await bulkClick(buttons);
  await bulkClick(buttons);
  window.scrollTo(0, 0);

}
dropmein()
