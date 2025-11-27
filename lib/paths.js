import { absolute, gitRoot } from 'firost';
import { _ } from 'golgoth';

const root = gitRoot();

/**
 * Returns a formatted timestamp key with zero-padding
 * @param timestamp
 */
export function getTimestampKey(timestamp) {
  return _.padStart(timestamp, 3, '0');
}

// data/input or data/input/{episode}
/**
 *
 * @param episode
 */
export function getInputDir(episode) {
  const slug = episode?.slug;
  return absolute(root, 'data/input', slug);
}

// input/{episode}/subtitle.vtt
/**
 *
 * @param episode
 */
export function getSubtitlePath(episode) {
  return `${getInputDir(episode)}/subtitle.vtt`;
}

// input/{episode}/metadata.json
/**
 *
 * @param episode
 */
export function getMetadataPath(episode) {
  return `${getInputDir(episode)}/metadata.json`;
}

// computed/{episode}
/**
 *
 * @param episode
 */
export function getComputedDir(episode) {
  const slug = episode?.slug;
  return absolute(root, 'data/computed', slug);
}

// computed/{episode}/viewcount.json
/**
 *
 * @param episode
 */
export function getViewcountPath(episode) {
  return `${getComputedDir(episode)}/viewcount.json`;
}

// computed/{episode}/heatmap.json
/**
 *
 * @param episode
 */
export function getHeatmapPath(episode) {
  return `${getComputedDir(episode)}/heatmap.json`;
}

// computed/{episode}/media.json
/**
 *
 * @param episode
 */
export function getMediaPath(episode) {
  return `${getComputedDir(episode)}/media.json`;
}

// computed/{episode}/thumbnails
/**
 *
 * @param episode
 */
export function getThumbnailsDir(episode) {
  return `${getComputedDir(episode)}/thumbnails`;
}

// computed/{episode}/thumbnails/{timestamp}.png
/**
 *
 * @param episode
 * @param timestamp
 */
export function getThumbnailPath(episode, timestamp) {
  const key = getTimestampKey(timestamp);
  return `${getThumbnailsDir(episode)}/${key}.png`;
}

// computed/{episode}/previews
/**
 *
 * @param episode
 */
export function getPreviewsDir(episode) {
  return `${getComputedDir(episode)}/previews`;
}

// computed/{episode}/previews/{timestamp}.mp4
/**
 *
 * @param episode
 * @param timestamp
 */
export function getPreviewPath(episode, timestamp) {
  const key = getTimestampKey(timestamp);
  return `${getPreviewsDir(episode)}/${key}.mp4`;
}

// output/{episode}
/**
 *
 * @param episode
 */
export function getOutputDir(episode) {
  return absolute(root, 'data/output', episode.slug);
}

// output/{episode}/episode.json
/**
 *
 * @param episode
 */
export function getEpisodePath(episode) {
  return `${getOutputDir(episode)}/episode.json`;
}

// tmp/{episode}
/**
 *
 * @param episode
 */
export function getTmpDir(episode) {
  return absolute(root, 'data/tmp', episode.slug);
}

// tmp/{episode}/video.mp4
/**
 *
 * @param episode
 */
export function getVideoPath(episode) {
  return `${getTmpDir(episode)}/video.mp4`;
}

// tmp/{episode}/audio.mp3
/**
 *
 * @param episode
 */
export function getAudioPath(episode) {
  return `${getTmpDir(episode)}/audio.mp3`;
}

// ../brefsearch-media/media
/**
 *
 */
export function getMediaRepoDir() {
  return absolute('<gitRoot>/../brefsearch-media/media');
}
