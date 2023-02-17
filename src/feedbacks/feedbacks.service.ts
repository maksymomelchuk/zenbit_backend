import { Injectable } from '@nestjs/common'
import { PrismaService } from 'src/prisma/prisma.service'
import { FeedBackDto } from './dto'

@Injectable()
export class FeedbacksService {
  constructor(private prisma: PrismaService) {}

  async postFeedback({ email, name, text }: FeedBackDto) {
    const feedback = await this.prisma.feedBack.create({
      data: {
        name,
        email,
        text,
      },
    })

    return feedback
  }

  async getFeedback() {
    return this.prisma.feedBack.findMany()
  }
}
