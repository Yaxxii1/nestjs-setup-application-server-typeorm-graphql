import {
  DOMAIN,
  END_POINT,
  NODE_ENV,
  PORT,
  PRIMARY_COLOR,
} from '@environments';
import { Logger } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as chalk from 'chalk';

import '@validations';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // const connection = AppModule.prototype['dataSource'];
  // const isInitialized = connection;

  // isInitialized
  //   ? Logger.log(`🌨️ Baza danych podłączona`, 'TypeORM', false)
  //   : Logger.error(`❌ Błąd połączenia bazy danych`, '', 'TypeORM', false);

  await app.listen(PORT);

  NODE_ENV !== 'production'
    ? Logger.log(
        `🚀  Serwer gotowy pod adresem http://${DOMAIN}:${chalk
          .hex(PRIMARY_COLOR)
          .bold(PORT.toString())}/${END_POINT}`,
        'Bootstrap',
        false,
      )
    : Logger.log(
        `🚀  Serwer nasłuchuje na porcie ${chalk
          .hex(PRIMARY_COLOR)
          .bold(PORT.toString())}`,
        'Bootstrap',
        false,
      );
}
bootstrap().catch((e) => {
  Logger.error(`❌  Error starting server, ${e}`, '', 'Bootstrap', false);
  throw e;
});
