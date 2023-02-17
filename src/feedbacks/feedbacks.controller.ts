import { Controller } from '@nestjs/common'
import { Body, Post } from '@nestjs/common/decorators'
import { FeedBackDto } from './dto'
import { FeedbacksService } from './feedbacks.service'

@Controller('api')
export class FeedbacksController {
  constructor(private feedbacksService: FeedbacksService) {}

  @Post('feedbacks')
  feedbacks(@Body() dto: FeedBackDto) {
    return this.feedbacksService.feedbacks(dto)
  }
}
