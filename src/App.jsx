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
import { FaPlane, FaWind } from "react-icons/fa";
import { FaKeyboard } from "react-icons/fa6";

function App() {
  // const [count, setCount] = useState(0)
  // function tocarSom() {

  // }

  // var exemplo = function tocarSom(){}
  // var exemplo = () => {} //função arrow function

  const playSound = (soundType) => {

    const audio = new Audio();

    switch (soundType) {
      case 'rain':
        // Using a nature sounds API or local file
        console.log('Playing rain sound...');
        audio.src = '/ambient-noise-236388.mp3';
        audio.play();
        
        break;
      case 'fire':
        console.log('Playing fire sound...');
        break;
      case 'forest':
        console.log('Playing forest sound...');
        break;
      case 'wind':
        console.log('Playing wind sound...');
        break;
      case 'keyboard':
        console.log('Playing keyboard sound...');
        break;
      case 'plane':
        console.log('Playing plane sound...');
        break;
    }
  };



  return (

    <>
      {/* div == <> */}


      {/* <h1>Hello World!!</h1> */}
      <ImFire className='color' />

      <div className='chefe'>
        <Card
          texto="Som de Chuva"
          icone={<CiCloudDrizzle size={100} />}
          descricao="Descrição do som de chuva"
          onClick={() => playSound('rain')}
        />

        <Card
          texto="Som de Vento"
          icone={<FaWind size={100} />}
          descricao="Descrição do som de vento"
          onClick={() => playSound('wind')}
        />

        <Card
          texto="Som de Fogueira"
          icone={<ImFire size={100} />}
          descricao="Descrição do som de fogueira"
          onClick={() => playSound('fire')}
        />

        <Card
          texto="Som de Avião"
          icone={<FaPlane size={100} />}
          descricao="Descrição do som de avião"
          onClick={() => playSound('plane')}
        />

        <Card
          texto="Som de Teclado"
          icone={<FaKeyboard size={100} />}
          descricao="Descrição do som de teclado"
          onClick={() => playSound('keyboard')}
        />

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

