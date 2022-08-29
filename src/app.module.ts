import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DataSource, getMetadataArgsStorage } from 'typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mongodb',
      entities: getMetadataArgsStorage().tables.map((tbl) => tbl.target),
      url: 'mongodb+srv://admin:o6MOBgL4bf6aApw9@nestjs-v7.qab1bdd.mongodb.net/nestjs-v9?retryWrites=true&w=majority',
      autoLoadEntities: true,
      // synchronize: true,
      useNewUrlParser: true,
      logging: true,
      useUnifiedTopology: true,
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
  constructor(private dataSource: DataSource) {}
}
