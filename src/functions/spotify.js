const querystring = require("querystring");
const { Buffer } = require("buffer");
const axios = require("axios");

const {
  SPOTIFY_CLIENT_ID: client_id,
  SPOTIFY_CLIENT_SECRET: client_secret,
  SPOTIFY_REFRESH_TOKEN: refresh_token,
} = process.env;

const basic = Buffer.from(`${client_id}:${client_secret}`).toString("base64");
const NOW_PLAYING_ENDPOINT = `https://api.spotify.com/v1/me/player/currently-playing`;
const TOKEN_ENDPOINT = `https://accounts.spotify.com/api/token`;

exports.handler = async (event, context, callback) => {
  const { access_token } = await getAccessToken();

  return await axios({
    url: NOW_PLAYING_ENDPOINT,
    method: "GET",
    headers: {
      Authorization: `Bearer ${access_token}`,
    },
  }).data;
};

const getAccessToken = async () => {
  const response = await axios({
    url: TOKEN_ENDPOINT,
    method: "POST",
    headers: {
      Authorization: `Basic ${basic}`,
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: querystring.stringify({
      grant_type: "refresh_token",
      refresh_token,
    }),
  });

  return response.data;
};
