import { IsInt, IsNotEmpty } from "class-validator";

export class CalculateDto {
    @IsInt()
    @IsNotEmpty()
    number: number
}