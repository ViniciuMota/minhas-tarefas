import { Provider } from 'react-redux'

import EstiloGlobal, { Container } from './styles'
import store from './store'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Home from './pages/Home'
function App() {
  const rotas = createBrowserRouter([
    {
      path: '/',
      element: <Home />
    },
    {
      path:'/novo',
      element:
    }
  ])
  return (
    <Provider store={store}>
      <EstiloGlobal />
      <Container>
        <RouterProvider router={rotas} />
      </Container>
    </Provider>
  )
}

export default App
