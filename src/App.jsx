import { UseReducer } from "./Usereducer/UseReducer"
import { UseState } from "./UseState/UseState"

function App() {

  return (
    <div className="App w-screen h-screen">
      <UseState  name={'UseState'}/>
      <UseReducer name={'UseReducer'}/>
    </div>
  )
}

export default App
