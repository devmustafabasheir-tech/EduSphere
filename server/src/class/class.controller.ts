import { Body, Controller, Get, Post, ValidationPipe } from "@nestjs/common";
import { ClassService } from "./class.service";
import { CreateClassDto } from "./dto/create-class.dto";

@Controller()

export class ClassController {
    constructor(private readonly classService: ClassService) { }

    @Post()

    create(
        @Body(new ValidationPipe({
            whitelist: true,
            forbidNonWhitelisted: true,
            transform: true,
        }))
        createClassDto: CreateClassDto
    ) {
        return this.classService.create(createClassDto);
    }

    @Get()
    logClass() {
        return this.classService.findAll();
    }
}