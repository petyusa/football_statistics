import Standing from './standing';

class LeagueTable {
    constructor(data) {
        this.type = 'leagueTable';
        this.leagueCaption = data.leagueCaption;
        this.matchday = data.matchday;
        this.getStandings(data.standing);
    }

    getStandings(data) {
        const standing = [];
        for (let i = 0; i < data.length; i += 1) {
            standing.push(new Standing(data[i]));
        }
        console.log(standing);
        this.standing = standing;
    }

    getTemplate() {
        let standing;
        this.standing.forEach((team) => {
            standing += team.getTemplate();
        });

        const table = `
        <h2 class='heading-primary'>${this.leagueCaption}</h2>
        <table class='league-table' cellspacing='0' cellpadding='0'>
            <thead class='league-table__heading'>
                <tr class='league-table__row'>
                    <th title="Position">Pos</th>
                    <th title="Team">Team</th>
                    <th title="Matches Played">M</th>
                    <th title="Wins">W</th>
                    <th title="Draws">D</th>
                    <th title="Losses">L</th>
                    <th title="Gols For">GF</th>
                    <th title="Goals Against">GA</th>
                    <th title="Goal Difference">GD</th>
                    <th title="Points">P</th>
                </tr>  
            </thead>
            <tbody>
            ${standing}
            </tbody>
        </table>
        `;
        return table;
    }
}

export default LeagueTable;
