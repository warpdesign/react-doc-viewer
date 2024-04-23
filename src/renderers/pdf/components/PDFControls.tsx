import React, { FC, useContext } from "react";
import styled, { DefaultTheme, ThemeContext } from "styled-components";
import { Button } from "../../../components/common";
import { IStyledProps } from "../../..";
import { PDFContext } from "../state";
import { setZoomLevel } from "../state/actions";
import { useTranslation } from "../../../hooks/useTranslation";
import {
  ResetZoomPDFIcon,
  ZoomInPDFIcon,
  ZoomOutPDFIcon,
} from "./icons";
import PDFPagination from "./PDFPagination";

const PDFControls: FC<{}> = () => {
  const { t } = useTranslation();
  const {
    state: {
      paginated,
      zoomLevel,
      numPages,
      zoomJump,
      defaultZoomLevel,
    },
    dispatch,
  } = useContext(PDFContext);
  const {
    textPrimary
  } = useContext(ThemeContext) as DefaultTheme

  return (
    <Container id="pdf-controls">
      {paginated && numPages > 1 && <PDFPagination />}

      <ControlButton
        id="pdf-zoom-out"
        onMouseDown={() => dispatch(setZoomLevel(zoomLevel - zoomJump))}
      >
        <ZoomOutPDFIcon color={textPrimary} size="80%" />
      </ControlButton>

      <ControlButton
        id="pdf-zoom-in"
        onMouseDown={() => dispatch(setZoomLevel(zoomLevel + zoomJump))}
      >
        <ZoomInPDFIcon color={textPrimary} size="80%" />
      </ControlButton>

      <ControlButton
        id="pdf-zoom-reset"
        onMouseDown={() => dispatch(setZoomLevel(defaultZoomLevel))}
        disabled={zoomLevel === defaultZoomLevel}
      >
        <ResetZoomPDFIcon color={textPrimary} size="70%" />
      </ControlButton>

      {/* {numPages > 1 && (
        <ControlButton
          id="pdf-toggle-pagination"
          onMouseDown={() => dispatch(setPDFPaginated(!paginated))}
        >
          <TogglePaginationPDFIcon
            color={textPrimary}
            size="70%"
            reverse={paginated}
          />
        </ControlButton>
      )} */}
    </Container>
  );
};

export default PDFControls;

const Container = styled.div`
  display: flex;
  position: sticky;
  top: 0;
  left: 0;
  z-index: 1;
  justify-content: flex-end;
  padding: 8px;
  background-color: ${(props: IStyledProps) => props.theme.tertiary};
  box-shadow: 0px 4px 15px -3px rgb(0 0 0 / 40%);

  @media (max-width: 768px) {
    padding: 6px;
  }
`;

const ControlButton = styled(Button)`
  width: 30px;
  height: 30px;
  @media (max-width: 768px) {
    width: 25px;
    height: 25px;
  }
`;
