
import React from 'react';

const perfil = () => {
  const userName = "Liliana Guadalupe de Jesús Martinez";

  return (
    <div>
      <h1>Perfil de Usuario</h1>
      <p>Nombre: {userName}</p>
      <button>Editar perfil</button>
    </div>
  );
};

export default perfil;
