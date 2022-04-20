import { DataSource } from "typeorm"
import * as Config from "./config"
import * as dotenv from "dotenv"
import { EnvObjectOption } from "./types/config"
dotenv.config()



export const AppDataSource = new DataSource({
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "test",
    password: "test",
    database: "test",
    synchronize: true,
    logging: true,
    entities: [ ],
    subscribers: [],
    migrations: [],
})