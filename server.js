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
    mysqlConnection.query('SELECT * FROM `student-guide-list`', (err, results, fields) => {
        if(!err) {
            return res.json({
                data: results
            })
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

  //api tourist table
  app.get('/api/tourist', (req,res) => {
    mysqlConnection.query('SELECT * FROM `tourist`', (err, results, fields) => {
        if(!err) {
            return res.json({
                data: results
            })
        } else {
            console.log(err)
        }
    })
})

app.get('/api/tourist/:id', (req,res) => {
    mysqlConnection.query('SELECT * FROM `tourist` WHERE tourID = ?',[req.params.id], (err, rows, fields) => {
        if(!err) {
            res.send(rows)
        } else {
            console.log(err)
        }
    })
})

app.delete('/api/tourist/:id', (req,res) => {
    mysqlConnection.query('DELETE FROM `tourist` WHERE tourID = ?',[req.params.id], (err, rows, fields) => {
        if(!err) {
            console.log('Deleted `tourist` successful.')
            res.send('Deleted `tourist` successful.')
        } else {
            console.log(err)
        }
    })
})

app.post('/api/tourist', (req,res) => {
    var value = {}
      value.firstName = req.body.firstName
      value.lastName = req.body.lastName
      value.DOB = req.body.DOB
      value.phone = req.body.phone
      value.country = req.body.country
      value.gender = req.body.gender
    mysqlConnection.query("INSERT INTO `tourist` SET firstName = ?, lastName = ?, DOB = ?, phone = ?, country = ?, gender = ?", [value.firstName,value.lastName,value.DOB,value.phone, value.country, value.gender], function(err, results, fields) {
      if (err) throw err
      console.log(req.body, 'success')
      res.send(results)
    })
  })

app.put('/api/tourist/:id',function(req, res) {
    var value = {}
        value.id = req.params.id
        value.firstName = req.body.firstName
        value.lastName = req.body.lastName
        value.DOB = req.body.DOB
        value.phone = req.body.phone
        value.country = req.body.country
        value.gender = req.body.gender
      if(value.id)  
      {
            mysqlConnection.query("UPDATE `tourist` SET firstName = ? , lastName = ?, DOB = ?, phone = ?, country = ?, gender = ? WHERE tourID = ?", [value.firstName, value.lastName, value.DOB, value.phone, value.country, value.gender, value.id],
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

  //api trip table

 app.get('/api/trip', (req,res) => {
    mysqlConnection.query('SELECT * FROM `trip`', (err, results, fields) => {
        if(!err) {
            return res.json({
                data: results
            })
        } else {
            console.log(err)
        }
    })
})

app.delete('/api/trip/:id', (req,res) => {
    mysqlConnection.query('DELETE FROM `trip` WHERE tripID = ?',[req.params.id], (err, rows, fields) => {
        if(!err) {
            console.log('Deleted `trip` successful.')
            res.send('Deleted `trip` successful.')
        } else {
            console.log(err)
        }
    })
})

app.post('/api/trip', (req,res) => {
    var value = {}
      value.firstName = req.body.firstName
      value.lastName = req.body.lastName
      value.DOB = req.body.DOB
      value.phone = req.body.phone
      value.country = req.body.country
      value.gender = req.body.gender
    mysqlConnection.query("INSERT INTO `trip` SET firstName = ?, lastName = ?, DOB = ?, phone = ?, country = ?, gender = ?", [value.firstName,value.lastName,value.DOB,value.phone, value.country, value.gender], function(err, results, fields) {
      if (err) throw err
      console.log(req.body, 'success')
      res.send(results)
    })
  })

app.put('/api/trip/:id',function(req, res) {
    var value = {}
        value.id = req.params.id
        value.firstName = req.body.firstName
        value.lastName = req.body.lastName
        value.DOB = req.body.DOB
        value.phone = req.body.phone
        value.country = req.body.country
        value.gender = req.body.gender
      if(value.id)  
      {
            mysqlConnection.query("UPDATE `trip` SET firstName = ? , lastName = ?, DOB = ?, phone = ?, country = ?, gender = ? WHERE tripID = ?", [value.firstName, value.lastName, value.DOB, value.phone, value.country, value.gender, value.id],
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