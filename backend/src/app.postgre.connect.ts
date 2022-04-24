import "reflect-metadata"
import { DataSource } from "typeorm"
import * as Config from "./config"
import * as dotenv from "dotenv"
import { EnvObjectOption } from "./types/config"
import { User } from "./entity/user"
dotenv.config()

const database : EnvObjectOption = Config.database.postgre
const env : string               = process.env.NODE_ENV || 'development'

export const AppDataSource = new DataSource({
    
    type: database[env].type,
    host: database[env].host,
    port: database[env].port,
    username: database[env].username,
    password: database[env].password,
    database: database[env].database_name,
    synchronize: true,
    logging: true,
    entities: [ User ],
    subscribers: [],
    migrations: [],
})

// * `POSTGRES_USER` the default value is **postgres**
// * `POSTGRES_PASSWORD` the default value is **admin123**
// * `PGADMIN_PORT` the default value is **5050**
// * `PGADMIN_DEFAULT_EMAIL` the default value is **pgadmin4@pgadmin.org**
// * `PGADMIN_DEFAULT_PASSWORD` the default value is **admin**



/**
 * hàm `myConnection` để file thực thi app.js hoặc bin/www thực thi connection
 */
export default {
    connectDB : () => {
        const database : EnvObjectOption = Config.database.postgre
        const env : string = process.env.NODE_ENV || 'development'
        // console.log(Config.database.mongoURI)
        console.log(`Postgre connecting ${database[env as keyof EnvObjectOption] || ''}`)
        /// connect mongodb
        AppDataSource.initialize()
        .then(async () => {
            // here you can start to work with your database
            console.log(`Postgre connected ${database[env as keyof EnvObjectOption] || ''}`)
            // const user = new User()
            // user.email = "hung@gmail.com"
            // user.password = "Saw"
            // await user.save()
            const allUsers = await User.find()
            console.log(allUsers)
        })
        .catch((error) => console.log(error))
    }
}