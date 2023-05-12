import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { AcctType } from './models/acct-type.model';

@Injectable()
export class AcctTypeService {
  constructor(private prisma: PrismaService) {}

  async findAll(): Promise<AcctType[]> {
    return this.prisma.acctType.findMany({
      include: {
        acctCategories: true,
      },
    });
  }
}