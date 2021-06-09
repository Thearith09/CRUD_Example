<template>
  <div>
    <form @submit.prevent="handleSubmit">
      <h3>Signup Form</h3>
      <label>Email: </label>
      <input type="email" required v-model="email" />
      <label>Password: </label>
      <input type="password" required v-model="password" />
      <label>Role:</label>
      <select v-model="role">
        <option value="programmer">Programmer</option>
        <option value="designer">Designer</option>
        <option value="developer">developer</option>
      </select>

      <label>Skills:</label>
      <input type="text" v-model="skill" @keypress.space="handleAddSkill" />
      <span>{{ skills }}</span>

      <div>
        <input v-model="terms" type="checkbox" />
        <label>AGREE TERMS AND CONDITIONS</label>
      </div>
      <div>
        <label>Reading Books</label>
        <input v-model="habbits" value="reading books" type="checkbox" />

        <label>Running</label>
        <input v-model="habbits" value="running" type="checkbox" />

        <label>Watching War Movies</label>
        <input v-model="habbits" value="watching war movies" type="checkbox" />
      </div>
      <button>Sumit</button>
    </form>
    <p>Email: {{ email }}</p>
    <p>Password: {{ password }}</p>
    <p>Role: {{ role }}</p>
    <p>Agree Terms: {{ terms }}</p>
    <p>Habbits: {{ habbits }}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      email: "",
      password: "",
      role: "",
      skill: "",
      skills: [],
      terms: false,
      habbits: [],
    };
  },
  methods: {
    handleAddSkill() {
      this.skills.push(this.skill);
      this.skill = "";
    },
    handleSubmit() {
      console.log(`
      Email: ${this.email}
      Password: ${this.password}
      Role: ${this.role}
      Skills: ${this.skills}
      Habbits: ${this.habbits}
      `);
    },
  },
};
</script>

<style scoped>
form {
  max-width: 420px;
  margin: 30px auto;
  background: white;
  text-align: left;
  padding: 40px;
  border-radius: 10px;
}

h3 {
  text-align: center;
  font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;
  color: rgb(8, 96, 228);
}

label {
  color: #aaa;
  display: inline-block;
  margin: 25px 0 15px;
  font-size: 0.6em;
  text-transform: uppercase;
  letter-spacing: 1px;
  font-weight: bold;
}

input,
select {
  display: block;
  padding: 10px 6px;
  width: 100%;
  box-sizing: border-box;
  border: none;
  border-bottom: 1px solid #ddd;
  color: #555;
}
input[type="checkbox"] {
  display: inline-block;
  width: 16px;
  margin: 0 10px 0 0;
  position: relative;
  top: 2px;
}
button {
  background: rgb(8, 96, 228);
  color: white;
  padding: 10px 40px;
  border-radius: 20px;
  cursor: pointer;
}
</style>
