declare global {
  namespace NodeJS {
    interface ProcessEnv {
      NODE_ENV?: "development" | "test" | "production";
      PORT?: string;
      HOST?: string;
    }
  }
}

export {};
