export const getVideoId = url => {
  const videoIDRegEx = new RegExp(/v=(\S{11})/)
  const matches = url.match(videoIDRegEx)
  const [_, video_id] = matches
  return video_id
}

function execute() {
  return gapi.client.youtube.videos
    .list({
      part: ['snippet,contentDetails,statistics'],
      id: ['Ks-_Mh1QhMc'],
    })
    .then(
      function (response) {
        // Handle the results here (response.result has the parsed body).
        console.log('Response', response)
      },
      function (err) {
        console.error('Execute error', err)
      }
    )
}
