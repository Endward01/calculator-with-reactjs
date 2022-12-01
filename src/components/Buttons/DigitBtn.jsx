import { actions } from "../MainBody";
import "../ScreenContainer.css";

const DigitBtn = ({ dispatch, digit }) => {
  return (
    <button onClick={() => dispatch({ actionType: actions.add, valueType: { digit } })} className="component-imput-btn">
      {digit}
    </button>
  );
};

export default DigitBtn
