import * as dotenv from 'dotenv';
dotenv.config();

// environment
const NODE_ENV: string = process.env.NODE_ENV || 'development';

// app
const PORT: number = +process.env.PORT || 14047;

export { NODE_ENV, PORT };
