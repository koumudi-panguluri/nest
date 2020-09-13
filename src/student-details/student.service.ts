// author `Koumudi Panguluri`

import { Injectable } from "@nestjs/common";
import { StudentDetailsService } from "src/database/studentDetails.service";
import { Student } from "./student.model";

@Injectable()
export class StudentService {

  constructor(private studentDatabaseService : StudentDetailsService) { }

  addStudentDetails(data:Student) {
    this.studentDatabaseService.getStudentDetailsCollection().insertOne(data)
    console.log("data",data)
    return data;
  }
  async giveStudentDetails(studentId){
      console.log("compiled",Number(studentId))
      let promise = await this.studentDatabaseService.getStudentDetailsCollection().findOne({studentId})
    
      return await this.studentDatabaseService.getStudentDetailsCollection().findOne({"studentId":Number(studentId)},{
        projection:{
          _id : false
        }
      });
      

      
     
  }
}