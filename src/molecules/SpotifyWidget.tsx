import { getNowPlaying } from "../api/spotify";

const SpotifyWidget = () => {
  const data = getNowPlaying();

  return <h1>{JSON.stringify(data)}</h1>;
};

export default SpotifyWidget;
