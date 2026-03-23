import { Controller, Get } from "@nestjs/common";
import { SessionService } from "./session.service";

@Controller()

export class SessionController {
    constructor(private sessionService: SessionService) { };
    
    @Get()
    logSession() {
        return this.sessionService.findAll();
    }
}