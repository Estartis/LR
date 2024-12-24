import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TaskModule } from './students/task.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: [
        '.env',
        '.env.production',
        '.env.development.local',
        '.env.development',
      ],
    }),
    TypeOrmModule.forRoot({
      retryAttempts: 1000,
      autoLoadEntities: true,
      type: 'postgres',
      url: process.env.POSTGRES,
      migrations: ['dist/src/migration/**/*.ts'],
      entities: ['dist/src/**/entities/**.entity.ts'],
      migrationsRun: true,
      synchronize: true,
      logging: true,
    }),
    TaskModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
