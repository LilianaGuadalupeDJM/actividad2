import { useState } from 'react';
import reactLogo from '../../assets/react.svg';
import viteLogo from '/vite.svg';
import './welcome.css';

function Welcome() {
  const [count, setCount] = useState(0);

  const handleMoreAboutMeClick = () => {
    alert('Aquí puedes poner más información sobre ti.');
  };

  return (
    <>
      <h1>App con react</h1>
      <div className="card">
        <button onClick={() => setCount((count) )}>
          información importante 
        </button>

        <button onClick={handleMoreAboutMeClick}>
          Más sobre mí
        </button>
        <p>
          Bienvenido a mi app donde podrás consultar temas interesantes
        </p>
      </div>
      <p className="read-the-docs">
        {/* Puedes agregar más contenido aquí si es necesario */}
      </p>
    </>
  );
}

export default Welcome;
