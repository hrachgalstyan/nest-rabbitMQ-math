import { Module } from '@nestjs/common';
import { CalculationController } from "./calculation.controller";
import { CalculationService } from "./calculation.service";
import {ClientsModule, Transport} from "@nestjs/microservices";

@Module({
    imports: [
        ClientsModule.register([
            {
                name: 'CALCULATION_SERVICE',
                transport: Transport.RMQ,
                options: {
                    urls: ['amqp://localhost:5672'],
                    queue: 'calculations_queue',
                    queueOptions: {
                      durable: false,
                    },
                },
            },
        ])
    ],
    controllers: [CalculationController],
    providers: [CalculationService],
    exports: [CalculationService],
})
export class CalculationModule {}
