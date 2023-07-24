<template>
  <div>
    <h1>Design View</h1>
    <div class="grid grid-cols-3 gap-5 pt-4">
      <DesignCard
        v-for="(title, index) in titles"
        :key="index"
        :title="title"
        :imageSrc="imageSrc[index]"
      />
    </div>
  </div>
</template>

<script setup>
const titles = ["palette", "typography"];
const imageSrc = [
  "https://1.bp.blogspot.com/-wI758Dzexuw/YKRh08eq0pI/AAAAAAAATvg/mZGjN5O0FHQMMPiq7mDtTf_6MIoO8qM_gCLcBGAsYHQ/s1600/Heading.png",
  "https://public-images.interaction-design.org/literature/articles/materials/Z4EpUjD0LItZTM5hP2Xv7z85zDZbaLtCljyrGpia.jpg",
];
</script>

<style></style>
