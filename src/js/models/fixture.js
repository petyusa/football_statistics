import Result from './result';

class Fixture {
    constructor(data) {
        this.type = 'fixture';
        this.id = data.id;
        this.date = new Date(data.date);
        this.status = data.status;
        this.matchday = data.matchday;
        this.homeTeamName = data.homeTeamName;
        this.awayTeamName = data.awayTeamName;
        this.result = new Result(data.result);
        this._links = {
            self: data._links.self.href,
            competition: data._links.competition.href,
            homeTeam: data._links.homeTeam.href,
            awayTeam: data._links.awayTeam.href
        };
    }

    getTemplate() {
        const template = `
            <div class="fixture__homeTeam">${this.homeTeamName}</div>
            ${this.result.getTemplate()}
            <div class="fixture__away-team">${this.awayTeamName}</div>
        `;
        return template;
    }
}

export default Fixture;
