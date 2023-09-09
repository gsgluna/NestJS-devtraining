import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { customersModule } from './customers/customers.module';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [customersModule, TypeOrmModule.forRoot({

    type: 'postgres',
    host: 'postgresql://postgres:tsA9ZP9noKeRlmYJnFUr@containers-us-west-165.railway.app:6422/railway',
    port: 6422,
    username: 'postgres',
    password: 'tsA9ZP9noKeRlmYJnFUr',
    database: 'railway',
    autoLoadEntities: true,
    synchronize: true,

  })],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
