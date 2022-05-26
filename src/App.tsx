
import { ChangeEvent, FormEvent, useEffect, useState } from 'react';
import Button from './components/base/Button';
import Input from './components/base/Input';
import StarInput from './components/StarInput';

import './styles/theme.scss'

const DEFAULT_FORM_VALUES = {
  nota: 0,
  nome: "",
  comentario: ""
}

function App() {
  const [values, setValues] = useState(DEFAULT_FORM_VALUES)

  // useEffect(() => {
  //   console.log(values);
  // }, [values])
    console.log(values);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()

    const data = new FormData(e.target as HTMLFormElement)
    console.log(Object.fromEntries(data.entries()))

    console.log('submit');
  }

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValues({ ...values, [e.target.name]: e.target.value})
  }

  const setNota = (n: number) => {
    setValues({ ...values, nota: n})
  }

  return (
    <form onSubmit={handleSubmit}>
      <StarInput nota={values.nota} setNota={setNota} />

      <Input label='Nome' name='nome' value={values.nome} onChange={handleChange}  />
      <Input label='Comentário' name='comentario' value={values.comentario} onChange={handleChange}  />
      <Button>Submit</Button>
    </form>
  );
}

export default App;
