import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { CreatePetDto } from './dto/create-pet.dto';
import { Pet } from './entities/pet.entity';
import { PetsService } from './pets.service';

@Resolver(of => Pet)
export class PetsResolver {
    constructor(
     private petsService: PetsService   
    ){}

    @Query(returns => [Pet])
    pets(): Promise<Pet[]>{
        return this.petsService.findAll();
    }
    
    @Mutation(returns => Pet)
    createPet(@Args('createPetDto') createPetDto: CreatePetDto): Promise<Pet>{
        return this.petsService.create(createPetDto)
    }
}
