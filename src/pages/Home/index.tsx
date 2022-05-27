import Logo from 'components/base/Icons/Logo'
import LogoSmall from 'components/base/Icons/LogoSmall'
import Loading from 'components/base/Loading'
import Modal from 'components/base/Modal'
import type { ChangeEvent, FormEvent } from 'react'
import { useState } from 'react'
import fakeSend from 'utils/fakeSend'
import normalizeObjFormData from 'utils/normalizeObjFormData'

import Button from '../../components/base/Button'
import Input from '../../components/base/Input'
import StarInput from '../../components/StarInput'

import './style.scss'

interface ValuesTypes {
  [k: string]: string | number
}

const DEFAULT_FORM_VALUES: ValuesTypes = {
  nota: 0,
  nome: '',
  comentario: '',
}

const DEFAULT_FORM_VALIDATION_STATUS = {
  nota: true,
  nome: true,
}

function Home() {
  const [values, setValues] = useState(DEFAULT_FORM_VALUES)
  const [loading, setLoading] = useState(false)
  const [validacao, setValidacao] = useState(DEFAULT_FORM_VALIDATION_STATUS)
  const [cadastroConcluido, setCadastroConcluido] = useState(false)

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()

    const data = new FormData(e.target as HTMLFormElement)
    const dataEntries = Object.fromEntries(data.entries()) // dados a serem enviados

    // console.log(typeof dataEntries.nota)
    const { nota, nome } = dataEntries

    if (nota === '0' || (nome as string).length < 3) {
      let tmpValidacao = DEFAULT_FORM_VALIDATION_STATUS

      if (nota === '0') {
        tmpValidacao = { ...tmpValidacao, nota: false }
      }

      if ((nome as string).length < 3) {
        tmpValidacao = { ...tmpValidacao, nome: false }
      }

      setValidacao(tmpValidacao)

      return null
    }

    setLoading(true)
    await fakeSend(2000).then(() => {
      setLoading(false)
      setValues(DEFAULT_FORM_VALUES)
      setCadastroConcluido(true)
      setValidacao(DEFAULT_FORM_VALIDATION_STATUS)

      setTimeout(() => {
        setCadastroConcluido(false)
      }, 5000)
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
            nota={+values.nota}
            isValid={validacao.nota}
            errorMessage="marcação obrigatória"
            ariaErrorMessage="Você deve marcar pelo menos uma nota"
            setNota={setNota}
          />

          <Input
            label="Nome"
            id="nome"
            name="nome"
            isValid={validacao.nome}
            errorMessage="deve ter pelo menos 3 caracteres"
            ariaErrorMessage="Campo nome deve ter pelo menos 3 caracteres"
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
          <h5
            aria-details="Aguarde, estamos processando..."
            className="modal-message"
          >
            Aguarde, estamos processando...
          </h5>
        </Modal>
      )}
      {cadastroConcluido && (
        <Modal
          setClose={() => {
            setCadastroConcluido(false)
          }}
        >
          <LogoSmall height={64} />
          <h5
            aria-details="Obrigado por avaliar nossos serviços."
            className="modal-message"
          >
            Obrigado por avaliar nossos serviços.
          </h5>
        </Modal>
      )}
    </section>
  )
}

export default Home
