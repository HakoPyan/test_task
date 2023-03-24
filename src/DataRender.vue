<template>
  <div class="flex flex-row">
    <ul
      v-for="(item, index) in $data"
      :key="index"
      role="list"
      class="p-6 divide-y divide-slate-200"
    >
      <li
        v-for="(value, key) in item"
        :key="key"
        class="flex py-4 first:pt-0 last:pb-0"
      >
        <div class="ml-3 overflow-hidden">
          <p class="text-sm font-medium text-slate-900">{{ key }}</p>
          <p class="text-sm text-slate-500 truncate">{{ value }}</p>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      zipCodeData: null,
      userLocationData: null,
      userUAData: null,
      referrer: null,
      userIPAddress: null,
    };
  },
  mounted() {
    this.renderWholeData();
  },
  methods: {
    renderWholeData() {
      this.renderZipCodeData();
      this.renderUserData();
      this.renderReferrer();
      this.getIP();
    },
    async renderZipCodeData() {
      return await axios
        .get(
          `https://app.zipcodebase.com/api/v1/search?apikey=5412dd50-ca7e-11ed-8557-7349d60d7194&codes=${this.$route.params.zip}&country=us`
        )
        .then(
          (resp) =>
            (this.zipCodeData = resp.data.results[this.$route.params.zip][0])
        );
    },
    renderUserData() {
      navigator.geolocation.getCurrentPosition(
        (resp) => {
          this.userLocationData = {
            latitude: resp.coords.latitude,
            longitude: resp.coords.longitude,
          };
        },
        (error) => {
          return error;
        }
      );
      this.userUAData = navigator.userAgentData;
    },
    renderReferrer() {
      this.referrer = document.referrer;
    },
    getIP() {
      axios
        .get("http://www.geoplugin.net/json.gp")
        .then((resp) => (this.userIPAddress = resp.data.geoplugin_request));
    },
  },
};
</script>
