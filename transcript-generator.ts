import { YoutubeTranscript } from 'youtube-transcript';

YoutubeTranscript.fetchTranscript('https://www.youtube.com/watch?v=XL_A1rt_qz4')
  .then(transcript => {
    console.log(transcript);
  })
  .catch(err => {
    console.error('Error fetching transcript:', err);
  });