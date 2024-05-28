import { Injectable } from '@nestjs/common';
import { CalculateDto } from "./dto/calculateDto";
import { LoggerService } from "../../common/logger/logger.service";

@Injectable()
export class CalculationService {
    constructor(private readonly loggerService: LoggerService) {
    }

    async calculate(body: CalculateDto): Promise<number> {
        return new Promise((resolve, reject) => {
            try {
                setTimeout(() => {
                    this.loggerService.log('Returning processed value')
                    return resolve(body.number * 2)
                }, 5000)
            } catch (e) {
                this.loggerService.log('Something went wrong during calculation value')
                return reject(e)
            }
        });
    }
}
