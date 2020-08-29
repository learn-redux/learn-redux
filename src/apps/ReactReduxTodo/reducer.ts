import {combineReducers} from "redux"

const initTodos: TTodo[] = [
  {
    id: '1',
    text: '抽烟',
    state: 'done'
  },
  {
    id: '2',
    text: '喝酒',
    state: 'todo'
  },
  {
    id: '3',
    text: '烫头',
    state: 'todo'
  }
]

const initLoading: boolean = false

const initFilter: TFilter = 'all'

const todosReducer = (todos: TTodo[] = initTodos, action: any) => {
  switch (action.type) {
    case 'addTodo':
      return [...todos, action.payload]
    case 'removeTodo':
      return todos.filter(todo => todo.id !== action.payload)
    case 'toggleTodo':
      return todos.map(todo =>
        todo.id === action.payload
          ? {...todo, state: todo.state === 'todo' ? 'done' : 'todo'}
          : todo
      )
    default:
      return todos
  }
}

const filterReducer = (filter: TFilter = initFilter, action: any) => {
  switch (action.type) {
    case 'setFilter':
      return action.payload
    default:
      return filter
  }
}

const loadingReducer = (loading = initLoading, action: any) => {
  switch (action.type) {
    case 'setLoading':
      return action.payload
    default:
      return loading
  }
}

const reducer = combineReducers({
  todos: todosReducer,
  filter: filterReducer,
  loading: loadingReducer
})

export default reducer
