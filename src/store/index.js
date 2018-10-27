import Vue from 'vue'
import Vuex from 'vuex'

// 安装
Vue.use(Vuex)

// 初始化一个 state
const state = {
  todos: [
    { id: 1, name: '抽烟', done: false },
    { id: 2, name: '喝酒', done: false },
    { id: 3, name: '烫头', done: true }
  ]
}

// 初始化一个 mutations
const mutations = {
  // 添加数据
  addTodo(state, name) {
    let id = state.todos.length === 0 ? 1 : state.todos[state.todos.length - 1].id + 1
    state.todos.push({
      id,
      name,
      done: false
    })
  },
  // 删除单条数据
  delTodo(state, index) {
    state.todos.splice(index, 1)
  },
  // 双击编辑数据
  editTodo(state, payload) {
    const item = state.todos.find(item => item.id === payload.id)
    item.name = payload.name
  },
  // 双向数据绑定
  binding(state, id) {
    const item = state.todos.find(item => item.id === id)
    // console.log(state, id)
    item.done = !item.done
  },
  // 清除所有已完成的任务
  delCompleted(state) {
    // 先找到所有未完成的把这些未完成的任务组成一个数组替换掉todos
    state.todos = state.todos.filter(item => !item.done)
  }
}

// actions
// 异步操作需要放到 actions 中
const actions = {
  // 异步添加数据
  addTodoAsync(context, name) {
    setTimeout(() => {
      context.commit('addTodo', name)
    }, 1000)
  }
}

// 初始化一个getter
// 相当于 vue 中的计算属性 可直接通过 $store.getters.计算属性名 在组件中使用
const getters = {
  // 底部的显示和隐藏
  isShow(state) {
    return state.todos.length !== 0
  },
  // 剩余的未完成的
  rest(state) {
    return state.todos.filter(item => !item.done).length
  },
  // 完成任务的显示与隐藏
  completed(state) {
    return state.todos.some(item => item.done)
  },
  // 清除已完成按钮的显示与隐藏
  showCompleted(state) {
    return state.todos.some(item => item.done)
  }
}

const todoModule = {
  state,
  mutations,
  getters,
  actions
}

const store = new Vuex.Store({
  // 开启严格模式
  strict: process.env.NODE_ENV !== 'production',
  // 有了模块后只会对 state 产生影响
  modules: {
    a: todoModule
  }
})

// 导出 store
export default store
