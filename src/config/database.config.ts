import { TypeOrmModuleOptions } from "@nestjs/typeorm";

export const typeOrmConfig: TypeOrmModuleOptions = {
    type: 'postgres',
  host: 'localhost',
  port: 5894,
  username: 'postgres',
  password: 'abdulhai',
  database: 'gql',
  logging: false,
  entities: [
    "dist/**/*.entity{.ts,.js}"
  ],
  synchronize: true,
}