import { useState } from "react";

const UseState = () => {
  const [count, setCount] = useState(0);
  const [myName, setMyName] = useState("");
  const [names, setNames] = useState(["이", "현", "기"]);
  const [inputName, setInputName] = useState("");

  const plusCount = () => {
    setCount(count + 1);
  };
  const resetCount = () => {
    setCount(0);
  };

  const handleChangeName = (event: React.ChangeEvent<HTMLInputElement>) => {
    setMyName(event.target.value);
  };

  const handleChangeInputName = (
    event: React.ChangeEvent<HTMLInputElement>,
  ) => {
    setInputName(event.target.value);
  };

  const handleUpload = () => {
    setNames((prev) => {
      return [...prev, inputName];
    });
  };

  return (
    <>
      <button onClick={plusCount}>count 증가 버튼</button>
      <button onClick={resetCount}>count 리셋</button>
      <h1>UseState</h1>
      <input
        type="text"
        value={myName}
        onChange={handleChangeName}
        placeholder="이름 입력"
      />
      <input
        type="text"
        value={inputName}
        placeholder="이름 입력"
        onChange={handleChangeInputName}
      />
      <button type="submit" onClick={handleUpload}>
        제출
      </button>
      <div>{myName}</div>
      <div>
        {names.map((name, index) => {
          return <div key={index}>{name}</div>;
        })}
      </div>
      {count}
    </>
  );
};

export default UseState;
