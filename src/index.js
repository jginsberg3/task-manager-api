const express = require('express')
require('./db/mongoose')  // don't need to set to value; just ensure file runs and connects to mongoDB
const userRouter = require('./routers/user')
const taskRouter = require('./routers/task')

const app = express()
const port = process.env.PORT

app.use(express.json())  // tell express to auto-parse json
app.use(userRouter)
app.use(taskRouter)

app.listen(port, () => {
    console.log('Server is up on port ' + port)
})