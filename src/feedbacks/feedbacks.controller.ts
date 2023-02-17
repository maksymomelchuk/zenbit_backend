import { Controller } from '@nestjs/common'
import { Body, Get, Post } from '@nestjs/common/decorators'
import { FeedBackDto } from './dto'
import { FeedbacksService } from './feedbacks.service'

@Controller('api')
export class FeedbacksController {
  constructor(private feedbacksService: FeedbacksService) {}

  @Post('feedbacks')
  postFeedback(@Body() dto: FeedBackDto) {
    return this.feedbacksService.postFeedback(dto)
  }

  @Get('feedbacks')
  getFeedback() {
    return this.feedbacksService.getFeedback()
  }
}
