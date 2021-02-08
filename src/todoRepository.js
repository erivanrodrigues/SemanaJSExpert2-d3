const loki = require('lokijs')


class TodoRepository {
    constructor(){
        const db = new loki('todo', {})
        this.schedule = db.addCollection('schedule')
    }
    list(){
        return this.schedule.find()
    }

    create(data){
        return this.schedule.insertOne(data)
    }
}

module.exports = TodoRepository

// Só para testar o a conexão do banco de
// const c = new TodoRepository()

// c.create({name: 'Erivan', age: 100})
// c.create({name: 'Erivan2', age: 2000})

// console.log('list', c.list())
