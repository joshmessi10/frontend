<template>
    <div class="register-cellphone">
      <h2 class="title">Registra tu celular</h2>
      <form @submit.prevent="registerCellphone" class="form">
        <label for="cellphoneName" class="form-label">Nombre del Celular:</label>
        <input
          type="text"
          id="cellphoneName"
          v-model="cellphoneName"
          class="form-input"
          placeholder="Nombre"
          required
        />
  
        <label for="address" class="form-label">Dirección MAC:</label>
        <input
          type="text"
          id="address"
          v-model="address"
          class="form-input"
          placeholder="MAC"
          required
        />
  
        <label for="osType" class="form-label">Sistema Operativo:</label>
        <select v-model="osType" id="osType" class="form-input">
          <option value="android">Android</option>
          <option value="ios">iOS</option>
        </select>
  
        <button type="submit" class="form-submit">Regístralo</button>
      </form>
      <p v-if="errorMessage" class="error-message">{{ errorMessage }}</p>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        cellphoneName: '',
        address: '',
        osType: 'android',
        errorMessage: ''
      };
    },
    methods: {
      async registerCellphone() {
        try {
          // Make an API call to register the cellphone with name, address, and OS
          const response = await fetch('/api/cellphone', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
              name: this.cellphoneName,
              address: this.address,
              osType: this.osType
            })
          });
  
          if (!response.ok) {
            throw new Error('Failed to register cellphone');
          }
  
          this.$router.push('/home'); // Redirect to success page
        } catch (error) {
          this.errorMessage = error.message;
        }
      }
    }
  };
  </script>
  
  <style scoped>
  .register-cellphone {
    padding: 2rem;
    max-width: 600px;
    margin: auto;
    background: #f9f9f9;
    border-radius: 10px;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  }
  
  .title {
    text-align: center;
    font-size: 1.8rem;
    color: #333;
  }
  
  .form {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }
  
  .form-label {
    font-size: 1rem;
    color: #555;
  }
  
  .form-input {
    padding: 10px;
    font-size: 1rem;
    border: 1px solid #ddd;
    border-radius: 5px;
  }
  
  .form-submit {
    background-color: #1ab188;
    color: white;
    border: none;
    padding: 1rem;
    cursor: pointer;
    border-radius: 5px;
    transition: background-color 0.3s;
  }
  
  .form-submit:hover {
    background-color: #0b9185;
  }
  
  .error-message {
    color: red;
    text-align: center;
  }
  </style>
  