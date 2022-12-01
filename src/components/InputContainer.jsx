import DigitBtn from "./Buttons/DigitBtn";
import OperationBtn from "./Buttons/OperationBtn";
import "./ScreenContainer.css";
import { actions } from "./MainBody";


const InputConatiner = ({ dispatch }) => {
  return (
    <>
      <button className="component-imput-btn" onClick={() => dispatch({actionType: actions.clear})}>AC</button>
      <button className="component-imput-btn" onClick={() => dispatch({actionType: actions.delete})}>DEL</button>
      <OperationBtn operation="÷" dispatch={dispatch} />
      <DigitBtn digit="7" dispatch={dispatch} />
      <DigitBtn digit="8" dispatch={dispatch} />
      <DigitBtn digit="9" dispatch={dispatch} />
      <OperationBtn operation="*" dispatch={dispatch} />
      <DigitBtn digit="4" dispatch={dispatch} />
      <DigitBtn digit="5" dispatch={dispatch} />
      <DigitBtn digit="6" dispatch={dispatch} />
      <OperationBtn operation="-" dispatch={dispatch} />
      <DigitBtn digit="1" dispatch={dispatch} />
      <DigitBtn digit="2" dispatch={dispatch} />
      <DigitBtn digit="3" dispatch={dispatch} />
      <OperationBtn operation="+" dispatch={dispatch} />
      <DigitBtn digit="." dispatch={dispatch} />
      <DigitBtn digit="0" dispatch={dispatch} />
      <button className="component-imput-btn" onClick={() => dispatch({actionType: actions.evaluate})}>=</button>
    </>
  );
};

export default InputConatiner;
