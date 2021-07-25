import Vue from 'vue'
import Vuex from 'vuex'
import { uuid } from 'vue-uuid'
import createPersistedState from 'vuex-persistedstate'

Vue.use(Vuex)

const dataState = createPersistedState({
  paths: ['todoList']
})

export default new Vuex.Store({
  state: {
    todoList: [
      {
        id: uuid.v4(),
        text: 'Jog around the park 3x',
        done: false
      },
      {
        id: uuid.v4(),
        text: '10 minutes meditation',
        done: false
      },
      {
        id: uuid.v4(),
        text: 'Read for 1 hour',
        done: false
      },
      {
        id: uuid.v4(),
        text: 'Pick up groceries',
        done: false
      },
      {
        id: uuid.v4(),
        text: 'Complete Todo App on Frontend Mentor',
        done: false
      }
    ],
    todoFilter: 'ALL' // 'ALL', 'ACTIVE', 'COMPLETED'
  },
  getters: {
    todoList: (state) => {
      if (state.todoFilter === 'ALL') {
        return state.todoList
      } else if (state.todoFilter === 'ACTIVE') {
        return state.todoList.filter(todo => todo.done === false)
      } else if (state.todoFilter === 'COMPLETED') {
        return state.todoList.filter(todo => todo.done === true)
      }
    },
    todoleftListCount: state => {
      const todoLeftList = state.todoList.filter(todo => todo.done === false)
      return todoLeftList.length
    },
    getFilter: state => {
      return state.todoFilter
    }
  },
  mutations: {
    setTodoList (state, payload) {
      Vue.set(state, 'todoList', payload.newTodoList)
    },
    handlerTodoFilter (state, payload) {
      state.todoFilter = payload
    },
    handlerClearCompleted (state, payload) {
      const newTodoList = state.todoList.filter(todo => todo.done === false)
      Vue.set(state, 'todoList', newTodoList)
    },
    addTodo (state, payload) {
      const newTodo = { ...payload }
      state.todoList.push(newTodo)
    },
    handlerDoneTodo (state, payload) {
      const findTodoKey = state.todoList.findIndex(todo => todo.id === payload.id)
      state.todoList[findTodoKey].done = !state.todoList[findTodoKey].done
    },
    removeTodo (state, payload) {
      const newTodoList = state.todoList.filter(todo => todo.id !== payload.id)
      Vue.set(state, 'todoList', newTodoList)
    }
  },
  actions: {
  },
  modules: {
  },
  plugins: [dataState]
})
