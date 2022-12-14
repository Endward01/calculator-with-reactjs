import { actions } from "../MainBody";
import "../MainBody.css";


const OperationBtn = ({ dispatch, operation }) => {
  return (
    <button onClick={() => dispatch({ actionType: actions.operationType, valueType: { operation } })} className="component-imput-btn operation-btn">
      {operation}
    </button>
  );
};

export default OperationBtn
