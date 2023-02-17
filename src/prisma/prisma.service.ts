import { Injectable } from '@nestjs/common'
import { ConfigService } from '@nestjs/config/dist'
import { PrismaClient } from '@prisma/client'
import * as dotenv from 'dotenv'
dotenv.config()

@Injectable()
export class PrismaService extends PrismaClient {
  constructor(config: ConfigService) {
    super({
      datasources: {
        db: {
          url: 'postgres://admin:gTgW9fcjyGfiEYKHCbcEcTjivOqfl9AH@dpg-cfnkhh2rrk0eqlplscd0-a.frankfurt-postgres.render.com:5432/test_db_rtyp',
        },
      },
    })
  }
}
