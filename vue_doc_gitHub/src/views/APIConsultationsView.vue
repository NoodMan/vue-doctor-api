<template>
  <center>
    <br />
    <h1>List of consultations</h1>
    <div v-for="consult in consultStore.consultations" :key="consult['@id']">
      <br />
      <br />
      <div class="card" style="width: 20rem">
        <!-- <img src="..." class="card-img-top" alt="..." /> -->
        <div class="body">
          <br />
          <h5 class="title">{{ consult.doctor_name }}</h5>

          <p class="text">Date : {{ consult.date }}</p>
          <router-link
            :to="{ name: 'show_consultation', params: { id: consult.id } }"
          >
            <center>
              <button class="btn btn-dark">
                <span class="material-icons"> remove_red_eye </span>
              </button>
            </center>
            <br />
          </router-link>
        </div>
      </div>
    </div>
  </center>
</template>

<script setup lang="ts">
import { useUserStore } from "../stores/token";
import { useConsultationStore } from "../stores/consultation";
import { fetchConsults } from "../plugins/fetch";
import { onMounted } from "@vue/runtime-core";

const consultStore = useConsultationStore();
const userStore = useUserStore();

onMounted(() => {
  fetchConsults(userStore.token).then((consultsDatas) => {
    consultStore.consultations = consultsDatas["hydra:member"];
  });
});
</script>

<style scoped>
button {
  border-radius: 10px;
  align-items: center;
  border: 3px solid rgb(247, 29, 76);
}
.card {
  background-color: blanchedalmond;
}
</style>
