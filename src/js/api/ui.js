class UI {
    loadSideBar(competitions) {
        const sideBar = document.querySelector('.js-side-bar');
        competitions.forEach((competition) => {
            sideBar.innerHTML += `
                <li class='side-bar__list-item' data-competitionId='${competition.id}' data-currentMatchday='${competition.currentMatchday}'>
                    ${competition.caption}
                </li>
                `;
        });
    }

    loadCompetition(competition) {
        const container = document.querySelector('.js-league-table');
        container.innerHTML = '';
        const leagueTableDiv = document.createElement('div');
        leagueTableDiv.classList.add('league-table__container');
        const template = competition.getTemplate();
        leagueTableDiv.innerHTML = template;
        container.appendChild(leagueTableDiv);
    }

    toggleSideBar(element) {
        const listItems = document.querySelectorAll('.side-bar__list-item');
        listItems.forEach(item => item.classList.remove('side-bar__list-item--active'));
        element.classList.add('side-bar__list-item--active');
    }

    loadFixtures(fixtures, selector) {
        const fixtureList = document.querySelector(selector).querySelector('.fixtures-list');
        fixtureList.innerHTML = '';
        fixtures.forEach((fixture) => {
            const fixtureTemplate = document.createElement('li');
            fixtureTemplate.classList.add('fixtures-list__item');
            fixtureTemplate.innerHTML = fixture.getTemplate();
            fixtureList.appendChild(fixtureTemplate);
        });
    }

    showLoader(selector) {
        let spinner;
        if (selector) {
            spinner = document.querySelector(selector);
        } else {
            spinner = document.querySelector('.container');
        }
        spinner.classList.add('spinner');
    }

    hideLoader(selector) {
        let spinner;
        if (selector) {
            spinner = document.querySelector(selector);
        } else {
            spinner = document.querySelector('.container');
        }
        spinner.classList.remove('spinner');
    }
}

export default UI;
