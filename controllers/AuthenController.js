const db = require('../models/index');
const tools = require('../tools/tools');

module.exports = {
    async Authentication(req, res) {
        let messages = [];
        const { email, password } = req.body;
        if (!email) messages.push('email can not be null');
        if (!password) messages.push('password can not be null');
        if (!!messages.length) return await res.status(400).send({ status: 400, messages });
        let user = await db.studentGuides.find({ where: { email } });
        if (!user) return await res.status(400).send({ status: 400, messages: ['authentication failure'] });
        const validPassword = await tools.bcrypt.compareSync(password.toString(), user.password.toString());
        if (!validPassword) return await res.status(400).send({ status: 400, messages: ['authentication failure'] });
        const token = await tools.jwt.sign({ exp: Math.floor(Date.now() / 1000) + (60 * 60), userId: user.id }, 'passphase');
        return await res.status(200).send({ status: 200, result: { user, token } });
    },
    async Register(req, res) {
        try {
            req.body.password = await tools.bcrypt.hashSync(req.body.password);
            const result = await db.studentGuides.create(req.body);
            return await res.status(result ? 200 : 400).send({ status: result ? 200 : 400, result });
        } catch (ex) {
            return await res.status(400).send({ status: 400, result: ex.errors });
        }
    }
}