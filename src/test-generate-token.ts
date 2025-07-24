import "dotenv/config";
import jwt from "jsonwebtoken";

const secret = process.env.MASTRA_JWT_SECRET!;

const token = jwt.sign({ sub: "_test-mastra-auth-jwt-server" }, secret);

console.log(token);
