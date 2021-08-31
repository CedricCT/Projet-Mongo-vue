<template>
  <main class="main">
    <h2>
      <span v-if="mode == 'create'">Inscription</span>
      <span v-if="mode == 'login'">Connexion</span>
    </h2>
    <div class="formulaire">
      <div class="switch">
        <div v-if="mode == 'login'">
          <span @click="createMode()"
            >Vous n'avez pas encore de compte ? Créer une compte
          </span>
        </div>
        <div v-if="mode == 'create'">
          <span @click="loginMode()">
            Vous avez dejas un compte ? Connexion</span
          >
        </div>
      </div>
      <div class="message" v-if="message && mode == 'create'">{{message}}</div>
      <input
        v-if="mode == 'create'"
        type="text"
        placeholder="Entrez votre pseudo"
        name="pseudo"
        v-model="pseudo"
        class="input-formulaire"
      />
      <input
        type="email"
        placeholder="Entrez votre email"
        name="email"
        v-model="email"
        class="input-formulaire"
      />
      <input
        type="password"
        placeholder="Entrez un password"
        name="password"
        v-model="password"
        class="input-formulaire"
      />
      <input
        v-if="mode == 'create'"
        type="password"
        placeholder="Confirmez votre password"
        name="confirm"
        v-model="confirm"
        class="input-formulaire"
      />

      <div class="buttonn">
        <button
          class="button-formulaire"
          v-if="mode == 'create'"
          @click="createAccount()"
        >
          Inscription
        </button>
        <button
          class="button-formulaire"
          @click="loginAccount()"
          v-if="mode == 'login'"
        >
          Connexion
        </button>
        <input class="button-formulaire" type="reset" value="Reset" />
      </div>
    </div>
  </main>
</template>

<script>
import axios from "axios";
export default {
  name: "Sign",
  data: function () {
    return {
      message:"",
      mode: "login",
      pseudo: "",
      password: "",
      confirm: "",
      email: "",
    };
  },
  methods: {
    //function Login
    loginAccount: function () {
      axios
        .get("http://localhost:3050/user/signin", {
          email: this.email,
          password: this.password,
        })
        .then(function (response) {
          console.log(response.status);
        })
        .catch(function (error) {
          console.log(error);
        });
    },
    createAccount: function () {
      //check if password is identique
      if (this.password === this.confirm) {
        console.log("test");
        axios
          .post("http://localhost:3050/user/create", {            
            name: this.pseudo,
            password: this.password,
            email: this.email,
            biography:""
          })
          .then(function (response) {
            console.log(response);
          })
          .catch(function (error) {
            console.log(error);
          });
      } else {
        this.message = "Les Mots de passe ne correspondent pas";
      }
    },
    checkForm: function (e) {
      console.log("testtettet");

      e.preventDefault();
    },
    createMode: function (e) {
      this.mode = "create";
      e.preventDefault();
    },
    loginMode: function (e) {
      this.mode = "login";
      e.preventDefault();
    },

    /*
this.axios
      .get("https://randomuser.me/api/?results=10")
      .then((utilisateurs) => {
        this.donnees = utilisateurs.data.results;
      });
  */
  },
};
</script>

<style>
.main {
  align-items: center;
  justify-content: center;
  display: flex;
  flex-direction: column;
  width: 100%;
}
.switch {
  color: #a8b3cc;
  text-align: center;
  cursor: pointer;
}
.main h2 {
  color: #a8b3cc;
}
.message {
  text-align: center;
  padding: 10px;
  border: 1px solid red;
  background-color: RGBA(255,101,80,0.4);
}
.formulaire {
  display: flex;
  flex-direction: column;
  width: 40%;
}
.input-formulaire {
  margin: 10px 0;
  background-color: #a8b3cc;
  border: 1px solid black;
  padding: 4px 4px;
  text-align: center;
  width: 100%;
  font-size: 1.2em;
}
.input-formulaire:focus {
  outline: none;
}
.buttonn {
  display: flex;
  width: 100%;
  justify-content: space-evenly;
}
.button-formulaire {
  background-color: #a8b3cc;
  border: 1px solid black;
  padding: 15px 5px;
  width: 40%;
}
.button-formulaire:hover {
  background-color: #5b647a;
  box-shadow: 1px 1px 1px #000;
}
.button-formulaire:active {
  box-shadow: none;
}
</style>