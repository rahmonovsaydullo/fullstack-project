const express = require("express")
const app = express()
const { Pool } = require("pg")
const cors = require("cors")

// Middleware
app.use(express.json())
app.use(cors())

const pool = new Pool({
    user: "postgres",
    host: "localhost",
    database: "navruz",
    password: "12345qwerty",
    port: 5432

})



app.get('/foods', async (req, res) => {
    try {
        const result = await pool.query("SELECT * FROM foods")
        res.json(result.rows)
    } catch (error) {
        console.log(error.message);
        res.status(500).send(error.message)

    }
})


app.get('/food/:id', async (req, res) => {
    try {
        const id = req.params.id
        const result = await pool.query(`SELECT * FROM foods WHERE id = ${id}`)
        res.json(result.rows[0])
    } catch (error) {
        console.log(error.message);
        res.status(500).send(error.message)
    }
})

app.post('/foods', async (req, res) => {
    try {
        const { name, price, calory } = req.body
        const result = await pool.query(`INSERT INTO foods(name, price, calory) VALUES('${name}', ${price}, ${calory})`)
        res.json(result.rows)
    } catch (error) {
        console.log(error.message);
        res.status(500).send(error.message)
    }
})








app.listen(3000, () => {
    console.log('Server running on port 3000');
})