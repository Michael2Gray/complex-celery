/// <reference types="vite/client" />

interface ImportMetaEnv
  extends Readonly<Record<string, string | boolean | undefined>> {
  readonly VITE_ENABLE_MOCK_SERVICE_WORKER?: string;
  readonly VITE_REACT_QUERY_DEVTOOLS?: string;

  readonly VITE_API_BASE_URL?: string;
  readonly VITE_JCDECAUX_API_KEY?: string;
  readonly VITE_OPENWEATHER_API_KEY?: string;

  readonly VITE_CONFIG_URL?: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
