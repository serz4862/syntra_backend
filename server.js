import app from './src/app.js'

const PORT = 8000

app.listen(8000, ()=>{
    console.log(`server is running at http://localhost:${PORT}`)
})