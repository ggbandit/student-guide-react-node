const db = require('../models');
const tools = require('../tools/tools');

module.exports = {
    async studentGuideAuthentication(req, res) {
        let messages = [];
        const { email, password } = req.body;
        if (!email) messages.push('email can not be null');
        if (!password) messages.push('password can not be null');
        if (!!messages.length) return await res.status(400).send({ status: 400, messages });
        let studentGuide = await db.studentGuides.find({ where: { email } });
        if (!studentGuide) return await res.status(400).send({ status: 400, messages: ['Your email does not exist'] });
        const validPassword = await tools.bcrypt.compareSync(password.toString(), studentGuide.password.toString());
        if (!validPassword) return await res.status(400).send({ status: 400, messages: ['Your password is incorrect.'] });
        const token = await tools.jwt.sign({ exp: Math.floor(Date.now() / 1000) + (60 * 60), studentGuideId: studentGuide.id }, 'passphase');
        return await res.status(200).send({ status: 200, result: { studentGuide, token } });
    },
    async studentGuideRegister(req, res) {
        try {
            req.body.password = await tools.bcrypt.hashSync(req.body.password);
            const result = await db.studentGuides.create(req.body);
            return await res.status(result ? 200 : 400).send({ status: result ? 200 : 400, result });
        } catch (ex) {
            return await res.status(400).send({ status: 400, result: ex.errors });
        }
    },
    async touristAuthentication(req, res) {
        let messages = [];
        const { email, password } = req.body;
        if (!email) messages.push('email can not be null');
        if (!password) messages.push('password can not be null');
        if (!!messages.length) return await res.status(400).send({ status: 400, messages });
        let tourist = await db.tourists.find({ where: { email } });
        if (!tourist) return await res.status(400).send({ status: 400, messages: ['Your email does not exist'] });
        const validPassword = await tools.bcrypt.compareSync(password.toString(), tourist.password.toString());
        if (!validPassword) return await res.status(400).send({ status: 400, messages: ['Your password is incorrect.'] });
        const token = await tools.jwt.sign({ exp: Math.floor(Date.now() / 1000) + (60 * 60), touristId: tourist.id }, 'passphase');
        return await res.status(200).send({ status: 200, result: { tourist, token } });
    },
    async touristRegister(req, res) {
        try {
            req.body.password = await tools.bcrypt.hashSync(req.body.password);
            const result = await db.tourists.create(req.body);
            return await res.status(result ? 200 : 400).send({ status: result ? 200 : 400, result });
        } catch (ex) {
            return await res.status(400).send({ status: 400, result: ex.errors });
        }
    }
}