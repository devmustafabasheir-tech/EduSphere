import { Injectable, NestMiddleware } from "@nestjs/common";
import { Response, Request, NextFunction } from "express"


@Injectable()
export class LoggerStudent {
    use(req: Request, res: Response, next: NextFunction){
        console.log("request.....")
        next();
    }
}