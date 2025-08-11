import { Inject, Injectable } from '@nestjs/common';
import { CreateQuestionDto } from './dto/create-question.dto';
import { UpdateQuestionDto } from './dto/update-question.dto';
import { PrismaService } from 'src/database/prisma.service';

@Injectable()
export class QuestionsService {
  @Inject()
  private readonly prima: PrismaService

  async create(createQuestionDto: CreateQuestionDto, req: any) {
    return await this.prima.questions.create({
      data: {...createQuestionDto, userId: req.sub.sub}
    })
  }

  async findAll() {
    return await this.prima.questions.findMany()
  }

  async findOne(id: number) {
    return await this.prima.questions.findUnique({where: {id}})
  }

  async update(id: number, updateQuestionDto: UpdateQuestionDto) {
    return await this.prima.questions.update({
      where: {id},
      data: updateQuestionDto
    })
  }

  remove(id: number) {
    return this.prima.questions.delete({where: {id}})
  }
}
