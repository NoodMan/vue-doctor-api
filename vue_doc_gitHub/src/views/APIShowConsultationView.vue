<template>
  <center>
    <br />
    <h1> The Consultations </h1>
    <br>
    <div>
      <div class="card" style="width: 20rem">
        <!-- <img src="..." class="card-img-top" alt="..." /> -->
        <div class="card-body">
          <h5 class="card-title">{{ consultation.doctor_name }}</h5>
          <p class="card-text">Date : {{ consultation.date }}</p>
        </div>
      </div>
    </div>
  </center>
</template>

<script setup>
import { useConsultationStore } from "../stores/consultation";
import { ref } from "@vue/reactivity";
import { useRoute } from "vue-router";
import { onMounted } from "@vue/runtime-core";

const consultation = ref({});
const route = useRoute();
const store = useConsultationStore();

onMounted(() => {
  consultation.value = store.consultations.find(
    (c) => String(c.id) === route.params.id
  );
});
</script>

<style scoped>

.card {
  background-color: rgb(171, 110, 228);
}
</style>