import { Article } from '@/database/entities';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ArticlesResolver } from './articles.resolver';
import { ArticlesService } from './articles.service';

@Module({
  imports: [TypeOrmModule.forFeature([Article])],
  providers: [ArticlesResolver, ArticlesService],
})
export class ArticlesModule {}
