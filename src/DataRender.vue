<template>
  <div class="flex flex-row">
    <zip-code-data
      v-if="zipCodeData"
      :zip-code-data="zipCodeData"
    ></zip-code-data>
    <user-ip-address
      v-if="userIPAddressData"
      :user-ip-address-data="userIPAddressData"
    ></user-ip-address>
    <referrer-and-user-agent-data
      v-if="referrer && userUAData"
      :referrer="referrer"
      :user-u-a-data="userUAData"
    ></referrer-and-user-agent-data>
  </div>
</template>

<script>
import axios from "axios";
import ZipCodeData from "./components/ZipCodeData.vue";
import UserIpAddress from "./components/UserIpAddress.vue";
import ReferrerAndUserAgentData from "./components/ReferrerAndUserAgentData.vue";

export default {
  components: {
    ZipCodeData,
    UserIpAddress,
    ReferrerAndUserAgentData,
  },
  data() {
    return {
      referrer: null,
      userUAData: {},
      zipCodeData: null,
      userIPAddressData: {},
    };
  },
  mounted() {
    this.renderWholeData();
  },
  methods: {
    renderWholeData() {
      this.renderZipCodeData();
      this.renderReferrer();
      this.renderUserData();
      this.renderUAData();
    },
    async renderZipCodeData() {
      return await axios
        .get(
          `https://app.zipcodebase.com/api/v1/search?apikey=${
            import.meta.env.VITE_ZIP_API_KEY
          }&codes=${this.$route.params.zip}&country=us`
        )
        .then((response) => {
          this.zipCodeData = response.data.results[this.$route.params.zip][0];
          delete this.zipCodeData["city_en"];
          delete this.zipCodeData["state_en"];
        });
    },
    renderReferrer() {
      this.referrer = document.referrer;
    },
    renderUserData() {
      axios.get("http://www.geoplugin.net/json.gp").then((response) => {
        axios
          .get(`http://ip-api.com/json/${response.data.geoplugin_request}`)
          .then((resp) => {
            // Choosing the data that is needed for the task
            this.userIPAddressData["ISP"] = resp.data["isp"];
            this.userIPAddressData["Country"] = resp.data["country"];
            this.userIPAddressData["City"] = resp.data["city"];
            this.userIPAddressData["Latitude"] = resp.data["lat"];
            this.userIPAddressData["Longitude"] = resp.data["lon"];
            this.userIPAddressData["IP"] = resp.data["query"];
            this.userIPAddressData["Region"] = resp.data["region"];
          });
      });
    },
    renderUAData() {
      // Choosing the data that is needed for the task
      this.userUAData["Platform"] = navigator.userAgentData.platform;
      this.userUAData["On mobile"] = navigator.userAgentData.mobile;
    },
  },
};
</script>
