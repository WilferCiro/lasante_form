import { SqlServerConnectionOptions } from 'typeorm/driver/sqlserver/SqlServerConnectionOptions';

const config: SqlServerConnectionOptions = {
  type: 'mssql',
  host: 'lasante.mssql.somee.com',
  port: 1433,
  username: 'wilcirom_SQLLogin_1',
  password: 'cmkmmkqr1b',
  database: 'lasante',
  entities: [__dirname + '/../**/*.entity{.ts,.js}'],
  synchronize: false,
  options: { encrypt: false },
};

export default config;
