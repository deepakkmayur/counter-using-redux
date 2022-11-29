import React from 'react'
import Components from './Components/Components'
import reducer from './store/reducer/Reducer'
  
import { createStore } from 'redux'
import { Provider } from 'react-redux'
const store=createStore(reducer)

const App = () => {
  return (
    <div>
      <Provider store={store}>
      <Components/>
      </Provider>
    </div>
  )
}

export default App
