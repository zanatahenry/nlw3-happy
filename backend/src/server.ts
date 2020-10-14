import express from 'express'
import path from 'path'
import cors from 'cors'

import 'express-async-errors'

import './database/connection'

import routes from './routes'
import errorHandler from './errors/handler'


const app = express()

app.use(cors())
app.use(express.json())
app.use(routes)
app.use('/uploads', express.static(path.join(__dirname, '..', 'uploads')))
app.use(errorHandler)

//Rota = conjunti

//Recurso = usuário

//Métodos HTTP = get, post, put, delete

//Parametros = Query Params: http://localhost:3333/users?search=henry
//Route Params: http://localhost:3333/users/1 (Identificar um recurso)
//Body: http://localhost:3333/users/1 (Identificar um recurso)



app.listen(3333);