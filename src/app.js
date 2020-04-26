import express from 'express'
import router from './router'

const app = express()
const PORT = 80
app.use('/api', router)

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}!`);
})