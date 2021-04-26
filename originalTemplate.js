async function moreConnectionsPlease() {
    // maximum limit of Connect buttons clicked
    const LIMIT = 500;
    // wait in ms before each scroll
    const SCROLL_TIMEOUT = 600;
    // bulk scroll will scroll this amount of times
    const BULK_SCROLL_COUNT = 15;
    // wait in ms before each click
    const CLICK_DELAY = 300;
    // if this amount of connections in the page, time to click
    const MINIMUM_CONNECTS_TO_CLICK = 60;
    // if this amount of connections in the page, time to scroll
    const MINIMUM_CONNECTS_TO_SCROLL = 10;
  
    var connects = 0;
    var fails = 0;
  



//     <button aria-label="Endorse Christopher for skill: Linux" id="ember4376" class="pv-skill-entity__featured-endorse-button-shared  artdeco-button artdeco-button--circle artdeco-button--muted artdeco-button--1 artdeco-button--secondary ember-view">  <li-icon aria-hidden="true" type="plus-icon" class="artdeco-button__icon" size="small"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" data-supported-dps="16x16" fill="currentColor" class="mercado-match" width="16" height="16" focusable="false">
//   <path d="M14 9H9v5H7V9H2V7h5V2h2v5h5z"></path>
// </svg></li-icon>

// <span class="artdeco-button__text">
    
// </span></button>
    // retrieves array "Connect" buttons

//Start here
    //const LIMIT = 500;
    // wait in ms before each scroll
    //const SCROLL_TIMEOUT = 600;
    // bulk scroll will scroll this amount of times
    //const BULK_SCROLL_COUNT = 15;
    // wait in ms before each click
    //const CLICK_DELAY = 300;
    // if this amount of connections in the page, time to click
    //const MINIMUM_CONNECTS_TO_CLICK = 60;
    // if this amount of connections in the page, time to scroll
    //const MINIMUM_CONNECTS_TO_SCROLL = 10;
  
    var connects = 0;
    var fails = 0;
 
  function selectButtonElements() {
      const buttons = document.getElementsByClassName("pv-skill-entity__featured-endorse-button-shared  artdeco-button artdeco-button--circle artdeco-button--muted artdeco-button--1 artdeco-button--secondary ember-view")
      console.log(buttons)
      return buttons
    }
    selectButtonElements()


  
    // scrolls to the bottom of the page
    // async function singleScroll() {
    //   return new Promise(resolve => {
    //     setTimeout(() => {
    //       window.scrollTo(0, document.body.scrollHeight);
    //       console.log("scroll!");
    //       resolve();
    //     }, SCROLL_TIMEOUT);
    //   });
    // }
  
    // delays an html element click
    async function singleClick(elem) {
      return new Promise(resolve => {
        setTimeout(() => {
          elem.click();
          resolve();
        }, 500);
      });
    }
  
    // // scroll to the bottom of the page several times
    // async function bulkScroll() {
    //   for (let i = 0; i < BULK_SCROLL_COUNT; i++) {
    //     await singleScroll();
    //   }
    // }
  
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
      console.log('Number of successes!', connects, 'Number of errors', fails);
    }
  bulkClick()
  //End here
//     // the list of people to connect to must keep a minimum amount of people
//     function isManyConnects(amount) {
//       return selectButtonElements().length >= amount;
//     }
  
//     do {
//       if (isManyConnects(MINIMUM_CONNECTS_TO_CLICK)) {
//         console.log("There are plenty of connections, time to click...");
//         await bulkClick();} 
//         // else {
//       //   console.log("Out of connections, need to scroll...");
//       //   await bulkScroll();
//       // }
//       console.log(`New Connections:${connects} Failed clicks:${fails}`);
//     } while (connects < LIMIT);
  }
  
  moreConnectionsPlease();