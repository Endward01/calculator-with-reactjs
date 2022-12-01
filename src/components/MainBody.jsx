import ScreenContainer from "./ScreenContainer";
import InputContainer from "./InputContainer";
import "./MainBody.css";
import { useReducer } from "react";

export const actions = {
  add: "add",
  operationType: "operationType",
  clear: "clear",
  delete: "delete",
  evaluate: "evaluate",
};

const calLogic = (state, { actionType, valueType }) => {
  switch (actionType) {
    case actions.add:
      if (state.overwrite) {
        return {
          ...state,
          currentOperand: valueType.digit,
          overwrite: false,
        };
      }
      if (valueType.digit === "0" && state.currentOperand === "0") {
        return state;
      }

      if (valueType.digit === "." && state.currentOperand.includes(".")) {
        return state;
      }

      return {
        ...state,
        currentOperand: `${state.currentOperand || ""}${valueType.digit}`,
      };

    case actions.operationType:
      if (state.currentOperand == null && state.previousOperand == null) {
        return state;
      }
      if (state.previousOperand == null) {
        return {
          ...state,
          operation: valueType.operation,
          previousOperand: state.currentOperand,
          currentOperand: null,
        };
      }
      if (state.currentOperand == null) {
        return {
          ...state,
          operation: valueType.operation,
        };
      }
      return {
        ...state,
        previousOperand: computatin(state),
        operation: valueType.operation,
        currentOperand: null,
      };

    case actions.evaluate:
      if (
        state.operation == null ||
        state.currentOperand == null ||
        state.previousOperand == null
      ) {
        return state;
      }
      return {
        ...state,
        overwrite: true,
        previousOperand: null,
        operation: null,
        currentOperand: computatin(state),
      };

    case actions.delete:
      if (state.overwrite) {
        return {
          ...state,
          overwrite: false,
          currentOperand: null,
        };
      }
      if (state.currentOperand == null) {
        return null;
      }
      if (state.currentOperand.length === 1) {
        return {
          ...state,
          currentOperand: null,
        };
      }
      return {
        ...state,
        currentOperand: state.currentOperand.slice(0, -1),
      };
    case actions.clear:
      return {};
  }
};

const computatin = ({ currentOperand, previousOperand, operation }) => {
  const prev = parseFloat(previousOperand);
  const current = parseFloat(currentOperand);
  if (isNaN(prev) || isNaN(current)) {
    return "";
  }
  let computatin = "";
  switch (operation) {
    case "+":
      computatin = prev + current;
      break;
    case "-":
      computatin = prev - current;
      break;
    case "*":
      computatin = prev * current;
      break;
    case "÷":
      computatin = prev / current;
      break;
  }
  return computatin.toString();
};

const MainBody = () => {
  const [{ currentOperand, previousOperand, operation }, dispatch] = useReducer(
    calLogic,
    {}
  );

  return (
    <div className="container">
      <ScreenContainer
        currentOperand={currentOperand}
        previousOperand={previousOperand}
        operation={operation}
      />
      <InputContainer dispatch={dispatch} />
    </div>
  );
};

export default MainBody;
