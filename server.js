const app = require('./app')
const connection = require('./config/connection')

app.listen(connection.PORT, () => {
    console.log(`Server listening on ${connection.PORT}`)
})