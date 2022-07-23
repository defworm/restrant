const { application } = require('express')
const express = require ('express')
app.get ('/', (req, res) => {
    res.send ('hello world')
})
app.listen (3000)