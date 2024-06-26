import React from "react";
import styled from "styled-components";
import { DocRenderer } from "../..";
import ImageProxyRenderer from "../imageProxy";

const StyledImageRenderer = styled(ImageProxyRenderer)`
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: center;
  height: 100%;
  background-color: white;
  background-image: linear-gradient(45deg, #e0e0e0 25%, transparent 25%),
    linear-gradient(-45deg, #e0e0e0 25%, transparent 25%),
    linear-gradient(45deg, transparent 75%, #e0e0e0 75%),
    linear-gradient(-45deg, transparent 75%, #e0e0e0 75%);
  background-size: 20px 20px;
  background-position:
    0 0,
    0 10px,
    10px -10px,
    -10px 0px;
`;

const ImagesRenderer: DocRenderer = (props) => <StyledImageRenderer {...props} />;

ImagesRenderer.fileTypes = ["png", "gif", "jpg", "jpeg", "bmp", "webp", "svg", "image/png", "image/gif", "image/jpg", "image/jpeg", "image/bmp", "image/webp", "image/svg+xml"];
ImagesRenderer.weight = 0;
ImagesRenderer.fileLoader = ({ fileLoaderComplete, documentURI }) => {
  const img = new Image()
  img.onload = () => {
    fileLoaderComplete({
      result: null
    }  as FileReader)
  }
  img.src = documentURI
}
export default ImagesRenderer;
