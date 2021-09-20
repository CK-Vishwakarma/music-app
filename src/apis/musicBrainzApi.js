import axios from "axios";

const baseUrl = "https://musicbrainz.org/ws/2/release";

export default axios.create({
  baseURL: baseUrl,
});

// https://musicbrainz.org/ws/2/release/?query=release:%20maroon%
