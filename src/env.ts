import { config } from "dotenv";
import path from "path";

export const ENV = process.env.NODE_ENV || "development";
export const PATH = path.join(__dirname, `../.env.${ENV}`);

config({ path: PATH });

export const PORT = process.env.PORT || 3000;
export const HOST = process.env.HOST || "localhost";

export const SECRET = process.env.SECRET || "My secret value";
