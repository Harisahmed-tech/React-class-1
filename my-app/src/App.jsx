import react from "react"
import"./style.css"

const App = () => {
const userName ="Haris"
const foo =(userName) =>{
  console.log("foo", userName)
}

return(
  <div>
<h1 className ="heading">Welcome{userName} </h1>
<h1> 2+2 = {2+2}</h1>   
<button onClick={(event)=> foo("Haris" ,event)}> Click!</button>
<button onClick={(event)=> foo("Ali" ,event)}> Click!</button>
  <button onClick={() =>{
    foo()
    foo2()
  }}>Multiple click</button>

  </div>
)
}
export default App