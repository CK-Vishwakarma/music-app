import axios from "axios";

const baseUrl = "https://ws.audioscrobbler.com/2.0/";
const key = "470efa218bd757b522d93a4626a3cd2c";

export default axios.create({
  baseURL: baseUrl,
  params: { api_key: key, format: "json", method: "artist.search" },
});
