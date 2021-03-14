export const getVideoId = url => {
  const videoIDRegEx = new RegExp(/v=(\S{11})/)
  const matches = url.match(videoIDRegEx)
  const [_, video_id] = matches
  return video_id
}
