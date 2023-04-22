/* this module You use an array to store all of the information for all projects */
/* each project has: name, ShortDescrip, featured image, technologies,
   link to live version, link to source */

   const projects = [
    {
      title: 'Tonic',
      info: ['CANOPY', 'Back End Dev', '2015'],
      image: 'assets/img/Project5.svg',
      badges: ['html', 'css', 'javaScript'],
      description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting,  essent",
      liveButton: 'https://sergioperalta22.github.io/Portfolio/',
      sourseButton: 'https://github.com/SergioPeralta22/Portfolio',
    },
    {
      title: 'Uber Navigation',
      info: ['Uber', 'Lead Developer', '2018'],
      image: 'assets/img/Project2.svg',
      badges: ['html', 'Ruby on Rails', 'css', 'javaScript'],
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore laborum iure animi, molestiae at ab. Et quas, eaque, fuga pariatur neque labore dolore, quisquam ab soluta asperiores facilis non reprehenderit nisi ratione dolore. Corporis autem repellendus eaque',
      liveButton: 'https://sergioperalta22.github.io/Portfolio/',
      sourseButton: 'https://github.com/SergioPeralta22/Portfolio',
    },
    {
      title: 'Facebook 360',
      info: ['FACEBOOK', 'Back End Dev', '2015'],
      image: 'assets/img/Project1.svg',
      badges: ['html', 'Ruby on Rails', 'css', 'javaScript'],
      description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugiat voluptatum tempore aliquid nisi. Repellendus neque alias odit? Ipsa minus eligendi in perferendis? Ratione commodi, deserunt dicta architecto vitae animi ab quibusdam blanditiis!  . Eos suscipit quaerat.',
      liveButton: 'https://sergioperalta22.github.io/Portfolio/',
      sourseButton: 'https://github.com/SergioPeralta22/Portfolio',
    },
    {
      title: 'Multi-Post Stories',
      info: ['FACEBOOK', 'Full Stack Dev', '2015'],
      image: 'assets/img/Project4.svg',
      badges: ['html', 'Ruby on Rails', 'css', 'javaScript'],
      description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Exercitationem ea in, tenetur officia quam nobis et natus dolor adipisci nulla laudantium magni, laboriosam ducimus, quo vitae  alias nemo officia tenetur inventore minus, aspernatur dolorem t error',
      liveButton: 'https://sergioperalta22.github.io/Portfolio/',
      sourseButton: 'https://github.com/SergioPeralta22/Portfolio',
    },
  ];
  
  let index;
  
  function fillModal(project, i) {
    index = i;
  
    // modal fill logic
  
    const modal = document.querySelector('.modal');
    const modalImage = modal.querySelector('.modal-image');
    const modalTitle = modal.querySelector('.modal-title');
    const modalProjectInfo = modal.querySelector('.modal-project-info');
    const modalBadges = modal.querySelector('.modal-badges');
    const modalDescription = modal.querySelector('.modal-description');
    const modalLiveButton = modal.querySelector('.live-button');
    const modalSourceButton = modal.querySelector('.source-button');
  
    modalImage.src = project.image;
    modalTitle.textContent = project.title;
    modalProjectInfo.innerHTML = `
  <ul class="works__card--info f_cr">
  <li class="f_cr"><span>${project.info[0]}</span></li>
  <li class="f_cr">
  <img src="assets/img/Counter.svg" alt="counter" />
  <p>${project.info[1]}</p>
  </li>
  <li class="f_cr">
  <img src="assets/img/Counter.svg" alt="counter" />
  <p>${project.info[2]}</p>
  </li>
  </ul>
  `;
  
    modalBadges.innerHTML = project.badges
      .map((badge) => `<span class="badge">${badge}</span>`)
      .join('');
  
    modalDescription.textContent = project.description;
    modalLiveButton.href = project.liveButton;
    modalSourceButton.href = project.sourseButton;
  
    modal.style.display = 'flex';
  
    const closeButton = modal.querySelector('.close');
    closeButton.addEventListener('click', () => {
      modal.style.display = 'none';
    });
  
    // Navigation buttons logic
  
    const prevButton = modal.querySelector('.prev-button');
    const nextButton = modal.querySelector('.next-button');
    if (index === 0) {
      prevButton.disabled = true;
    } else {
      prevButton.disabled = false;
    }
    if (index === projects.length - 1) {
      nextButton.disabled = true;
    } else {
      nextButton.disabled = false;
    }
  }
  
  const buttons = document.querySelectorAll('.button');
  
  buttons.forEach((button, index) => {
    button.addEventListener('click', () => {
      fillModal(projects[index], index);
    });
  });