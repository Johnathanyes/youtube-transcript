import { YoutubeTranscript } from 'youtube-transcript';

YoutubeTranscript.fetchTranscript('https://www.youtube.com/watch?v=XL_A1rt_qz4')
  .then(transcript => {
    //console.log(transcript);
    let str = ""
    transcript.map((obj) => {
      let cleaned_string = replaceHtmlEntities(obj.text)
      str += cleaned_string + " ";
    })
    console.log(str)
  })
  .catch(err => {
    console.error('Error fetching transcript:', err);
  });

function replaceHtmlEntities(text :string) {
  return text.replace(/&amp;#39;/g, "'");
}