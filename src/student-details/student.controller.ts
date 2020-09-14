// author `Koumudi Panguluri`
import { Controller, Post, Body, Get, Param } from "@nestjs/common";
import { StudentService } from "./student.service";

@Controller("student")
export class StudentController{

  constructor(private studentService: StudentService){}
  @Post("add")
  async postStudentDetails(@Body() data:any){
    try{
      const studentDetails = await this.studentService.addStudentDetails(data);
      console.log(data)
      return{
        status : "Ok",
        message : "Student details added successfully",
        details : studentDetails
      }
    }
    catch(err){
      console.log("error occured",err) 
    }
  }

  @Get("get/:studentId")
  async getStudentDetails(@Param("studentId") studentId: number){
    console.log("studentId",studentId)
    try{
      const details = await this.studentService.giveStudentDetails(studentId);
      console.log("details of student get",details)
      return {
        status : "Ok",
        message : "Student details obtained successfully",
        details : details
      }
    }
    catch(err){
      console.log("error occured",err)
    }
  }

}