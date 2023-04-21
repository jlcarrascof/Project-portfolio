
/* this module You use an array to store all of the information for all projects */
/* each project has: name, ShortDescrip, featured image, technologies,
   link to live version, link to source */

/*   
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
      source: 'https://github.com/jlcarrascof/card-portfolio/'
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
      source: 'https://github.com/jlcarrascof/card-portfolio/'
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
      source: 'https://github.com/jlcarrascof/card-portfolio/'
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
      source: 'https://github.com/jlcarrascof/card-portfolio/'
    },
    {
      id: 'card-4',
      name: 'Profesional Art 4',
      name2: 'Printing Data',
      ShortDescrip: "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard.",
      LongDescrip: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent.",
      cardImage: './assets/images/image2.svg',
      alternateTextImage: 'secondary project ShortDescrip image.',
      technologies: ['CSS', 'Boostrap', 'Ruby'],
      liveVersion: 'https://jlcarrascof.github.io/card-portfolio/',
      source: 'https://github.com/jlcarrascof/card-portfolio/'
    }
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
                            A daily selection of privately personalized reads; no accounts or sign-ups required.
                        </p>
                    </div>
                    <div class="card-text desktop">
                        <p>
                            Exploring the future of media in Facebook's first Virtual Reality app; a place to discover and enjoy 360 photos and videos on Gear VR.
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
*/
// functions realted with popup window
  
/*
  function closeWinPopup() {
    loadBody.removeChild(winPopup);
  
    re-activate the scrollbar for the body 
    loadBody.style.overflow = 'auto'; 
  }
  
*/

// create popup window

/*
function openPopup(card) {
  loadBody = document.getElementById('loadBody');

  Hide scrollbar for the body 
  loadBody.style.overflow = 'hidden'; 

  loadBody.appendChild(document.createElement('div')).setAttribute('id', 'winPopup');
  winPopup = document.getElementById('winPopup');
  winPopup.classList = "winPopup";
  console.log("entre a crear popup");

  
  div = document.createElement('div');

  div.classList = 'InfoPopup';
  div.id = card.id;
  div.innerHTML = `
                  <div class="card-description-popup">
                    <h3 class="card-title mobile">${card.name}</h3>
                    <a id="btnClosePopup" class="btnClosePopup">
                        <img class="btn-close-icon" src="./assets/images/close.png" alt="Close menu icon.">
                    </a> 
                  </div>
                  <div class="bodyPopup">
                    <div class="card-bg-info">
                      <h3 class="card-title desktop">${card.name}</h3>
                      <div>
                        <img src="${card.cardImage}" alt="${card.alternateTextImage}" class="screenshot-popup">
                      </div>
                      <p class="mobile">${card.name2}</p>
                      <p class="desktop">${card.name2}</p>
                      <ul>
                          <li>Full Stack Dev</li>
                          <li>2015</li>
                      </ul>
                    </div>
                    <div class="card-text mobile">
                        <p>
                            A daily selection of privately personalized reads; no accounts or sign-ups required.
                        </p>
                    </div>
                    <div class="card-text desktop">
                        <p>
                            Exploring the future of media in Facebook's first Virtual Reality app; a place to discover and enjoy 360 photos and videos on Gear VR.
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
              </div>
              `;
  winPopup.appendChild(div).setAttribute('id', 'modal');

  const btnClose = document.getElementById('btnClosePopup');
  
  btnClose.addEventListener('click', closeWinPopup);
  
}
*/

/*
function clickBtn(event) {
  const btn = event.srcElement;
  event.preventDefault();
  const numCard = parseInt(btn.id.slice(-1), 10);
  openPopup(arrCardsInfo[numCard]);
}
*/
/* ***** add click event to button  */
/*
const btn = document.getElementsByClassName('btnCard');
for (let i = 0; i < btn.length; i += 1) {
  btn[i].addEventListener('click', clickBtn);
}
*/

window.onload = () => {

const projectsData = [
  {
    title: 'Tonic',
    subtitle: 'CANOPY',
    techStack: 'Back End Dev',
    year: 2015,
    src: './images/second-section/project-01.svg',
    highlight: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent',
    lang: ['html', 'css', 'javascript'],
    live: 'https://kanzatahreem.github.io/Portfolio-Website/',
    source: 'https://github.com/KanzaTahreem/Portfolio-Website',
  },
  {
    title: 'Multi Post Stories',
    subtitle: 'CANOPY',
    techStack: 'Back End Dev',
    year: 2015,
    src: './images/second-section/project-02.svg',
    highlight: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent',
    lang: ['html', 'css', 'javascript'],
    live: 'https://kanzatahreem.github.io/Portfolio-Website/',
    source: 'https://github.com/KanzaTahreem/Portfolio-Website',
  },
  {
    title: 'Tonic',
    subtitle: 'CANOPY',
    techStack: 'Back End Dev',
    year: 2015,
    src: './images/second-section/project-03.svg',
    highlight: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent',
    lang: ['html', 'css', 'javascript'],
    live: 'https://kanzatahreem.github.io/Portfolio-Website/',
    source: 'https://github.com/KanzaTahreem/Portfolio-Website',
  },
  {
    title: 'Multi Post Stories',
    subtitle: 'CANOPY',
    techStack: 'Back End Dev',
    year: 2015,
    src: './images/second-section/project-04.svg',
    highlight: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent',
    lang: ['html', 'css', 'javascript'],
    live: 'https://kanzatahreem.github.io/Portfolio-Website/',
    source: 'https://github.com/KanzaTahreem/Portfolio-Website',
  },
];

const projectCardString = projectsData.map((project) => `
  <div class="card">
    <div class="inner-card">
      <div class="card-img card-1">
        <img
          src="${project.src}"
          alt="Project Snapshoot"
        />
      </div>
      <div class="desc">
        <h3>${project.title}</h3>
        <h4>${project.subtitle} <span>${project.techStack}</span> <span>${project.year}</span></h4>
        <p>${project.highlight}</p>
        <ul>
          ${project.lang.map((tech) => `<li>${tech}</li>`).join('')}
        </ul>
        <button type="button" class="project-btn button">
          See Project
        </button>
      </div>
    </div>
  </div>
`);

const popupContainer = document.querySelector('.project-popup-container');
const recentWork = document.querySelector('.recent-work');
const parser = new DOMParser();

projectCardString.forEach((projectString, index) => {
  const projectElement = parser.parseFromString(projectString, 'text/html').body.firstChild;

  const mobilePopup = `
    <div class="project-popup-hidden ">
      <div class="project-background"></div>
        <div class="project-popup">

          <div class="project-header">
            <i class="fa-solid fa-xmark project-close"></i>
            <h2>${projectsData[index].title}</h2>
            <p>${projectsData[index].subtitle} <span>${projectsData[index].techStack}</span> <span>${projectsData[index].year}</span></p>
          </div>

          <div class="project-img" style="background-image: url(${projectsData[index].src})">
          </div>

          <div class="project-footer">
            <p class="project-desc">${projectsData[index].description}</p>
            <div>
              <ul>
                ${projectsData[index].lang.map((tech) => `<li>${tech}</li>`).join('')}
              </ul>
              <span></span>
              <div class="project-links">
                <a href="${projectsData[index].live}">See Live <i class="fa-solid fa-arrow-up-right-from-square"></i></a>
                <a href="${projectsData[index].source}">See Source <i class="fa-brands fa-github"></i></a>
              </div>
            </div>
          </div>
        </div>
    </div>
  `;

  const mobilePopupElement = parser.parseFromString(mobilePopup, 'text/html').body.firstChild;

  const projectBtn = projectElement.querySelector('.project-btn');
  const closeBtn = mobilePopupElement.querySelector('.project-close');

  projectBtn.addEventListener('click', () => {
    mobilePopupElement.classList.toggle('project-popup-hidden');
  });

  closeBtn.addEventListener('click', () => {
    mobilePopupElement.classList.toggle('project-popup-hidden');
  });

  recentWork.append(projectElement);
  popupContainer.append(mobilePopupElement);
});
};