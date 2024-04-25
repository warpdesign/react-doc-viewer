import React, { Dispatch, FC, PropsWithChildren } from "react";
import { PDFActions } from "./actions";
import { IPDFState } from "./reducer";
declare const PDFContext: React.Context<{
    state: IPDFState;
    dispatch: Dispatch<PDFActions>;
}>;
declare const PDFProvider: FC<PropsWithChildren<{}>>;
export { PDFContext, PDFProvider };
