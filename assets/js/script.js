const projectCardsContainer = document.querySelector('.project-cards');
const BASE_URL= "assets/json/data.json";

async function getData(){
    const response = await fetch(BASE_URL);
    const data = await response.json();
    return data.projectCards; // projeleri içeren diziye erişin
}

async function printData(){
    const data = await getData();
    for (const card of data) { 
        const cardHTML = `
            <div class="project-card">
                <h2>${card.title}</h2>
                <img src="${card.image}" alt="">
                <p>${card.description}</p>
                <a href="${card.link}" target="_blank">Detaylar</a>
            </div>
        `;
        projectCardsContainer.innerHTML += cardHTML;
    }
}

printData();
