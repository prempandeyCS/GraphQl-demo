import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { TypeOrmModule } from '@nestjs/typeorm';
import { join } from 'path';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { Pet } from './pets/pet.entity';
import { PetsModule } from './pets/pets.module';
import { OwnersModule } from './owners/owners.module';
import { Owner } from './owners/entities/owner.entity';

@Module({
  imports: [GraphQLModule.forRoot({
    autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
  }),    TypeOrmModule.forRoot({
    type: 'mysql',
    host: 'localhost',
    port: 3306,
    username: 'prem',
    password: "&k&qq'F(S]56W2jq",
    database: 'graphql',
    entities: [Pet, Owner],
    synchronize: true,
  }),PetsModule, OwnersModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
