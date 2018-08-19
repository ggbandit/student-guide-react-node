const express = require('express')
const mysql = require('mysql')
const cors = require('cors')

const app = express()

const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "chanpreecha1!",
  database: "student-guide"
})

connection.connect(err => {
  if(err) {
    return err
  }
})

const SELECT_ALL_STUDENT_GUIDE = "SELECT * FROM `student-guide-list`"

app.use(cors())

app.get('/', (req,res) => {
  res.send("go to /api/student-guide")
})

app.get('/api/student-guide', (req,res) => {
  connection.query(SELECT_ALL_STUDENT_GUIDE, (err, results) => {
    if(err) {
      return err
    } else {
      res.json({
        data: results
      })
    }
  })
})

app.get('/api/student-guide/add', (req,res) => {
  const { name, year, languages, experience} = req.query
  const INSERT_STUDENT_GUIDE = `INSERT INTO 'student-guide-list'(name, year, languages, experience) VALUES('${name}', '${year}', '${languages}', '${experience}')`
  connection.query(INSERT_STUDENT_GUIDE, (err, results) => {
    if(err) {
      return err
    } else {
      return res.send("Insert student guide successful")
    }
  })
})

const port = 5000

app.listen(port, () => {
  console.log(`Server listening on port ${port}`)
})