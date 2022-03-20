const express = require('express')

const api = express()

api.listen(5000, () => {
  console.log('Server is running at localhost:5000')
})