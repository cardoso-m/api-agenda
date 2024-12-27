const db = require('../../../config/db/database')

const createUser = async (req, res) => {
    var {account_id, url_kommo} = req.body

    try {
        var data = await db('user')
                    .insert({
                        'account_id': account_id,
                        'url_kommo': url_kommo
                    })
        return res.status(200).send('Criado com sucesso')
    } catch (err) {
        return res.status(400).json(err)
    }
}

module.exports = createUser