import { IsInt, IsPositive, IsString, Min, MinLength } from "class-validator";

export class CreatePokemonDto {

    //isInt, IsPositive, min1    
    @IsInt()
    @IsPositive()
    @Min(1)
    no: number;
    // is String, Min Lenght
    @IsString()
    @MinLength(1)
    name : string; 

}
