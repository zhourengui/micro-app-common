import React, { useEffect } from "react";

interface MicroAppContextProviderProps {
  children: React.ReactNode;
  globalDataListener: (
    listener: <T>(data: T) => void,
    autoTrigger?: boolean
  ) => void;

  dataListener: (listener: <T>(data: T) => void, autoTrigger?: boolean) => void;
}

export const MicroAppContextProvider: React.FC<MicroAppContextProviderProps> = (
  props
) => {
  const { children, globalDataListener, dataListener } = props;

  useEffect(() => {
    window.microApp?.addGlobalDataListener?.(globalDataListener, true);

    return () => {
      window.microApp?.removeGlobalDataListener?.(globalDataListener);
    };
  }, []);

  useEffect(() => {
    window?.microApp?.addDataListener?.(dataListener, true);

    return () => {
      window?.microApp?.removeDataListener?.(dataListener);
    };
  }, []);

  return children;
};
