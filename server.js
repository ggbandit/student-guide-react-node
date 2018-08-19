const express = require('express')
const bodyParser = require('body-parser')
const mysql = require('mysql')

const app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}))

const mysqlConnection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'chanpreecha1!',
    database: 'student-guide'
})

mysqlConnection.connect((err) => {
    if(err) {
        console.log('DB connection error.')
    } else {
        console.log('DB connection successful.')
    }
})

app.get('/api/student-guide', (req,res) => {
    mysqlConnection.query('SELECT * FROM `student-guide-list`', (err, rows, fields) => {
        if(!err) {
            res.send(rows)
        } else {
            console.log(err)
        }
    })
})

app.get('/api/student-guide/:id', (req,res) => {
    mysqlConnection.query('SELECT * FROM `student-guide-list` WHERE id = ?',[req.params.id], (err, rows, fields) => {
        if(!err) {
            res.send(rows)
        } else {
            console.log(err)
        }
    })
})

app.delete('/api/student-guide/:id', (req,res) => {
    mysqlConnection.query('DELETE FROM `student-guide-list` WHERE id = ?',[req.params.id], (err, rows, fields) => {
        if(!err) {
            console.log('Deleted `student-guide-list` successful.')
            res.send('Deleted `student-guide-list` successful.')
        } else {
            console.log(err)
        }
    })
})

app.post('/api/student-guide', (req,res) => {
    var value = {}
      value.name = req.body.name
      value.year = req.body.year
      value.languages = req.body.languages
      value.experience = req.body.experience
    mysqlConnection.query("INSERT INTO `student-guide-list` SET name = ?, year = ?, languages = ?, experience = ?", [value.name,value.year,value.languages,value.experience], function(err, results, fields) {
      if (err) throw err
      console.log(req.body, 'success')
      res.send(results)
    })
  })

app.put('/api/student-guide/:id',function(req, res) {
    var value = {}
        value.id = req.params.id
        value.name = req.body.name
        value.year = req.body.year
        value.languages = req.body.languages
        value.experience = req.body.experience
        console.log(value.id)
      if(value.id)  
      {
            mysqlConnection.query("UPDATE `student-guide-list` SET name = ? , year = ?, languages = ?, experience = ? WHERE id = ?", [value.name, value.year, value.languages, value.experience, value.id],
            function(err, results, fields) {
            if (err) throw err
            console.log("update id =", req.params.id, "success!")
            res.send(results)
        })
      }
      else {
          throw err
      }
  })

const port = 5000

app.listen(port, () => {
    console.log(`Server listening on port ${port}`)
})