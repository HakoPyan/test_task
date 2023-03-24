<template>
  <ul role="list" class="p-6 divide-y divide-slate-200">
    <li class="flex py-4 first:pt-0 last:pb-0">
      <div class="ml-3 overflow-hidden">
        <p class="text-sm font-medium text-slate-900">{{ person.name }}</p>
        <p class="text-sm text-slate-500 truncate">{{ person.email }}</p>
      </div>
    </li>
  </ul>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      person: {
        name: "Arsen",
        email: "asdad@mail.ru",
      },
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
        .then((resp) => console.log(resp));
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
