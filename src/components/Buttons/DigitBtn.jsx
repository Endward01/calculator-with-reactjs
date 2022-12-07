import { actions } from "../MainBody";
import "../MainBody.css";


const DigitBtn = ({ dispatch, digit }) => {
  return (
    <button onClick={() => dispatch({ actionType: actions.add, valueType: { digit } })} className="component-imput-btn digit-btn">
      {digit}
    </button>
  );
};

export default DigitBtn
