<template>
    <div class="historial">
      <h1 class="title">Historial de Conexiones</h1>
      <table class="history-table">
        <thead>
          <tr>
            <th>Fecha</th>
            <th>Hora</th>
            <th>Evento</th>
            <th>Nivel de Batería</th>
            <th>Distancia Estimada (m)</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="evento in historialConexiones" :key="evento.id">
            <td>{{ evento.fecha }}</td>
            <td>{{ evento.hora }}</td>
            <td>{{ evento.tipo }}</td>
            <td>{{ evento.nivel_bateria }}%</td>
            <td>{{ evento.distancia }} m</td>
          </tr>
        </tbody>
      </table>
    </div>
  </template>
  
  <script>
  export default {
    name: 'HistorialView',
    data() {
      return {
        historialConexiones: [
          { id: 1, fecha: '2024-11-01', hora: '08:45', tipo: 'Conexión', nivel_bateria: 85, distancia: 1.0 },
          { id: 2, fecha: '2024-11-02', hora: '12:10', tipo: 'Desconexión', nivel_bateria: 70, distancia: 5.5 },
          // Añadir más registros según sea necesario
        ]
      };
    }
  };
  </script>
  
  <style scoped>
  .historial {
    padding: 20px;
    font-family: Arial, sans-serif;
  }
  
  .title {
    text-align: center;
    font-size: 2em;
    color: #0056b3;
    margin-bottom: 20px;
  }
  
  .history-table {
    width: 100%;
    border-collapse: collapse;
  }
  
  .history-table th, .history-table td {
    padding: 10px;
    border: 1px solid #ddd;
    text-align: center;
  }
  
  .history-table th {
    background-color: #f5f5f5;
  }
  
  .history-table tr:nth-child(even) {
    background-color: #f9f9f9;
  }
  </style>