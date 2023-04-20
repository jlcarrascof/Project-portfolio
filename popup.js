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
  let popupContainer = null;
  let div = null;
  let bodyDom = null;
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
                        <button id="btn-${card.id}" type="button" class="btn">See Project</button>
                    </div>
                </div>
            </div>
            `;

    gridWorks.appendChild(div);
  }
  
// create popup window

