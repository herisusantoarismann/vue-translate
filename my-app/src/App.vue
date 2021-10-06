<template>
  <div id="app">
    <div class="container">
      <h1>Translate</h1>
      <div class="row">
        <div class="col">
          <select
            class="form-select"
            aria-label="Default select example"
            v-model="from"
          >
            <option v-for="list in lists" :key="list.code" :value="list.code">{{
              list.language
            }}</option>
          </select>
        </div>
        <div class="col">
          <select
            class="form-select"
            aria-label="Default select example"
            v-model="to"
          >
            <option v-for="list in lists" :key="list.code" :value="list.code">{{
              list.language
            }}</option>
          </select>
        </div>
      </div>
      <div class="row my-2">
        <div class="col">
          <textarea
            class="form-control"
            id="exampleFormControlTextarea1"
            rows="3"
            v-model="text"
          ></textarea>
        </div>
        <div class="col">
          <textarea
            class="form-control"
            id="exampleFormControlTextarea1"
            rows="3"
            :value="result"
            disabled
          ></textarea>
        </div>
      </div>
      <div class="row">
        <div class="col">
          <button
            class="btn btn-primary mx-auto"
            type="submit"
            @click="translate()"
          >
            Translate
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";
import { translateText } from "./services/Service";
import { languages } from "./languages";

export default {
  name: "App",
  data() {
    return {
      text: "",
      result: "",
      lists: languages,
      from: "af",
      to: "af",
    };
  },
  methods: {
    translate() {
      translateText(this.text, this.from, this.to).then(
        (res) => (this.result = res.text)
      );
    },
  },
};
</script>

<style>
@import "./assets/styles/global.css";
</style>
