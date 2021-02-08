const {describe, it, before, afterEach} = require('mocha')
const {expect} = require('chai')
const TodoRepository = require('../src/todoRepository')
const {createSandbox, stub} = require('sinon')

describe('todoRepository', () => {
    let todoRepository
    let sandbox
    before(() =>{ 
        todoRepository = new TodoRepository()
        sandbox = createSandbox()
    })
    afterEach(() =>{
        sandbox.restore()
    })
    describe('methods signature', () => {
        it('should call insertOne from lokijs',()=>{
        const mockDatabase = [
            {
              name: 'Erivan',
              age: 100,
              meta: { revision: 0, created: 1611960141484, version: 0 },
              '$loki': 1
            }
          ]
          const functionName = 'find'
          const expectedRetorn = mockDatabase
          sandbox.stub(
              todoRepository.schedule,
              functionName
              ).returns(expectedRetorn)

              const result = todoRepository.list()
              expect(result).to.be.deep.equal(expectedRetorn)
              expect(todoRepository.schedule[functionName].calledOnce).to.be.ok

        })
        it('should call find from lokijs', ()=>{
          const functionName = 'insertOne'
          const expectedRetorn = true

          sandbox.stub(
              todoRepository.schedule,
              functionName
              ).returns(expectedRetorn)

              const data = {name: 'ErivanHoje'}

              const result = todoRepository.create(data)
              expect(result).to.be.ok
              expect(todoRepository.schedule[functionName].calledOnceWithExactly(data)).to.be.ok
        })
    })
})


