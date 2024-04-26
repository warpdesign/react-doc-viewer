import React, {
  FC,
  PropsWithChildren,
  useContext,
  useEffect,
  useState,
} from "react";
import { DocViewerContext } from "../store/DocViewerProvider";

export const LoadingTimeout: FC<PropsWithChildren> = ({ children }) => {
  const { state } = useContext(DocViewerContext);
  const { config } = state;
  const [shouldLoadingRender, setShouldLoadingRender] = useState(
    config?.loadingRenderer?.showLoadingTimeout === false,
  );

  useEffect(() => {
    const timeoutRef = setTimeout(
      () => {
        setShouldLoadingRender(true);
      },
      typeof config?.loadingRenderer?.showLoadingTimeout === "number"
        ? config.loadingRenderer.showLoadingTimeout
        : 200,
    );

    return () => clearTimeout(timeoutRef)
  }, [config?.loadingRenderer?.showLoadingTimeout])

  // Simple set the loading components'visibility to hidden and don't hide them:
  // this prevents a reflow when the loader appears.
  return <div style={{
    visibility: !shouldLoadingRender ? 'hidden' : 'visible',
    display: 'flex',
    alignContent: 'center'
  }}>{children}</div>
}
