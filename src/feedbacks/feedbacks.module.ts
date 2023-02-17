import { Module } from '@nestjs/common'
import { PrismaModule } from 'src/prisma/prisma.module'
import { FeedbacksController } from './feedbacks.controller'
import { FeedbacksService } from './feedbacks.service'

@Module({
  imports: [PrismaModule],
  controllers: [FeedbacksController],
  providers: [FeedbacksService],
})
export class FeedbacksModule {}
