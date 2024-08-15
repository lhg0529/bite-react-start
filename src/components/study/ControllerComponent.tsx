const ControllerComponent = ({
  handleCount,
}: {
  handleCount: (value: number) => void
}) => {
  return (
    <div className="controller-main">
      <button onClick={() => handleCount(-100)}>-100</button>
      <button onClick={() => handleCount(-10)}>-10</button>
      <button onClick={() => handleCount(-1)}>-1</button>
      <button onClick={() => handleCount(1)}>+1</button>
      <button onClick={() => handleCount(10)}>+10</button>
      <button onClick={() => handleCount(100)}>+100</button>
    </div>
  )
}

export default ControllerComponent
