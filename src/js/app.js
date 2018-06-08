import Http from './api/http';
import UI from './api/ui';
import LeagueTable from './models/leagueTable';
import Fixture from './models/fixture';
import Player from './models/player';

const api = new Http('aea65a64efe24cd78a58c4de32a16c64');
const ui = new UI();
const clickMe = document.querySelector('.js-competitions');
clickMe.addEventListener('click', () => {
    api.getCompetitions().then(res => ui.loadSideBar(res));
});

const sideBar = document.querySelector('.js-side-bar');
sideBar.addEventListener('click', (e) => {
    const competition = e.target;
    const competitionId = competition.getAttribute('data-competitionId');
    ui.toggleSideBar(e.target);
    ui.showLoader();
    api.getLeagueTable(competitionId)
        .then((res) => {
            const leagueTable = new LeagueTable(res);
            ui.loadCompetition(leagueTable);
        })
        .then(() => {
            const currentMatchday = competition.getAttribute('data-currentMatchday');
            api.getFixturesByCompetition(competitionId, { matchday: currentMatchday })
                .then((res) => {
                    const fixtures = [];
                    res.fixtures.forEach((fix) => {
                        fixtures.push(new Fixture(fix));
                    });
                    ui.loadFixtures(fixtures, '.js-current-fixtures');
                })
                .then(() => {
                    api.getFixturesByCompetition(competitionId, { matchday: 1 }).then((res) => {
                        const fixtures = [];
                        res.fixtures.forEach((fix) => {
                            fixtures.push(new Fixture(fix));
                        });
                        ui.loadFixtures(fixtures, '.js-next-fixtures');
                        ui.hideLoader();
                    });
                });
        });
});

const table = document.querySelector('.js-league-table');
table.addEventListener('click', (e) => {
    const team = e.target.parentNode;
    if (!team.classList.contains('js-team')) {
        return;
    }
    const teamId = team.getAttribute('data-team-id');
    api.getTeam(teamId)
        .then((res) => {
            console.log(res.name);
        })
        .then(() => {
            api.getPlayers(teamId).then((res) => {
                const players = [];
                res.players.forEach((item) => {
                    players.push(new Player(item));
                });
                console.log(players);
            });
        });
});

const navButton = document.querySelector('.header__nav-button');
navButton.addEventListener('click', () => {
    const sideBar2 = document.querySelector('.side-bar');
    if (sideBar2.classList.contains('side-bar--open')) {
        sideBar2.classList.remove('side-bar--open');
    } else {
        sideBar2.classList.add('side-bar--open');
    }
});
