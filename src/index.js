import express from "express"

const app = express();

app.get('/', (req, res) => {
    res.send('it\'s work')
})

app.listen(5000, () => `Server is listening on port 5000.....`)
