class Standing {
    constructor(data) {
        this.type = 'standing';
        this.crestURI = data.crestURI;
        this.draws = data.draws;
        this.goalDifference = data.goalDifference;
        this.goals = data.goals;
        this.goalsAgainst = data.goalsAgainst;
        this.losses = data.losses;
        this.playedGames = data.playedGames;
        this.points = data.points;
        this.position = data.position;
        this.rank = data.position;
        this.teamName = data.teamName;
        const link = data._links.team.href.split('/');
        this.teamId = link[link.length - 1];
        this.wins = data.wins;
    }

    getTemplate() {
        const row = `
            <tr class="league-table__row js-team" data-team-id='${this.teamId}'>
                <td>${this.position}</td>
                <td>
                    <div class="league-table__team-logo">
                        <img src="${this.crestURI}">
                    </div>
                    ${this.teamName}
                </td>
                <td>${this.playedGames}</td>
                <td>${this.wins}</td>
                <td>${this.draws}</td>
                <td>${this.losses}</td>
                <td>${this.goals}</td>
                <td>${this.goalsAgainst}</td>
                <td>${this.goalDifference}</td>
                <td>${this.points} </td>
            </tr>
            `;
        return row;
    }
}

export default Standing;
