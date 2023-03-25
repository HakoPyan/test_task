<template>
  <ul role="list" class="p-6 divide-y divide-slate-200 w-56 text-justify">
    <li class="flex py-4 first:pt-0 last:pb-0">
      <div class="ml-3 overflow-hidden">
        <p class="text-sm font-medium text-slate-900">HTTP Referrer</p>
        <p class="text-sm text-slate-500 truncate">{{ referrer }}</p>
      </div>
    </li>
    <li
      v-for="(value, key) in userUAData"
      :key="key"
      class="flex py-4 first:pt-0 last:pb-0"
    >
      <div class="ml-3 overflow-hidden">
        <p class="text-sm font-medium text-slate-900">{{ key }}</p>
        <p class="text-sm text-slate-500 truncate">{{ value }}</p>
      </div>
    </li>
  </ul>
</template>

<script>
export default {
  props: {
    referrer: {
      type: String,
      required: true,
    },
    userUAData: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style></style>
