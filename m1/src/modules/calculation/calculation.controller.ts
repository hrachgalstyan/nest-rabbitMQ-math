import {Body, Controller, Post} from '@nestjs/common';
import {CalculateDto} from "./dto/calculateDto";
import {CalculationService} from "./calculation.service";
import {Observable} from "rxjs";
import {LoggerService} from "../../common/logger/logger.service";

@Controller('calculation')
export class CalculationController {
    constructor(
        private readonly calculationService: CalculationService,
        private readonly loggerService: LoggerService
    ) {}

    @Post()
    async calculate(@Body() body:CalculateDto): Promise<Observable<number>> {
        this.loggerService.log('Receiving POST request')
        return this.calculationService.calculate(body);
    }
}
