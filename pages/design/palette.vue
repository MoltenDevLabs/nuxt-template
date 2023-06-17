<template>
  <div class="flex gap-2">
    <div class="flex flex-col border w-full sm:w-1/3 text-center">
      <div>
        <h4 class="text-center border-b">Brand Color Scheme</h4>
      </div>
      <div class="flex gap-2">
        <div>
          <h5 class="bg-primary-50">Primary 50</h5>
          <h5 class="bg-primary-100">Primary 100</h5>
          <h5 class="bg-primary-200">Primary 200</h5>
          <h5 class="bg-primary-300">Primary 300</h5>
          <h5 class="bg-primary-400">Primary 400</h5>
          <h5 class="bg-primary-500">Primary 500</h5>
          <h5 class="bg-primary-600">Primary 600</h5>
          <h5 class="bg-primary-700">Primary 700*</h5>
          <h5 class="bg-primary-800">Primary 800</h5>
          <h5 class="bg-primary-900">Primary 900</h5>
          <h5 class="bg-primary-950">Primary 950</h5>
        </div>
        <div>
          <h5 class="bg-secondary-50">Secondary 50</h5>
          <h5 class="bg-secondary-100">Secondary 100</h5>
          <h5 class="bg-secondary-200">Secondary 200</h5>
          <h5 class="bg-secondary-300">Secondary 300</h5>
          <h5 class="bg-secondary-400">Secondary 400*</h5>
          <h5 class="bg-secondary-500">Secondary 500</h5>
          <h5 class="bg-secondary-600">Secondary 600</h5>
          <h5 class="bg-secondary-700">Secondary 700</h5>
          <h5 class="bg-secondary-800">Secondary 800</h5>
          <h5 class="bg-secondary-900">Secondary 900</h5>
          <h5 class="bg-secondary-950">Secondary 950</h5>
        </div>
        <div>
          <h5 class="bg-tertiary-50">Tertiary 50</h5>
          <h5 class="bg-tertiary-100">Tertiary 100</h5>
          <h5 class="bg-tertiary-200">Tertiary 200</h5>
          <h5 class="bg-tertiary-300">Tertiary 300</h5>
          <h5 class="bg-tertiary-400">Tertiary 400</h5>
          <h5 class="bg-tertiary-500">Tertiary 500*</h5>
          <h5 class="bg-tertiary-600">Tertiary 600</h5>
          <h5 class="bg-tertiary-700">Tertiary 700</h5>
          <h5 class="bg-tertiary-800">Tertiary 800</h5>
          <h5 class="bg-tertiary-900">Tertiary 900</h5>
          <h5 class="bg-tertiary-950">Tertiary 950</h5>
        </div>
      </div>
    </div>

    <div class="flex flex-col border w-full sm:w-1/3 text-center">
      <div>
        <h4 class="text-center border-b">Neutral Color Scheme</h4>
      </div>
      <div class="flex gap-2">
        <div>
          <h5 class="bg-slate-50">Slate 50</h5>
          <h5 class="bg-slate-100">Slate 100</h5>
          <h5 class="bg-slate-200">Slate 200</h5>
          <h5 class="bg-slate-300">Slate 300</h5>
          <h5 class="bg-slate-400">Slate 400</h5>
          <h5 class="bg-slate-500">Slate 500</h5>
          <h5 class="bg-slate-600">Slate 600</h5>
          <h5 class="bg-slate-700">Slate 700</h5>
          <h5 class="bg-slate-800">Slate 800</h5>
          <h5 class="bg-slate-900">Slate 900</h5>
          <h5 class="bg-slate-950">Slate 950</h5>
        </div>
        <div>
          <h5 class="bg-gray-50">Gray 50</h5>
          <h5 class="bg-gray-100">Gray 100</h5>
          <h5 class="bg-gray-200">Gray 200</h5>
          <h5 class="bg-gray-300">Gray 300</h5>
          <h5 class="bg-gray-400">Gray 400</h5>
          <h5 class="bg-gray-500">Gray 500</h5>
          <h5 class="bg-gray-600">Gray 600</h5>
          <h5 class="bg-gray-700">Gray 700</h5>
          <h5 class="bg-gray-800">Gray 800</h5>
          <h5 class="bg-gray-900">Gray 900</h5>
          <h5 class="bg-gray-950">Gray 950</h5>
        </div>
        <div>
          <h5 class="bg-zinc-50">Zinc 50</h5>
          <h5 class="bg-zinc-100">Zinc 100</h5>
          <h5 class="bg-zinc-200">Zinc 200</h5>
          <h5 class="bg-zinc-300">Zinc 300</h5>
          <h5 class="bg-zinc-400">Zinc 400</h5>
          <h5 class="bg-zinc-500">Zinc 500</h5>
          <h5 class="bg-zinc-600">Zinc 600</h5>
          <h5 class="bg-zinc-700">Zinc 700</h5>
          <h5 class="bg-zinc-800">Zinc 800</h5>
          <h5 class="bg-zinc-900">Zinc 900</h5>
          <h5 class="bg-zinc-950">Zinc 950</h5>
        </div>
        <div>
          <h5 class="bg-neutral-50">Neutral 50</h5>
          <h5 class="bg-neutral-100">Neutral 100</h5>
          <h5 class="bg-neutral-200">Neutral 200</h5>
          <h5 class="bg-neutral-300">Neutral 300</h5>
          <h5 class="bg-neutral-400">Neutral 400</h5>
          <h5 class="bg-neutral-500">Neutral 500</h5>
          <h5 class="bg-neutral-600">Neutral 600</h5>
          <h5 class="bg-neutral-700">Neutral 700</h5>
          <h5 class="bg-neutral-800">Neutral 800</h5>
          <h5 class="bg-neutral-900">Neutral 900</h5>
          <h5 class="bg-neutral-950">Neutral 950</h5>
        </div>
        <div>
          <h5 class="bg-stone-50">Stone 50</h5>
          <h5 class="bg-stone-100">Stone 100</h5>
          <h5 class="bg-stone-200">Stone 200</h5>
          <h5 class="bg-stone-300">Stone 300</h5>
          <h5 class="bg-stone-400">Stone 400</h5>
          <h5 class="bg-stone-500">Stone 500</h5>
          <h5 class="bg-stone-600">Stone 600</h5>
          <h5 class="bg-stone-700">Stone 700</h5>
          <h5 class="bg-stone-800">Stone 800</h5>
          <h5 class="bg-stone-900">Stone 900</h5>
          <h5 class="bg-stone-950">Stone 950</h5>
        </div>
      </div>
    </div>

    <div class="flex flex-col border w-full sm:w-1/3 text-center">
      <div>
        <h4 class="text-center border-b">Semantic Color Scheme</h4>
      </div>
      <div class="flex gap-2">
        <div>
          <h5 class="bg-red-50">Red 50</h5>
          <h5 class="bg-red-100">Red 100</h5>
          <h5 class="bg-red-200">Red 200</h5>
          <h5 class="bg-red-300">Red 300</h5>
          <h5 class="bg-red-400">Red 400</h5>
          <h5 class="bg-red-500">Red 500</h5>
          <h5 class="bg-red-600">Red 600</h5>
          <h5 class="bg-red-700">Red 700</h5>
          <h5 class="bg-red-800">Red 800</h5>
          <h5 class="bg-red-900">Red 900</h5>
          <h5 class="bg-red-950">Red 950</h5>
        </div>
        <div>
          <h5 class="bg-green-50">Green 50</h5>
          <h5 class="bg-green-100">Green 100</h5>
          <h5 class="bg-green-200">Green 200</h5>
          <h5 class="bg-green-300">Green 300</h5>
          <h5 class="bg-green-400">Green 400</h5>
          <h5 class="bg-green-500">Green 500</h5>
          <h5 class="bg-green-600">Green 600</h5>
          <h5 class="bg-green-700">Green 700</h5>
          <h5 class="bg-green-800">Green 800</h5>
          <h5 class="bg-green-900">Green 900</h5>
          <h5 class="bg-green-950">Green 950</h5>
        </div>
        <div>
          <h5 class="bg-yellow-50">Yellow 50</h5>
          <h5 class="bg-yellow-100">Yellow 100</h5>
          <h5 class="bg-yellow-200">Yellow 200</h5>
          <h5 class="bg-yellow-300">Yellow 300</h5>
          <h5 class="bg-yellow-400">Yellow 400</h5>
          <h5 class="bg-yellow-500">Yellow 500</h5>
          <h5 class="bg-yellow-600">Yellow 600</h5>
          <h5 class="bg-yellow-700">Yellow 700</h5>
          <h5 class="bg-yellow-800">Yellow 800</h5>
          <h5 class="bg-yellow-900">Yellow 900</h5>
          <h5 class="bg-yellow-950">Yellow 950</h5>
        </div>
        <div>
          <h5 class="bg-blue-50">Blue 50</h5>
          <h5 class="bg-blue-100">Blue 100</h5>
          <h5 class="bg-blue-200">Blue 200</h5>
          <h5 class="bg-blue-300">Blue 300</h5>
          <h5 class="bg-blue-400">Blue 400</h5>
          <h5 class="bg-blue-500">Blue 500</h5>
          <h5 class="bg-blue-600">Blue 600</h5>
          <h5 class="bg-blue-700">Blue 700</h5>
          <h5 class="bg-blue-800">Blue 800</h5>
          <h5 class="bg-blue-900">Blue 900</h5>
          <h5 class="bg-blue-950">Blue 950</h5>
        </div>
        <div>
          <h5 class="bg-purple-50">Purple 50</h5>
          <h5 class="bg-purple-100">Purple 100</h5>
          <h5 class="bg-purple-200">Purple 200</h5>
          <h5 class="bg-purple-300">Purple 300</h5>
          <h5 class="bg-purple-400">Purple 400</h5>
          <h5 class="bg-purple-500">Purple 500</h5>
          <h5 class="bg-purple-600">Purple 600</h5>
          <h5 class="bg-purple-700">Purple 700</h5>
          <h5 class="bg-purple-800">Purple 800</h5>
          <h5 class="bg-purple-900">Purple 900</h5>
          <h5 class="bg-purple-950">Purple 950</h5>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
definePageMeta({
  layout: 'design',
});
</script>

<style></style>
