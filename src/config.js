const configuredApiUrl = import.meta.env.VITE_API_BASE_URL?.replace(/\/$/, "");

export const API_BASE_URL = configuredApiUrl || (import.meta.env.DEV ? "http://localhost:5000" : "");
export const MESSAGES_PASSWORD = import.meta.env.VITE_MESSAGES_PASSWORD || "";
