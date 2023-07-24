<template>
  <div class="relative z-0">
    <div v-if="showModal" class="modal">
      <h1>Modal Content</h1>
      <p>Some text for the modal</p>
      <button @click="toggleModal()" class="btn">Close Modal</button>
    </div>
    <div :class="showModal ? 'bg-modal' : ''">
      <h2>
        Text outside the modalText outside the modalText outside the modalText
        outside the modalText outside the modalText outside the modalText
        outside the modalText outside the modalText outside the modal
      </h2>
      <button @click="toggleModal()" class="btn">Open Modal</button>
    </div>
  </div>
</template>

<script setup>
const showModal = ref(false);

const toggleModal = () => {
  showModal.value = !showModal.value;
};
</script>

<style></style>
