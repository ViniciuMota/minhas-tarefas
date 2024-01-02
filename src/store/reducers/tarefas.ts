import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import Tarefa from '../../models/Tarefa'
import * as enums from '../../utils/enums/Tarefa'

type TaredasState = {
  itens: Tarefa[]
}

const initialState: TaredasState = {
  itens: [
    {
      id: 1,
      descricao: 'Estudar Javascript',
      prioridade: enums.Prioridade.IMPORTANTE,
      status: enums.Status.PENDENTE,
      titulo: 'Estudar Javascript'
    },
    {
      id: 2,
      descricao: 'Estudar Typescript',
      prioridade: enums.Prioridade.NORMAL,
      status: enums.Status.CONCLUIDA,
      titulo: 'Estudar Typescript'
    },
    {
      id: 3,
      descricao: 'Estudar React',
      prioridade: enums.Prioridade.URGENTE,
      status: enums.Status.PENDENTE,
      titulo: 'Estudar React'
    }
  ]
}

const tarefasSlice = createSlice({
  name: 'tarefas',
  initialState: initialState,
  reducers: {
    remover: (state, action: PayloadAction<number>) => {
      state.itens = [
        ...(state.itens = state.itens.filter(
          (tarefa) => tarefa.id !== action.payload
        ))
      ]
    },
    editar: (state, action: PayloadAction<Tarefa>) => {
      const indexDaTarefa = state.itens.findIndex(
        (t) => t.id === action.payload.id
      )
      if (indexDaTarefa >= 0) {
        state.itens[indexDaTarefa] = action.payload
      }
    }
  }
})

export const { remover, editar } = tarefasSlice.actions

export default tarefasSlice.reducer
