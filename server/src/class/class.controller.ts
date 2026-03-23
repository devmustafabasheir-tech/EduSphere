import { Controller, Get } from "@nestjs/common";
import { ClassService } from "./class.service";
@Controller()

export class ClassController {
    constructor(private classService: ClassService) { }

    @Get()
    logClass() {
        return this.classService.findAll();
    }
}