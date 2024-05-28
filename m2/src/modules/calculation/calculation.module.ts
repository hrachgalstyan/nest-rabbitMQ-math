import { Module } from '@nestjs/common';
import { CalculationController } from "./calculation.controller";
import { CalculationService } from "./calculation.service";

@Module({
    imports: [],
    controllers: [CalculationController],
    providers: [CalculationService],
    exports: [CalculationService],
})
export class CalculationModule {}
