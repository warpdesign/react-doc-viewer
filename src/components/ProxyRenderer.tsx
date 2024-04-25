import React, { FC, useCallback, useContext } from "react";
import styled, { DefaultTheme, ThemeContext, keyframes } from "styled-components";
import { setRendererRect } from "../store/actions";
import { DocRenderer, IConfig, IDocument, IStyledProps } from "../models";
import { getFileName } from "../utils/getFileName";
import { useDocumentLoader } from "../hooks/useDocumentLoader";
import { useWindowSize } from "../hooks/useWindowSize";
import { LinkButton } from "./common";
import { LoadingIcon } from "./icons";
import { LoadingTimeout } from "./LoadingTimout";
import { useTranslation } from "../hooks/useTranslation";
import { IMainState } from "../store/mainStateReducer";

type ContentsProps = {
  documents: IDocument[];
  documentLoading: boolean | undefined;
  config: IConfig | undefined;
  currentDocument: IDocument | undefined;
  fileName: string;
  CurrentRenderer: DocRenderer | null | undefined;
  state: IMainState;
  t: (key: "noRendererMessage" | "documentNavInfo" | "downloadButtonLabel" | "brokenFile" | "msgPluginRecipients" | "msgPluginSender" | "pdfPluginLoading" | "pdfPluginPageNumber", variables?: Record<string, string | number>) => string
};

  const Contents: React.FC<ContentsProps> = ({documents, documentLoading, config, currentDocument, fileName, CurrentRenderer, state, t}) => {
    const {
      textTertiary,
    } = useContext(ThemeContext) as DefaultTheme

    if (!documents.length) {
      return <div id="no-documents"></div>;
    } else if (documentLoading) {
      if (config && config?.loadingRenderer?.overrideComponent) {
        const OverrideComponent = config.loadingRenderer.overrideComponent;
        return (
          <LoadingTimeout>
            <OverrideComponent document={currentDocument} fileName={fileName} />
          </LoadingTimeout>
        );
      }

      return (
        <LoadingTimeout>
          <LoadingContainer
            id="loading-renderer"
            data-testid="loading-renderer"
          >
            <LoadingIconContainer>
              <LoadingIcon color={textTertiary} size={40} />
            </LoadingIconContainer>
          </LoadingContainer>
        </LoadingTimeout>
      );
    } else {
      if (CurrentRenderer) {
        return <CurrentRenderer mainState={state} />;
      } else {
        // we get here if:
        // - there was a problem fetching the file type (access denied, cors errors,..)
        // - there is no rednderer for current file type
        // in *both* cases we want to show the no Renderer component
        if (config && config?.noRenderer?.overrideComponent) {
          const OverrideComponent = config.noRenderer.overrideComponent;
          return (
            <OverrideComponent document={currentDocument} fileName={fileName} />
          );
        }

        return (
          <div id="no-renderer" data-testid="no-renderer">
            {t("noRendererMessage", {
              fileType: currentDocument?.fileType ?? "",
            })}
            <DownloadButton
              id="no-renderer-download"
              href={currentDocument?.uri}
              download={currentDocument?.uri}
            >
              {t("downloadButtonLabel")}
            </DownloadButton>
          </div>
        );
      }
    }
  };

export const ProxyRenderer: FC = () => {
  const { state, dispatch, CurrentRenderer } = useDocumentLoader();
  const { documents, documentLoading, currentDocument, config } = state;
  const size = useWindowSize();
  const { t } = useTranslation();

  const containerRef = useCallback(
    (node: HTMLDivElement) => {
      node && dispatch(setRendererRect(node?.getBoundingClientRect()));
    },
    [size],
  );

  const fileName = getFileName(
    currentDocument,
    config?.header?.retainURLParams || false,
  );

  return (
    <Container
      id="proxy-renderer"
      data-testid="proxy-renderer"
      ref={containerRef}
    >
      <Contents {...{state, documents, documentLoading, config, currentDocument, fileName, CurrentRenderer, t}} />
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex: 1;
  overflow-y: auto;
  max-width: 100%;
`;

const LoadingContainer = styled.div`
  display: flex;
  flex: 1;
  height: 75px;
  align-items: center;
  justify-content: center;
`;

const spinAnim = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

const LoadingIconContainer = styled.div`
  animation-name: ${spinAnim};
  animation-duration: 4s;
  animation-timing-function: linear;
  animation-iteration-count: infinite;
`;

const DownloadButton = styled(LinkButton)`
  width: 130px;
  height: 30px;
  background-color: ${(props: IStyledProps) => props.theme.primary};
  @media (max-width: 768px) {
    width: 125px;
    height: 25px;
  }
`;
