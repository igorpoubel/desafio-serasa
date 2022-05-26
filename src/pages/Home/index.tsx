import Logo from 'components/base/Icons/Logo'
import type { ChangeEvent, FormEvent } from 'react'
import { useState } from 'react'

import Button from '../../components/base/Button'
import Input from '../../components/base/Input'
import StarInput from '../../components/StarInput'

import './style.scss'

const DEFAULT_FORM_VALUES = {
  nota: 0,
  nome: '',
  comentario: '',
}

function Home() {
  const [values, setValues] = useState(DEFAULT_FORM_VALUES)

  // useEffect(() => {
  //   console.log(values);
  // }, [values])
  console.log(values)

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()

    const data = new FormData(e.target as HTMLFormElement)

    console.log(Object.fromEntries(data.entries()))

    console.log('submit')
  }

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValues({ ...values, [e.target.name]: e.target.value })
  }

  const setNota = (n: number) => {
    setValues({ ...values, nota: n })
  }

  return (
    <section className="page-content">
      <section className="form-wrapper">
        <div className="logo">
          <a
            href="https://www.serasa.com.br/area-cliente"
            target="_blank"
            rel="noreferrer"
          >
            <Logo width={200} />
          </a>
        </div>
        <h4 className="message">
          Conte o quanto você está satisfeito com nossos serviços
        </h4>
        <form onSubmit={handleSubmit}>
          <StarInput
            label="Marque de 1 à 5 estrelas"
            nota={values.nota}
            setNota={setNota}
          />

          <Input
            label="Nome"
            name="nome"
            value={values.nome}
            onChange={handleChange}
          />
          <Input
            label="Comentário (Opcional)"
            name="comentario"
            value={values.comentario}
            onChange={handleChange}
          />
          <Button type="submit">Enviar Avaliação</Button>
        </form>
      </section>
    </section>
  )
}

export default Home
