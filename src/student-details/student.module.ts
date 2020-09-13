import { Module } from '@nestjs/common';
import { StudentController } from './student.controller';
import { StudentService } from './student.service';
import { StudentDetailsService } from 'src/database/studentDetails.service';



@Module({
  imports: [],
  controllers: [StudentController],
  providers: [StudentService, StudentDetailsService],
})
export class StudentModule {}
