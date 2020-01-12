const recordContainer = document.getElementById("jsRecordContainer");
const recordBtn = document.getElementById("jsRecordBtn");
const videoPreview = document.getElementById("jsVideoPreview");

let videoRecorder;

const handleVideoData = event => {
  const { data: videoFile } = event;
  console.log(videoFile); // blob을 보여준다
  const link = document.createElement("a");
  link.href = URL.createObjectURL(videoFile);
  link.download = "recorded.webm";
  document.body.appendChild(link);
  link.click();
};
const stopRecording = () => {
  console.log(videoRecorder);
  videoRecorder.stop();
  videoRecorder.stream.getVideoTracks()[0].stop();
  recordBtn.removeEventListener("click", stopRecording);
  recordBtn.addEventListener("click", getVideo);
  recordBtn.innerHTML = "Start recording";
};
const startRecording = stream => {
  videoRecorder = new MediaRecorder(stream);
  console.log(videoRecorder);
  videoRecorder.start();
  videoRecorder.addEventListener("dataavailable", handleVideoData);
  recordBtn.removeEventListener("click", startRecording);
  recordBtn.addEventListener("click", stopRecording);
};

const getVideo = async () => {
  try {
    const stream = await navigator.mediaDevices.getUserMedia({
      audio: true,
      video: { width: 1280, height: 720 }
    });
    videoPreview.srcObject = stream;
    videoPreview.muted = true;
    videoPreview.play();
    recordBtn.innerHTML = "Stop recording";
    startRecording(stream);
  } catch (error) {
    console.log(error);
    recordBtn.innerHTML = "Cant record";
  } finally {
    recordBtn.removeEventListener("click", getVideo);
  }
};

function init() {
  recordBtn.addEventListener("click", getVideo);
}

if (recordContainer) {
  init();
}
