<template>
  <div class="register-wallet">
    <h2 class="title">Registra tu Billetera Inteligente</h2>
    <form @submit.prevent="registerWallet" class="form">
      <label for="walletName" class="form-label">Nombre de la Billetera:</label>
      <input
        type="text"
        id="walletName"
        v-model="walletName"
        class="form-input"
        placeholder="Nombre"
        required
      />
      <button type="submit" class="form-submit">Regístrala</button>
    </form>
    <p v-if="errorMessage" class="error-message">{{ errorMessage }}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      walletName: "",
      errorMessage: "",
    };
  },
  methods: {
    async registerWallet() {
      try {
        // Make an API call to register the wallet (send only the name)
        const response = await fetch("/api/wallet", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            name: this.walletName,
          }),
        });

        if (!response.ok) {
          throw new Error("Failed to register wallet");
        }

        this.$router.push("/register-cellphone"); // Redirect to success page
      } catch (error) {
        this.errorMessage = error.message;
      }
    },
  },
};
</script>

<style scoped>
.register-wallet {
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
