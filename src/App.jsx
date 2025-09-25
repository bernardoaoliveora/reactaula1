import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Card from './Card.jsx'
import { CardOutro } from './Card.jsx'
//vitelogo é a variavel que guarda o caminho do logo do vite
//reactlogo é a variavel que guarda o caminho do logo do react
//importando os logos para usar na aplicação
import './App.css'
//importando o arquivo css para estilizar a aplicação
import { ImFire } from "react-icons/im";
import { CiCloudDrizzle } from "react-icons/ci";

function App() {
  // const [count, setCount] = useState(0)

  return (

    <>
      {/* div == <> */}


      {/* <h1>Hello World!!</h1> */}
          <ImFire className='color' />

      <div className='chefe'>
        <Card texto="Som de Chuva" icone={<CiCloudDrizzle size={100}/>} />
        <Card texto="Som de Vento"/>
        <Card texto="Som de Fogueira" icone={<ImFire size={100}/>}/>
        <Card texto="Som de Avião"/>
        <Card texto="Som de Avião"/>

      </div>



      {/* <div className='paidopai'>
      <h1>Hello World!!!</h1>

        <div className='pai'>
          <div className='container1'>
            Som de Chuva
          </div>

          <div className='container1'>
            Som de vento
          </div>

          <div className='container1'>
            Som de fogueira
          </div>
        </div>
      </div> */}
    </>
  )
}
//componente funcional do react

export default App
//exportando o componente para ser usado em outros arquivos

