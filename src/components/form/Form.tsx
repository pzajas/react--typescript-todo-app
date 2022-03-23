import { FunctionComponent } from "react"
import { InterfaceTodo } from "../../interfaces/Interfaces"

const Form: FunctionComponent<InterfaceTodo> = ({ userInput, handleOnChange, handleOnSubmit }) => {
  return (
    <div>
      <form onSubmit={handleOnSubmit}>
        <input onChange={handleOnChange} value={userInput} />
        <button type="submit">+</button>
      </form>
    </div>
  )
}

export default Form
