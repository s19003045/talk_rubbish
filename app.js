const express = require('express')
const app = express()
const exphbs = require('express-handlebars')
const talkRubbish = require('./talkRubbish.js')
const bodyParser = require('body-parser')
const port = 3000

const jobList = require('./jobs.json')

// setting template engine
app.engine('handlebars', exphbs('defaultLayout: main'))
app.set('view engine', 'handlebars')

// settting body-parser
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// using static files
app.use(express.static('public'))

// route setting
app.get('/', (req, res) => {
  res.render('index', { jobList: jobList.results })
})


app.post('/', (req, res) => {
  const talkRubbishCreate = talkRubbish(req.body)
  const jobSelect = req.body.job
  // console.log(jobSelect)
  // console.log(jobSelect === 'engineer')
  console.log(req.body)

  res.render('index', { talkRubbishCreate: talkRubbishCreate, jobSelect: jobSelect, jobList: jobList.results })
})

// server listen
app.listen(port, () => {
  console.log(`Express server listen to http://localhost:${port}`)
})