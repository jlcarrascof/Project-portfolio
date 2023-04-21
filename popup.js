
/* this module You use an array to store all of the information for all projects */
/* each project has: name, ShortDescrip, featured image, technologies,
   link to live version, link to source */

window.onload = () => {

const projectsData = [
  {
    title: 'Tonic',
    subtitle: 'CANOPY',
    techStack: 'Back End Dev',
    year: 2015,
    src: './assets/images/image1.svg',
    highlight: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent',
    lang: ['html', 'css', 'javascript'],
    live: 'https://jlcarrascof.github.io/card-portfolio/',
    source: 'https://github.com/jlcarrascof/card-portfolio/',
  },
  {
    title: 'Multi Post Stories',
    subtitle: 'CANOPY',
    techStack: 'Back End Dev',
    year: 2015,
    src: './assets/images/image2.svg',
    highlight: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent',
    lang: ['html', 'css', 'javascript'],
    live: 'https://jlcarrascof.github.io/card-portfolio/',
    source: 'https://github.com/jlcarrascof/card-portfolio/',
  },
  {
    title: 'Tonic',
    subtitle: 'CANOPY',
    techStack: 'Back End Dev',
    year: 2015,
    src: './assets/images/image3.svg',
    highlight: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent',
    lang: ['html', 'css', 'javascript'],
    live: 'https://jlcarrascof.github.io/card-portfolio/',
    source: 'https://github.com/jlcarrascof/card-portfolio/',
  },
  {
    title: 'Multi Post Stories',
    subtitle: 'CANOPY',
    techStack: 'Back End Dev',
    year: 2015,
    src: './assets/images/image4.svg',
    highlight: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent',
    lang: ['html', 'css', 'javascript'],
    live: 'https://jlcarrascof.github.io/card-portfolio/',
    source: 'https://github.com/jlcarrascof/card-portfolio/',
  },
];

const projectCardString = projectsData.map((project) => `
  <div class="cards card-1">
    <div>
      <img src="${project.src}" alt="screenshot" class="screenshot">
    </div>
    <div class="card-description">
      <div>
        <h3 class="card-title desktop">${project.title}</h3>
        <div class="card-bg-info">
            <p class="desktop">${project.subtitle}</p>
            <h4>${project.subtitle} <span>${project.techStack}</span> <span>${project.year}</span></h4>
            <p>${project.highlight}</p>
            <ul>
              ${project.lang.map((tech) => `<li>${tech}</li>`).join('')}
            </ul>
        </div>
    </div>
    <div>
        <button type="button" class="btn">See Project</button>
    </div>
  </div>
`);

const popupContainer = document.querySelector('.project-popup-container');
const recentWork = document.querySelector('.recent-work');
const parser = new DOMParser();

projectCardString.forEach((projectString, index) => {
  const projectElement = parser.parseFromString(projectString, 'text/html').body.firstChild;

  const mobilePopup = `
    <div class="project-popup-hidden">
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