import { PORT } from '@environments';
import { Logger } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // const connection = AppModule.prototype['dataSource'];
  // const isInitialized = connection;

  // isInitialized
  //   ? Logger.log(`🌨️ Baza danych podłączona`, 'TypeORM', false)
  //   : Logger.error(`❌ Błąd połączenia bazy danych`, '', 'TypeORM', false);

  await app.listen(PORT);
}
bootstrap().catch((e) => {
  Logger.error(`❌  Error starting server, ${e}`, '', 'Bootstrap', false);
  throw e;
});
