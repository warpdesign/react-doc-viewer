import React, {
  createContext,
  Dispatch,
  FC,
  PropsWithChildren,
  useContext,
  useReducer,
} from "react";
import { IMainState } from "../../../store/mainStateReducer";
import { PDFActions } from "./actions";
import {
  initialPDFState,
  IPDFState,
  PDFStateReducer,
  reducer,
} from "./reducer";
import { DocViewerContext } from "../../../store/DocViewerProvider";

const PDFContext = createContext<{
  state: IPDFState;
  dispatch: Dispatch<PDFActions>;
}>({ state: initialPDFState, dispatch: () => null });

const PDFProvider: FC<PropsWithChildren<{ }>> = ({
  children,
}) => {
  const { state: mainState } = useContext(DocViewerContext);
  const [state, dispatch] = useReducer<PDFStateReducer>(reducer, {
    ...initialPDFState,
    defaultZoomLevel:
      mainState.config?.pdfZoom?.defaultZoom ??
      initialPDFState.defaultZoomLevel,
    zoomLevel:
      mainState.config?.pdfZoom?.defaultZoom ?? initialPDFState.zoomLevel,
    zoomJump: mainState.config?.pdfZoom?.zoomJump ?? initialPDFState.zoomJump,
    paginated: mainState.config?.pdfVerticalScrollByDefault
      ? false
      : initialPDFState.paginated,
  });

  return (
    <PDFContext.Provider value={{ state, dispatch }}>
      {children}
    </PDFContext.Provider>
  );
};

export { PDFContext, PDFProvider };
