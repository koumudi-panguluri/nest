// author `Koumudi Panguluri`
import { Injectable, OnModuleInit } from "@nestjs/common";
import { Collection, Db, MongoClient } from "mongodb";

@Injectable()
export class StudentDetailsService implements OnModuleInit{
  StudentMongoClient : MongoClient;
  StudentDb : Db;
  
  constructor(){}
  async onModuleInit(): Promise<void> {
    try{
      this.StudentMongoClient = await MongoClient.connect("mongodb+srv://ClientName:ClientPassword@cluster0.kgbtq.mongodb.net/student?retryWrites=true&w=majority");
      this.StudentDb = this.StudentMongoClient.db("student");
      console.log("Connection to student database successful");
    }
    catch(err){
      console.log("error occured",err)
    }
  }

  getStudentDetailsCollection() : Collection{
    return this.StudentDb.collection("studentDetails")
  }

} 
