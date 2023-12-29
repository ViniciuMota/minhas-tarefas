import Tarefa from '../../components/Tarefa'
import { Container } from './styles'

import * as enums from '../../utils/enums/Tarefa'

const tarefas = [
  {
    titulo: 'Pagar boleto',
    prioridade: enums.Prioridade.URGENTE,
    status: enums.Status.PENDENTE,
    descricao: 'Ver a aula 3 da EBAC'
  },
  {
    titulo: 'treinar perna',
    prioridade: enums.Prioridade.NORMAL,
    status: enums.Status.PENDENTE,
    descricao: 'Ver a aula 4 da EBAC'
  },
  {
    titulo: 'comprar monitor novo',
    prioridade: enums.Prioridade.IMPORTANTE,
    status: enums.Status.CONCLUIDA,
    descricao: 'Ver a aula 5 da EBAC'
  }
]

const ListaDeTarefas = () => (
  <Container>
    <p>2 tarefas marcadas como: &quot;categoria&ldquo; e &quot;termo&ldquo;</p>
    <ul>
      {tarefas.map((t) => (
        <li key={t.titulo}>
          <Tarefa
            titulo={t.titulo}
            prioridade={t.prioridade}
            status={t.status}
            descricao={t.descricao}
          />
        </li>
      ))}
    </ul>
  </Container>
)

export default ListaDeTarefas
