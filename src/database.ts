import { createConnection } from "typeorm";

export const databaseConfig = async () => {
  const entities = [__dirname + "/entity/**/*.*"];
  await createConnection({
    type: "mysql",
    host: "testers-club.cvbkimjpoyqn.ap-northeast-2.rds.amazonaws.com",
    port: 3306,
    username: "admin",
    password: "teFkHDELfBKAUBHh4fo2",
    database: "testers_club",
    entities: entities,
    synchronize: true,
  });
};
