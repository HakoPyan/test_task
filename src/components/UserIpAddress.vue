<template>
  <ul role="list" class="p-6 divide-y divide-slate-200 w-56 text-justify">
    <li
      v-for="(value, key) in userIpAddressData"
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
    userIpAddressData: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style></style>
