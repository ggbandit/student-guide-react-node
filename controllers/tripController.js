const model = require('../models/index');

module.exports = {
    async index(req, res) {
        const result = await model.trips.findAll();
        return await res.status(result ? 200 : 400).send({ status: result ? 200 : 400, result });
    },
    async find(req, res) {
        const result = await model.trips.findById(req.params.id);
        return await res.status(result ? 200 : 400).send({ status: result ? 200 : 400, result });
    },
    async create(req, res) {
        try {
            if(req.body.studentGuide) {
                var data = {
                    name: req.body.name,
                    createdBy: req.body.studentGuide.role,
                    studentGuideId: req.body.studentGuide.id
                }
            } else {
                var data = {
                    name: req.body.name,
                    createdBy: req.body.tourist.role,
                    touristId: req.body.tourist.id
                }
            }
            const result = await model.trips.create(data);
            return await res.status(result ? 200 : 400).send({ status: result ? 200 : 400, result });
        } catch (ex) {
            return await res.status(400).send({ status: 400, result: ex.errors.map(e => e.message) });
        }
    },
    async update(req, res) {
        try {
            const result = await model.trips.update(req.body, { where: { id: req.params.id } });
            return await res.status(result ? 200 : 400).send({
                status: result ? 200 : 400, result: await model.trips.findById(req.params.id)
            });
        } catch (ex) {
            return await res.status(400).send({ status: 400, result: ex.errors.map(e => e.message) });
        }
    },
    async destroy(req, res) {
        const result = model.trips.destroy({ where: { id: req.params.id } });
        return await res.status(result ? 200 : 400).send({
            status: result ? 200 : 400, result: result ? 'Successful' : 'Failure'
        });
    }
}
