import YouTube from "youtube-node";
import config from "./youyube-config.json";

const youtube = new YouTube();
youtube.setKey(config.key);

export function searchVideoURL(message, queryText) {
  return new Promise((resolve, reject) => {
    youtube.search(
      `Exercicio em casa para ${queryText}`,
      2,
      (error, result) => {
        if (!error) {
          const videosIds = result.items
            .map((item) => item.id.videoId)
            .filter((item) => item);
          const youtubeLinks = videosIds.map(
            (videoId) => `https://www.youtube.com:watch?v=${videoId}`
          );
          resolve(`${message} ${youtubeLinks.join(", ")}`);
        } else {
          reject(`Deu ruim`);
        }
      }
    );
  });
}
