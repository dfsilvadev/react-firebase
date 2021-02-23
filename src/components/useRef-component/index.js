import React from "react";

const UseRefComponent = () => {
  const [tarefas, setTarefas] = React.useState([]);
  const [inputValue, setInputValue] = React.useState("");
  const [notificacao, setNotificacao] = React.useState(null);

  const input = React.useRef();
  const timeoutRef = React.useRef();

  const handleSubmit = (e) => {
    setTarefas([...tarefas, inputValue]);
    setToLocalStorage([...tarefas, inputValue]);
    setNotificacao("Item adicionado");
    clearTimeout(timeoutRef.current);
    timeoutRef.current = setTimeout(() => setNotificacao(null), 3000);
    setInputValue("");
    input.current.focus();
    e.preventDefault();
  };

  const setToLocalStorage = (data) =>
    localStorage.setItem("tarefas", JSON.stringify(data));

  const getToLocalStorage = (data) =>
    JSON.parse(localStorage.getItem(data)) || [];

  React.useEffect(() => {
    setTarefas([...getToLocalStorage("tarefas")]);
  }, []);

  return (
    <div>
      <h1>useRef - React Hooks</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Tarefas"
          value={inputValue}
          onChange={({ target }) => setInputValue(target.value)}
          ref={input}
        />
        <button type="submit">Enviar Tarefa</button>
      </form>
      {notificacao}
      <ul>
        {tarefas.map((tarefa, index) => (
          <li key={index}>{tarefa}</li>
        ))}
      </ul>
    </div>
  );
};

export default UseRefComponent;
