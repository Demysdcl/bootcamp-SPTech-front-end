import { Db, MongoClient } from "mongodb";
const config = {
  url:
    "mongodb+srv://god:dog@cluster0-dfsvs.mongodb.net/dgo?retryWrites=true&w=majority",
  dbName: "products",
};

type MongoConnection = {
  client: Db;
  closeConnectionFn: () => void;
  mongoConnection: MongoClient;
};

export default (): Promise<MongoConnection> =>
  new Promise((resolve, reject) => {
    MongoClient.connect(
      config.url,
      { useNewUrlParser: true },
      (err, mongoConnection) =>
        err
          ? reject(err)
          : resolve({
              client: mongoConnection.db(config.dbName),
              closeConnectionFn: () =>
                setTimeout(() => {
                  mongoConnection.close();
                }, 1000),
              mongoConnection,
            })
    );
  });
