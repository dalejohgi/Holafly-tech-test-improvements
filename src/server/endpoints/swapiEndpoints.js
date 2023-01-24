

const applySwapiEndpoints = (server, app) => {

    server.get('/hfswapi/test', async (req, res) => {
        const data = await app.swapiFunctions.genericRequest('https://swapi.dev/api/', 'GET', null, true);
        res.send(data);
    });

    server.get('/hfswapi/getPeople/:id', async (req, res) => {
        const {isWookie} = req.params
        const person = PeopleFactory.create(isWookie).getById(id)
        res.sendStatus(501);
    });

    server.get('/hfswapi/getPlanet/:id', async (req, res) => {
        const {isWookie} = req.params
        const planet = PlanetFactory.create(isWookie).getById(id)
        res.sendStatus(501);
    });

    server.get('/hfswapi/getWeightOnPlanetRandom', async (req, res) => {
        res.sendStatus(501);
    });

    server.get('/hfswapi/getLogs',async (req, res) => {
        const data = await app.db.logging.findAll();
        res.send(data);
    });

}

module.exports = applySwapiEndpoints;