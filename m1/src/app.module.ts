import { Module } from '@nestjs/common';
import { CalculationModule } from "./modules/calculation/calculation.module";
import { LoggerModule } from "./common/logger/logger.module";

@Module({
  imports: [CalculationModule, LoggerModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
