import { Injectable } from '@nestjs/common'
import { PrismaService } from 'src/prisma/prisma.service'
import { FeedBackDto } from './dto'

@Injectable()
export class FeedbacksService {
  constructor(private prisma: PrismaService) {}

  async feedbacks({ email, name, text }: FeedBackDto) {
    console.log(email, name, text)

    const feedback = await this.prisma.feedBack.create({
      data: {
        name,
        email,
        text,
      },
    })

    return feedback
  }
}
