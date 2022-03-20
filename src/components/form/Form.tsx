import { FunctionComponent } from "react"
import { InterfaceTodo } from "../../interfaces/Interface"

const Form: FunctionComponent<InterfaceTodo> = ({ userInput, setUserInput, onChangeHandler, onSubmitHandler }) => {
  return (
    <div>
      <form onSubmit={onSubmitHandler}>
        <input onChange={onChangeHandler} value={userInput} />
        <button type="submit">Submit</button>
      </form>
    </div>
  )
}

export default Form
