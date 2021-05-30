import React, { useReducer } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import Events from './Events'
import AppContext from '../contexts/AppContext'
import EventForm from './EventForm'
import reducer from '../reducers'

console.log({AppContext})
const App = () => {
  const [state, dispatch] = useReducer(reducer, [])

  return (
    <AppContext.Provider value={'hello, i am a provider.'}>
      <div className="container-fluid">
        <EventForm state={state} dispatch={dispatch} />
        <Events state={state} dispatch={dispatch} />
      </div>
    </AppContext.Provider>
  );
}

export default App;
