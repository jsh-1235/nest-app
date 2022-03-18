export default () => ({
  port: parseInt(process.env.PORT, 10) || 3000,
  database: {
    host: process.env.DATABASE_HOST,
    port: parseInt(process.env.DATABASE_PORT, 10) || 27017,
    username: process.env.DATABASE_USERNAME,
    password: process.env.DATABASE_PASSWORD,
    // url: `mongodb://${process.env.DATABASE_HOST}:${
    //   parseInt(process.env.DATABASE_PORT, 10) || 27017
    // }/${process.env.DATABASE_NAME}`,
    // url: `mongodb+srv://${process.env.DATABASE_USERNAME}:${process.env.DATABASE_PASSWORD}@nest.hsmd9.mongodb.net/test`,
    url:
      process.env.NODE_ENV === 'production'
        ? `mongodb+srv://${process.env.DATABASE_USERNAME}:${process.env.DATABASE_PASSWORD}@nest.hsmd9.mongodb.net/test`
        : `mongodb://${process.env.DATABASE_HOST}:${
            parseInt(process.env.DATABASE_PORT, 10) || 27017
          }/${process.env.DATABASE_NAME}`,
  },
});
