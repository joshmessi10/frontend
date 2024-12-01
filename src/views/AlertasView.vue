<template>
    <div class="alertas">
      <h1 class="title">Alertas de Seguridad</h1>
      <ul class="alert-list">
        <li v-for="alerta in alertas" :key="alerta.id" class="alert-item">
          <p><strong>Alerta:</strong> {{ alerta.mensaje }}</p>
          <p><strong>Fecha:</strong> {{ alerta.fecha }}</p>
        </li>
      </ul>
    </div>
  </template>
  
  <script>
  export default {
    name: 'AlertasView',
    data() {
      return {
        alertas: [
          { id: 1, mensaje: 'Caída detectada', fecha: '2024-11-05 14:33' },
          { id: 2, mensaje: 'Intento de acceso no autorizado', fecha: '2024-11-04 10:21' },
          // Añadir más alertas según sea necesario
        ]
      };
    }
  };
  </script>
  
  <style scoped>
  .alertas {
    padding: 20px;
    font-family: Arial, sans-serif;
  }
  
  .title {
    text-align: center;
    font-size: 2em;
    color: #0056b3;
    margin-bottom: 20px;
  }
  
  .alert-list {
    list-style-type: none;
    padding: 0;
  }
  
  .alert-item {
    border: 1px solid #ddd;
    padding: 15px;
    margin-bottom: 10px;
    border-radius: 5px;
    background-color: #f9f9f9;
  }
  
  .alert-item p {
    margin: 5px 0;
  }
  </style>