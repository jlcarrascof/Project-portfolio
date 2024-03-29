/* this module You use an array to store all of the information for all projects */
/* each project has: name, ShortDescrip, featured image, technologies,
   link to live version, link to source */

const arrCardsInfo = [
  {
    id: 'card-0',
    name: 'Tonic',
    name2: 'Canopy',
    ShortDescrip: "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a standard dummy text.",
    LongDescrip: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent.",
    cardImage: './assets/images/image1.svg',
    alternateTextImage: 'header-main-project image.',
    technologies: ['HTML', 'CSS', 'Javascript'],
    liveVersion: 'https://jlcarrascof.github.io/card-portfolio/',
    source: 'https://github.com/jlcarrascof/card-portfolio/',
  },
  {
    id: 'card-1',
    name: 'Multi-Post Stories',
    name2: 'Canopy',
    ShortDescrip: "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard.",
    LongDescrip: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent.",
    cardImage: './assets/images/image2.svg',
    alternateTextImage: 'secondary project ShortDescrip image.',
    technologies: ['CSS', 'Boostrap', 'Ruby'],
    liveVersion: 'https://jlcarrascof.github.io/card-portfolio/',
    source: 'https://github.com/jlcarrascof/card-portfolio/',
  },
  {
    id: 'card-2',
    name: 'Profesional Art 2',
    name2: 'Printing Data',
    ShortDescrip: "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard.",
    LongDescrip: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent.",
    cardImage: './assets/images/image3.svg',
    alternateTextImage: 'secondary project ShortDescrip image.',
    technologies: ['CSS', 'Boostrap', 'Ruby'],
    liveVersion: 'https://jlcarrascof.github.io/card-portfolio/',
    source: 'https://github.com/jlcarrascof/card-portfolio/',
  },
  {
    id: 'card-3',
    name: 'Profesional Art 3',
    name2: 'Printing Data',
    ShortDescrip: "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard.",
    LongDescrip: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent.",
    cardImage: './assets/images/image4.svg',
    alternateTextImage: 'secondary project ShortDescrip image.',
    technologies: ['CSS', 'Boostrap', 'Ruby'],
    liveVersion: 'https://jlcarrascof.github.io/card-portfolio/',
    source: 'https://github.com/jlcarrascof/card-portfolio/',
  },
];

const gridWorks = document.getElementById('grid_works');
let winPopup = null;
let div = null;
let loadBody = null;
let card = null;

for (let i = 0; i < arrCardsInfo.length; i += 1) {
  card = arrCardsInfo[i];

  div = document.createElement('div');
  div.id = card.id;
  div.innerHTML = `
    <div class="cards card-1">
                <div>
                    <img src="${card.cardImage}" alt="${card.alternateTextImage}" class="screenshot">
                </div>
                <div class="card-description">
                    <div>
                        <h3 class="card-title mobile">${card.name}</h3>
                        <h3 class="card-title desktop">${card.name}</h3>
                        <div class="card-bg-info">
                            <p class="mobile">${card.name2}</p>
                            <p class="desktop">${card.name2}</p>
                            <ul>
                                <li>Full Stack Dev</li>
                                <li>2015</li>
                            </ul>
                        </div>
                    </div>
                    <div class="card-text mobile">
                        <p>
                            A daily selection of privately personalized reads; no accounts or sign-ups required. A daily selection of privately personalized reads; no accounts or sign-ups required A daily selection of privately personalized reads; no accounts or sign-ups required
                        </p>
                    </div>
                    <div class="card-text desktop">
                        <p>
                            Exploring the future of media in Facebook's first Virtual Reality app; a place to discover and enjoy 360 photos and videos on Gear VR. A daily selection of privately personalized reads; no accounts or sign-ups required. A daily selection of privately personalized reads; no accounts or sign-ups required A daily selection of privately personalized reads; no accounts or sign-ups required7
                        </p>
                    </div>
                    <div class="card-skills mobile">
                        <ul>
                        ${card.technologies.map((tech) => `
                        <li class="li_btn_2">${tech}</li>`).join(' ')
}
                        </ul>
                    </div>
                    <div class="card-skills desktop">
                        <ul>
                        ${card.technologies.map((tech) => `
                        <li class="li_btn_2">${tech}</li>`).join(' ')
}
                        </ul>
                    </div>
                    <div>
                        <button id="btn-${card.id}" type="button" class="btn btnCard">See Project</button>
                    </div>
                </div>
            </div>
            `;

  gridWorks.appendChild(div);
}

// functions realted with popup window

function closeWinPopup() {
  loadBody.removeChild(winPopup);

  /* re-activate the scrollbar for the body */
  loadBody.style.overflow = 'auto';
}

function openLink(url) {
  window.open(url);
  closeWinPopup();
}

// create popup window

function openPopup(card) {
  loadBody = document.getElementById('loadBody');

  /* Hide scrollbar for the body */
  loadBody.style.overflow = 'hidden';

  loadBody.appendChild(document.createElement('div')).setAttribute('id', 'winPopup');
  winPopup = document.getElementById('winPopup');
  winPopup.classList = 'winPopup';

  /* *********************************** */
  div = document.createElement('div');

  div.classList = 'InfoPopup';
  div.id = card.id;
  div.innerHTML = `
                  <div class="card-description-popup">
                    <h3 class="card-title mobile">${card.name}</h3>
                    <h3 class="card-title desktop">${card.name}</h3>
                    <a id="btnClosePopup" class="btnClosePopup">
                        <img class="btn-close-icon" src="./assets/images/icon-close-popup.png" alt="Close menu icon.">
                    </a> 
                  </div>
                  <div class="bodyPopup">
                    <div class="card-bg-info-popup">
                      <div class="line1-popup">
                        <h2 class="mobile">${card.name2}</h2>
                        <h2 class="desktop">${card.name2}</h2>
                        <ul class="ul-popup">
                            <li>Full Stack Dev</li>
                            <li>2015</li>
                        </ul>
                      </div>
                      <div class="screenshot-popup">
                        <img class="screenshot-popup" src="${card.cardImage}" alt="${card.alternateTextImage}" >
                      </div>
                    </div>
                    <div class="lowsection">
                      <div class="col1">
                        <div class="card-text ">
                            <p>
                                exampple XXX A daily selection of privately personalized reads; no accounts or sign-ups required. A daily selection of privately personalized reads; no accounts or sign-ups required. A daily selection of privately personalized reads; no accounts or sign-ups required A daily selection of privately personalized reads; no accounts or sign-ups required
                            </p>
                        </div>
                      </div>
                      <div class="col2">
                        <div class="card-skills mobile">
                            <ul>
                            ${card.technologies.map((tech) => `
                            <li class="li_btn_2">${tech}</li>`).join(' ')
}
                            </ul>
                        </div>
                        <div class="card-skills desktop">
                            <ul>
                              ${card.technologies.map((tech) => `
                              <li class="li_btn_2">${tech}</li>`).join(' ')
}
                            </ul>
                        </div>
                        <div class="btnlinks">
                          <div>
                              <button id="btnLive" type="button" class="btn btnCard">See Live <img class="icon-live-git" src="./assets/images/icon-export-blue.png">
                              </button>
                          </div>
                          <div>
                              <button id="btnGit" type="button" class="btn btnCard">See Source <img class="icon-live-git" src="./assets/images/icon-git-blue.png">
                              </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              `;
  winPopup.appendChild(div).setAttribute('id', 'modal');

  const btnClose = document.getElementById('btnClosePopup');
  const btnLive = document.getElementById('btnLive');
  const btnSrc = document.getElementById('btnGit');

  btnClose.addEventListener('click', closeWinPopup);
  btnLive.addEventListener('click', () => { openLink(card.liveVersion); });
  btnSrc.addEventListener('click', () => { openLink(card.source); });
}

/* ********************************************** */

function clickBtn(event) {
  const btn = event.srcElement;
  event.preventDefault();
  const numCard = parseInt(btn.id.slice(-1), 10);
  openPopup(arrCardsInfo[numCard]);
}

/* ***** add click event to button  */
const btn = document.getElementsByClassName('btnCard');
for (let i = 0; i < btn.length; i += 1) {
  btn[i].addEventListener('click', clickBtn);
}