import {Controller} from '@nestjs/common';
import {CalculationService} from "./calculation.service";
import {MessagePattern} from "@nestjs/microservices";
import {CalculateDto} from "./dto/calculateDto";
import {LoggerService} from "../../common/logger/logger.service";

@Controller('calculation')
export class CalculationController {
    constructor(
        private readonly calculationService: CalculationService,
        private readonly loggerService: LoggerService,
    ) {}

    @MessagePattern({ cmd: 'double' })
    async doubleValue(body: CalculateDto): Promise<number> {
        this.loggerService.log('Receiving event `double` from queue')
        return this.calculationService.calculate(body);
    }
}
