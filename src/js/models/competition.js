class Competition {
    constructor(data) {
        this.type = 'competition';
        this.caption = data.caption;
        this.currentMatchday = data.currentMatchday;
        this.id = data.id;
        this.lastUpdated = data.lastUpdated;
        this.league = data.league;
        this.numberOfGames = data.numberOfGames;
        this.numberOfMatchdays = data.numberOfMatchdays;
        this.numberOfTeams = data.numberOfTeams;
        this.year = data.year;
        this._links = {
            fixtures: data._links.fixtures.href,
            leagueTable: data._links.leagueTable.href,
            self: data._links.self.href,
            teams: data._links.teams.href
        };
    }
}

export default Competition;
