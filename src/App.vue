<template>
  <div class="grid place-content-center h-screen">
    <div class="flex flex-row p-8">
      <div class="basis-1/2 flex justify-center">
        <router-link :to="{ name: 'home' }"> Main Page </router-link>
      </div>
      <div class="basis-1/2 flex justify-center">
        <router-link
          v-if="valideZipCode"
          :to="{ name: 'render', params: { zip: zipCode } }"
        >
          Render Data
        </router-link>
      </div>
    </div>
    <div class="grid place-content-center text-center">
      <label class="block">
        <span class="block text-sm font-medium text-slate-700">Zip Code</span>
        <input
          type="text"
          v-model="zipCode"
          class="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none invalid:border-pink-500 invalid:text-pink-600 focus:invalid:border-pink-500 focus:invalid:ring-pink-500 flex flex-col justify-center"
        />
      </label>
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      zipCode: null,
    };
  },
  computed: {
    valideZipCode() {
      const regExp = /[0-9]/g;
      if (regExp.test(this.zipCode) && this.zipCode.length === 5) {
        return true;
      } else {
        return false;
      }
    },
  },
};
</script>

<style></style>
