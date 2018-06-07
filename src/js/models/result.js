class Result {
    constructor(data) {
        this.type = 'result';
        this.goalsHomeTeam = data.goalsHomeTeam;
        this.goalsAwayTeam = data.goalsAwayTeam;
    }

    getTemplate() {
        const template = `
            <div class="fixture__result"> 
                ${this.goalsHomeTeam} : ${this.goalsAwayTeam} 
            </div>
        `;
        return template;
    }
}

export default Result;
