import { useState, useRef } from 'react'

/**
 * 회원가입 컴포넌트
 * @returns
 */
const RegisterComponent = () => {
  // const [name, setName] = useState("");
  // const [email, setEmail] = useState("");
  // const [password, setPassword] = useState("");
  // const [date, setDate] = useState("");
  // const [country, setCountry] = useState("");
  // const [text, setText] = useState("");

  const [input, setInput] = useState({
    name: '',
    email: '',
    password: '',
    date: '',
    country: '',
    text: '',
  })

  const onChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    setInput({ ...input, [e.target.name]: e.target.value })
  }

  // const onChangeName = (e: React.ChangeEvent<HTMLInputElement>) => {
  //   setInput({ ...input, name: e.target.value });
  // };

  // const onChangeDate = (e: React.ChangeEvent<HTMLInputElement>) => {
  //   setInput({ ...input, date: e.target.value });
  // };

  // const onChangeCountry = (e: React.ChangeEvent<HTMLSelectElement>) => {
  //   setInput({ ...input, country: e.target.value });
  // };

  // const onChangeText = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
  //   setInput({ ...input, text: e.target.value });
  // };

  console.log(input)

  return (
    <>
      <div>
        <input type="text" onChange={onChange} name="name" />
      </div>
      <div>
        <input value={input.date} type="date" onChange={onChange} name="date" />
        {input.date}
      </div>
      <div>
        <select value={input.country} onChange={onChange} name="country">
          <option value="">국가를 선택해주세요</option>
          <option value="kr">한국</option>
          <option value="us">미국</option>
          <option value="ca">캐나다</option>
        </select>
        {input.country}
      </div>
      <div>
        <textarea value={input.text} onChange={onChange} name="text" />
        {input.text}
      </div>
    </>
  )
}

export default RegisterComponent
