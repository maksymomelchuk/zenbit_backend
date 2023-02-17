import { Module } from '@nestjs/common'
import { ConfigModule } from '@nestjs/config'
import { FeedbacksModule } from './feedbacks/feedbacks.module'
import { PrismaModule } from './prisma/prisma.module'

@Module({
  imports: [
    FeedbacksModule,
    PrismaModule,
    ConfigModule.forRoot({
      isGlobal: true,
    }),
  ],
})
export class AppModule {}
