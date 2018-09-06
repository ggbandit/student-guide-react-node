const model = require('../models/index');

module.exports = {
    async findAll(req, res) {
        const result = await model.touristSelectTrip.findAll();
        return await res.status(result ? 200 : 400).send({ status: result ? 200 : 400, result });
    },
    async findById(req, res) {
        const result = await model.touristSelectTrip.findById(req.params.id);
        return await res.status(result ? 200 : 400).send({ status: result ? 200 : 400, result });
    },
    async create(req, res) {
        try {
            if(req.body.trip && req.body.tourist) {
                var data = {
                    touristId: req.body.tourist.id,
                    tripId: req.body.trip.id
                }
            }
            const result = await model.touristSelectTrip.create(data);
            return await res.status(result ? 200 : 400).send({ status: result ? 200 : 400, result });
        } catch (ex) {
            return await res.status(400).send({ status: 400, result: ex.errors.map(e => e.message) });
        }
    },
    async update(req, res) {
        try {
            const result = await model.touristSelectTrip.update(req.body, { where: { id: req.params.id } });
            return await res.status(result ? 200 : 400).send({
                status: result ? 200 : 400, result: await model.touristSelectTrip.findById(req.params.id)
            });
        } catch (ex) {
            return await res.status(400).send({ status: 400, result: ex.errors.map(e => e.message) });
        }
    },
    async destroy(req, res) {
        const result = model.touristSelectTrip.destroy({ where: { id: req.params.id } });
        return await res.status(result ? 200 : 400).send({
            status: result ? 200 : 400, result: result ? 'Successful' : 'Failure'
        });
    }
}
