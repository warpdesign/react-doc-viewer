import React from "react"
import styled from "styled-components"
import { DocRenderer } from "../.."

const VideoRenderer: DocRenderer = ({ mainState: { currentDocument } }) => {
  if (!currentDocument) return null

  return (
    <Container id="video-renderer">
      <Video controls src={currentDocument.uri} autoPlay />
    </Container>
  );
};

export default VideoRenderer

VideoRenderer.fileTypes = ["video/mp4", "video/quicktime", "video/x-msvideo"]
VideoRenderer.weight = 0
// Define a fake file loader for videos: the video tag will automatically stream
// the video so we don't need to load the whole (!) file before.
VideoRenderer.fileLoader = ({ fileLoaderComplete }) => {
  fileLoaderComplete({
    result: null
  } as FileReader)
}

const Container = styled.div`
  width: 100%;
`;
const Video = styled.video`
  width: 100%;
  height: 100%;
  border: 0;
`;
