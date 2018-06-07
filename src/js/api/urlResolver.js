class UrlResolver {
    constructor(data) {
        this.baseUrl = data;
    }

    getUrl(type, params, searchParams) {
        let url = new URL(this.baseUrl);
        switch (type) {
            case 'competition':
                url = new URL(`${this.baseUrl}/competitions/${params.competitionId}`);
                break;
            case 'competitions':
                url = new URL(`${this.baseUrl}/competitions`);
                this._resolveParams(url, searchParams);
                break;
            case 'teams':
                url = new URL(`${this.baseUrl}/competitions/${params.competitionId}/teams`);
                break;
            case 'leagueTable':
                url = new URL(`${this.baseUrl}/competitions/${params.competitionId}/leagueTable/`);
                this._resolveParams(url, searchParams);
                break;
            case 'fixturesByComp':
                url = new URL(`${this.baseUrl}/competitions/${params.competitionId}/fixtures/`);
                this._resolveParams(url, searchParams);
                break;
            case 'fixtures':
                url = new URL(`${this.baseUrl}/fixtures/`);
                this._resolveParams(url, searchParams);
                break;
            case 'fixture':
                url = new URL(`${this.baseUrl}/fixtures/${params.fixtureId}`);
                this._resolveParams(url, searchParams);
                break;
            case 'fixturesByTeam':
                url = new URL(`${this.baseUrl}/teams/${params.teamId}/fixtures/`);
                this._resolveParams(url, searchParams);
                break;
            case 'team':
                url = new URL(`${this.baseUrl}/teams/${params.teamId}`);
                break;
            case 'players':
                url = new URL(`${this.baseUrl}/teams/${params.teamId}/players`);
                break;
            default:
                url = '';
                break;
        }
        return url;
    }

    _resolveParams(url, searchParams) {
        if (searchParams) {
            Object.keys(searchParams).forEach((key) => {
                url.searchParams.append(key, searchParams[key]);
            });
        }
    }
}

export default UrlResolver;
