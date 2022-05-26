import Logo from 'components/base/Icons/Logo'
import Loading from 'components/base/Loading'
import Modal from 'components/base/Modal'
import type { ChangeEvent, FormEvent } from 'react'
import { useState } from 'react'
import fakeSend from 'utils/fakeSend'

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
  const [loading, setLoading] = useState(false)

  // useEffect(() => {
  //   console.log(values);
  // }, [values])
  console.log(values)

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    console.log('submit', e.target)

    const data = new FormData(e.target as HTMLFormElement)
    const dataEntries = Object.fromEntries(data.entries())

    setLoading(true)
    await fakeSend(2000).then(() => {
      console.log('ok')
      setLoading(false)
      setValues(DEFAULT_FORM_VALUES)
    })
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
            <Logo role="img" aria-label="logomarca Serasa" width={200} />
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
            id="nome"
            name="nome"
            value={values.nome}
            onChange={handleChange}
          />
          <Input
            label="Comentário (Opcional)"
            id="comentario"
            name="comentario"
            value={values.comentario}
            onChange={handleChange}
          />
          <Button type="submit">Enviar Avaliação</Button>
        </form>
      </section>
      {loading && (
        <Modal>
          <Loading />
          <h5 className="modal-message">Aguarde, estamos processando</h5>
        </Modal>
      )}
    </section>
  )
}

export default Home
