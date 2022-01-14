export const bootstrap = async () => {
  if (import.meta.env.VITE_ENABLE_MOCK_SERVICE_WORKER === 'true') {
    const { worker } = await import('./mocks/browser');

    worker.start();
  }
};
