import Vue from 'vue'
import Vuex from 'vuex'
import { uuid } from 'vue-uuid'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    todoList: [
      {
        id: uuid.v4(),
        text: 'Jog around the park 3x',
        done: false,
        order: 1
      },
      {
        id: uuid.v4(),
        text: '10 minutes meditation',
        done: false,
        order: 2
      },
      {
        id: uuid.v4(),
        text: 'Read for 1 hour',
        done: false,
        order: 3
      },
      {
        id: uuid.v4(),
        text: 'Pick up groceries',
        done: false,
        order: 4
      }
    ]
  },
  getters: {
    todoList: state => {
      return state.todoList
    }
  },
  mutations: {
    addTodo (state, payLoad) {
      const newTodo = { ...payLoad }
      state.todoList.push(newTodo)
    },
    handlerDoneTodo (state, payLoad) {
      const findTodoKey = state.todoList.findIndex(todo => todo.id === payLoad.id)
      state.todoList[findTodoKey].done = !state.todoList[findTodoKey].done
    }
  },
  actions: {
  },
  modules: {
  }
})
