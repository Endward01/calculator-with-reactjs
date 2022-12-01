const ScreenContainer = ({ currentOperand, previousOperand, operation }) => {
  return (
    <div className="container-component component-screen">
      <div className="component-screen-previous">{previousOperand}</div>
      <div className="component-screen-operation">{operation}</div>
      <div className="component-screen-current">{currentOperand}</div>
    </div>
  );
};

export default ScreenContainer;
