<template>
  <ul role="list" class="p-6 divide-y divide-slate-200 w-56 text-justify">
    <li
      v-for="(value, key) in zipCodeDataModified"
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
    zipCodeData: {
      type: Object,
      required: true,
    },
  },
  computed: {
    zipCodeDataModified() {
      const newObj = {};
      for (const key in this.zipCodeData) {
        let keyModified = key.replace("_", " ");
        let newKey =
          keyModified.charAt(0).toUpperCase() + keyModified.substring(1);
        newObj[newKey] = this.zipCodeData[key];
      }
      return newObj;
    },
  },
};
</script>

<style></style>
