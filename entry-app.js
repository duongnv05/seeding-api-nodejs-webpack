import express from 'express'
import bodyParser from 'body-parser'
import cookieParser from 'cookie-parser'
import logger from 'morgan'

const app = express()
const router = express.Router()

app.use(logger('dev'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(cookieParser())

let bindMiddlewares= function() {
  app.use(require('./controllers'))

  app.use((req, res, next) => {
    let err = new Error("Not Found")
    console.log('dsfasa')
    err.status = 404
    next(err)
  })

  app.use((err, req, res, next) => {
    // render error page
    res.status(err.status || 500)
    res.send(err.message)
  })
}

// app.use('/*', router.get('/', (req, res) => {
//   res.send("adf")
// }))

bindMiddlewares()

app.listen(4500, () => {
  const { log } = console
  log("Server is listening on http://localhost:4500")
})