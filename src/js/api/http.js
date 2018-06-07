import UrlResolver from './urlResolver';

class Http {
    constructor(apiKey) {
        this.apiKey = apiKey;
        this.urlResolver = new UrlResolver('http://api.football-data.org/v1');
    }

    async _get(url) {
        const response = await window.fetch(url, {
            method: 'GET',
            headers: {
                'X-Auth-Token': this.apiKey
            }
        });
        const json = await response.json();
        return json;
    }

    getCompetition(competitionId) {
        const url = this.urlResolver.getUrl('competition', { competitionId });
        return this._get(url);
    }

    getCompetitions(season) {
        let url;
        if (season) {
            url = this.urlResolver.getUrl('competitions', {}, { season });
        } else {
            url = this.urlResolver.getUrl('competitions', {}, {});
        }
        return this._get(url);
    }

    getTeam(teamId) {
        const url = this.urlResolver.getUrl('team', { teamId }, {});
        return this._get(url);
    }

    getTeamsByCompetition(competitionId) {
        const url = this.urlResolver.getUrl('teams', { competitionId }, {});
        return this._get(url);
    }

    getFixture(fixtureId) {
        const url = this.urlResolver.getUrl('fixture', { fixtureId });
        return this._get(url);
    }

    getFixturesByCompetition(competitionId, searchParams) {
        let url;
        if (searchParams) {
            url = this.urlResolver.getUrl(
                'fixturesByComp',
                { competitionId },
                searchParams
            );
        } else {
            url = this.urlResolver.getUrl('fixturesByComp', { competitionId });
        }
        return this._get(url);
    }

    getLeagueTable(competitionId, matchday) {
        let url;
        if (matchday) {
            url = this.urlResolver.getUrl('leagueTable', { competitionId }, { matchday });
        } else {
            url = this.urlResolver.getUrl('leagueTable', { competitionId }, {});
        }
        return this._get(url);
    }
}

export default Http;
