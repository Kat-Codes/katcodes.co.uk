import { getNowPlaying } from "../api/spotify";

const SpotifyWidget = () => {
  const data = getNowPlaying();

  return (
    <div>
      <h1>{JSON.stringify(data)}</h1>
      <h2>hello: {process.env.SPOTIFY_CLIENT_ID}</h2>
    </div>
  );
};

export default SpotifyWidget;
