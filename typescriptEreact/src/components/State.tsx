import { ChangeEvent, useState } from "react";

export default function State() {
  const [text, setText] = useState<string | null>(null);

  function handleChange(e: ChangeEvent<HTMLInputElement>) {
    setText(e.target.value);
  }
  return (
    <div>
      <h2>O hook é: {text}</h2>
      <input type="text" onChange={handleChange} placeholder="Digite o hook:" />
    </div>
  );
}
