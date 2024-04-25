import React, { Dispatch } from "react";
import { DocViewerProps } from "../DocViewer";
import { MainStateActions } from "./actions";
import { IMainState } from "./mainStateReducer";
declare const DocViewerContext: React.Context<{
    state: IMainState;
    dispatch: Dispatch<MainStateActions>;
}>;
declare const DocViewerProvider: React.ForwardRefExoticComponent<DocViewerProps & {
    children?: React.ReactNode;
} & React.RefAttributes<any>>;
export { DocViewerContext, DocViewerProvider };
