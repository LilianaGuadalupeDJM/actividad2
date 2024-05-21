// src/Screen/Welcome/index.jsx
import React from 'react';
import { useHistory } from 'react-router-dom'; // Importa useHistory para la navegación

const Welcome = () => {
  const history = useHistory();

  const goToProfile = () => {
    history.push('/profile'); // Navega a la ruta '/profile' al hacer clic en el botón
  };

  return (
    <div>
      <h1>Bienvenido</h1>
      <p>Esta es la pantalla de bienvenida.</p>
      <button onClick={goToProfile}>Ir a Perfil</button> {/* Agrega un botón para ir a la pantalla de perfil */}
    </div>
  );
};

export default Welcome;
