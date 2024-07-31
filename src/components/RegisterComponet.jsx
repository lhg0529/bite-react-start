import { useState } from "react";

/**
 * 회원가입 컴포넌트
 * @returns
 */
const RegisterComponent = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div>
      <h1>회원가입</h1>
    </div>
  );
};

export default RegisterComponent;
