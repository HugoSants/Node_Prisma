import	{ fastify } from 'fastify'
import { Aluno } from './db_alunos.js'


const aluno = new Aluno()

const server = fastify()

server.get('/alunos', (req, res)=>{
    const resp = aluno.list()

    return resp
})

server.post('/alunos', (req, res)=>{
    const {nome, idade, numero} = req.body
    aluno.create({
        nome,
        idade,
        numero
    })
    return res.status(204).send()
})


server.put('/alunos/:id', (req, res)=>{
    const id_bar = req.params.id
    const {nome, idade, numero} = req.body
    aluno.update(id_bar, {
        nome,
        idade,
        numero
    })
    return res.status(201).send()
})

server.delete('/alunos/:id', (req, res)=>{
    const id_del = req.params.id
    aluno.delete(id_del)

    return res.status(201).send()
})


const PORT = 8081
server.listen({
    port: PORT
}, ()=>{
    console.log("Rodando! ")
})
