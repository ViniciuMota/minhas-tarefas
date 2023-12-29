import { useDispatch, useSelector } from 'react-redux'
import FiltroCard from '../../components/FiltroCard'
import { RootReducer } from '../../store'
import { alterartermo } from '../../store/reducers/filtro'

import * as S from './styles'

const BarraLateral = () => {
  const dispatch = useDispatch()
  const { termo } = useSelector((state: RootReducer) => state.filtro)

  return (
    <S.Aside>
      <div>
        <S.Campo
          type="text"
          placeholder="Buscar"
          value={termo}
          onChange={(eveto) => dispatch(alterartermo(eveto.target.value))}
        />
        <S.Filtros>
          <FiltroCard legenda="pendente" contador={1} />
          <FiltroCard legenda="concluidas" contador={2} />
          <FiltroCard legenda="urgentes" contador={3} />
          <FiltroCard legenda="importantes" contador={4} />
          <FiltroCard legenda="normal" contador={5} />
          <FiltroCard legenda="todas" contador={15} />
        </S.Filtros>
      </div>
    </S.Aside>
  )
}

export default BarraLateral
