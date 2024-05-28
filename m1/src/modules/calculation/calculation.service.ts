import {Inject, Injectable, Logger} from '@nestjs/common';
import {CalculateDto} from "./dto/calculateDto";
import {ClientProxy} from "@nestjs/microservices";
import {Observable} from "rxjs";
import {LoggerService} from "../../common/logger/logger.service";

@Injectable()
export class CalculationService {
    constructor(
        @Inject('CALCULATION_SERVICE') private client: ClientProxy,
        private readonly loggerService: LoggerService
    ) {}

    async calculate(body: CalculateDto): Promise<Observable<number>> {
        this.loggerService.log('Adding event `double` to queue')
        return this.client.send(
            { cmd: 'double' },
            body,
        );
    }
}
