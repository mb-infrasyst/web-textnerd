<template>
  <!-- prettier-ignore -->
  <div class="mainform">
    <form>
      <label class="custom-label">Enter text:</label><br />
      <textarea class="textarea is-link" type="text" rows="10" autofocus v-model="inputtext" />
      <br />
    </form>
    <center>
      <button class="button is-info is-light is-outlined custom-actionbutton" @click="clear()">Clear</button>
      <button class="button is-info is-light is-outlined custom-actionbutton" @click="uppercase()">Uppercase</button>
      <button class="button is-info is-light is-outlined custom-actionbutton" @click="lowercase()">Lowercase</button>
      <button class="button is-info is-light is-outlined custom-actionbutton" @click="capcase()">CapCase</button>
      <button class="button is-info is-light is-outlined custom-actionbutton" @click="alternatecase()">AlternateCase</button>
      <button class="button is-info is-light is-outlined custom-actionbutton" @click="invertedcase()">InvertedCase</button>
      <button class="button is-info is-light is-outlined custom-actionbutton" @click="sentencecase()">SentenceCase</button>
    </center>
  </div>


</template>

<script>
const headers_global = new Headers({
  "Content-Type": "application/json",
  "X-RapidAPI-Key": process.env.VUE_APP_RAPID_API_KEY,
  "X-RapidAPI-Host": process.env.VUE_APP_RAPID_API_HOST,
});
export default {
  data() {
    return {
      inputtext: "example text. the force is good. this is the way.",
    };
  },
  methods: {
    // clear
    clear() {
      this.inputtext = "";
    },

    // connect to uppercase api
    async uppercase() {
      const requestOptions = {
        method: "POST",
        headers: headers_global,
        body: JSON.stringify({ inputText: this.inputtext }),
      };
      const response = await fetch(
        "https://textnerd-io.p.rapidapi.com/api/uppercase",
        requestOptions
      );
      const data = await response.json();
      console.log(data);
      this.inputtext = data.uppercaseText;
    },

    // connect to lowercase api
    async lowercase() {
      const requestOptions = {
        method: "POST",
        headers: headers_global,
        body: JSON.stringify({ inputText: this.inputtext }),
      };
      const response = await fetch(
        "https://textnerd-io.p.rapidapi.com/api/lowercase",
        requestOptions
      );
      const data = await response.json();
      console.log(data);
      this.inputtext = data.lowercaseText;
    },

    // connect to capcase api
    async capcase() {
      const requestOptions = {
        method: "POST",
        headers: headers_global,
        body: JSON.stringify({ inputText: this.inputtext }),
      };
      const response = await fetch(
        "https://textnerd-io.p.rapidapi.com/api/capcase",
        requestOptions
      );
      const data = await response.json();
      console.log(data);
      this.inputtext = data.capcaseText;
    },

    // connect to alternatecase api
    async alternatecase() {
      const requestOptions = {
        method: "POST",
        headers: headers_global,
        body: JSON.stringify({ inputText: this.inputtext }),
      };
      const response = await fetch(
        "https://textnerd-io.p.rapidapi.com/api/alternatecase",
        requestOptions
      );
      const data = await response.json();
      console.log(data);
      this.inputtext = data.alternatecaseText;
    },

    // connect to invertedcase api
    async invertedcase() {
      const requestOptions = {
        method: "POST",
        headers: headers_global,
        body: JSON.stringify({ inputText: this.inputtext }),
      };
      const response = await fetch(
        "https://textnerd-io.p.rapidapi.com/api/invertedcase",
        requestOptions
      );
      const data = await response.json();
      console.log(data);
      this.inputtext = data.invertedcaseText;
    },

    // connect to sentencecase api
    async sentencecase() {
      const requestOptions = {
        method: "POST",
        headers: headers_global,
        body: JSON.stringify({ inputText: this.inputtext }),
      };
      const response = await fetch(
        "https://textnerd-io.p.rapidapi.com/api/sentencecase",
        requestOptions
      );
      const data = await response.json();
      console.log(data);
      this.inputtext = data.sentencecaseText;
    },
  },
};
</script>

<style>
.mainform {
  max-width: 60%;
  margin: 30px auto;
  background: white;
  text-align: left;
  padding: 40px;
  border-radius: 10px;
}
.custom-label {
  /* color: #aaa;
  display: inline-block;
  margin: 25px 0 15px;
  font-size: 1em;
  /* text-transform: uppercase; */
  /* letter-spacing: 1px; */
  font-weight: bold;
  font-family: 'Trebuchet MS', sans-serif;
  font-size: 16px;
}
textarea {
  display: block;
  resize: none;
  padding: 10px 6px;
  width: 100%;
  box-sizing: border-box;
  /* border: none; */
  /* border-bottom: 1px solid #ddd; */
  /* color: #555; */
}
.output {
  max-width: 60%;
  margin: 10px auto;
  background: white;
  text-align: left;
  padding: 40px;
  border-radius: 10px;
  font-weight: normal;
}
.custom-actionbutton {
  font-size: 1.2em;
  margin: 5px;
}
hr {
  max-width: 60%;
}
</style>