class Team {
    constructor(data) {
        this.name = data.name;
        this.code = data.code;
        this.shortName = data.shortName;
        this.squadMarketValue = data.squadMarketValue;
        this.crestUrl = data.crestUrl;
        this._links = {
            self: data._links.self.href,
            fixtures: data._links.fixtures.href,
            players: data._links.players.href
        };
        this.type = 'team';
    }

    getTemplate() {
        const template = `
            <div class="team">
                <div class="team__header">
                    <span class="team__header-logo">
                        <img src='${this.crestUrl}'>
                    </span>
                    <span class="team__header-name">${this.name}</span>
                </div>
                <div class="team__details">
                    <div class="team__players">
                    </div>
                    <div class="team__fixtures">
                    </div>
                </div>
            </div>
        `;
        return template;
    }
}

export default Team;
