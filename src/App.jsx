import { ClassState } from "./UseState/ClassState"
import { UseState } from "./UseState/UseState"

function App() {

  return (
    <div className="App w-screen h-screen">
      <UseState  name={'UseState'}/>
      <ClassState  name={'ClassState'}/>
    </div>
  )
}

export default App
