import { Body, Controller, Get, Post, ValidationPipe } from "@nestjs/common";
import { SessionService } from "./session.service";
import { CreateSessionDto } from "./dto/create-session.dto";

@Controller()

export class SessionController {
    constructor(private readonly sessionService: SessionService) { };

    @Post()
    create(
        @Body(new ValidationPipe({
            whitelist: true,
            forbidNonWhitelisted: true,
            transform: true,
        }))
        createSessionDto: CreateSessionDto
    ) {
        return this.sessionService.create(createSessionDto);
    }

    @Get()
    logSession() {
        return this.sessionService.findAll();
    }
}