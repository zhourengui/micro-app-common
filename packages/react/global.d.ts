type DataListener = (data: Record<PropertyKey, unknown>) => void;

interface MicroApp {
  addGlobalDataListener: (
    listener: DataListener,
    autoTrigger?: boolean
  ) => void;

  removeGlobalDataListener: (listener: DataListener) => void;

  addDataListener: (listener: DataListener, autoTrigger?: boolean) => void;

  removeDataListener: (listener: DataListener) => void;
}

interface Window {
  unmount: VoidFunction;
  microApp: MicroApp;
}
