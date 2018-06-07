class Player {
    constructor(data) {
        this.name = data.name;
        this.position = data.position;
        this.jerseyNumbe = data.jerseyNumber;
        this.dateOfBirth = data.dateOfBirth;
        this.nationality = data.nationality;
        this.contractUntil = data.contractUntil;
        this.marketValue = data.marketValue;
        this.type = 'player';
    }

    getTemplate() {
        const template = `
        
        `;
        return template;
    }
}

export default Player;
