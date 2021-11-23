const Application = require('./framework/Application')
const jsonParser = require('./framework/parseJson')
const UserRouter = require('./src/user-router')
const parseUrl = require('./framework/parseUrl')
const mongoose = require('mongoose')

const app = new Application();

const PORT = process.env.PORT || 5000;


app.use(jsonParser)
app.use(parseUrl('http://localhost:5000'))

app.addRouter(UserRouter)


const start = async () => {
    try {
        await mongoose.connect('mongodb+srv://nurik2160:nurik21!!@cluster0.1cnnq.mongodb.net/myFirstDatabase?retryWrites=true&w=majority')
        app.listen(PORT, () => console.log(`Сервер запущен на порте ${PORT}`))
    } catch (e) {
        console.log(e)
    }
}

start()