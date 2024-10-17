//@ts-ignore
import YoutubeMusicApi from 'youtube-music-api';

const YTMusicAPI = async () => {
  const ytmusic = new YoutubeMusicApi();
  await ytmusic.initalize(/* Optional: Custom cookies */);

  return ytmusic;
};

export default YTMusicAPI();
