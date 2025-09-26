export {};

declare global {
  interface Window {
    api: {
      getServerPort: () => Promise<number>;
    };
  }
}


