import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

//vitelogo é a variavel que guarda o caminho do logo do vite
//reactlogo é a variavel que guarda o caminho do logo do react
//importando os logos para usar na aplicação

import './App.css'
//importando o arquivo css para estilizar a aplicação


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* div == <> */}

      <h1>Hello World!!</h1>

      <div>
        Som de Chuva
      </div>

      <div>
        Som de vento
      </div>

      <div>
        Som de fogueira
      </div>

    </>
  )
}
//componente funcional do react

export default App
//exportando o componente para ser usado em outros arquivos
