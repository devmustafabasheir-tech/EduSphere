import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { studentModule } from './student/student.module';
import { ClassModule } from './class/class.module';
import { AttendanceModule } from './attendance/attendance.module';
import { SessionMoudle } from './session/session.module';
import { SubjectModule } from './subject/subject.module';
import { TeacherModule } from './teacher/teacher.module';
import { LoggerStudent } from './student/logger.middleware';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule } from '@nestjs/config';
import { EnrollmentModule } from './enrollment/enrollment.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    MongooseModule.forRoot(process.env.MONGO_URL_LOCALHOST || 'mongodb://localhost:27017/EduSphere'),
    studentModule, ClassModule, AttendanceModule,
    SessionMoudle, SubjectModule, TeacherModule,
    EnrollmentModule,
  ],
  //controllers: [],
  //providers: [],
})

export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(LoggerStudent).forRoutes('student')
  }

}
