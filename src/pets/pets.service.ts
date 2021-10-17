import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreatePetDto } from './dto/create-pet.dto';
import { UpdatePetDto } from './dto/update-pet.dto';
import { Pet } from './entities/pet.entity';

@Injectable()
export class PetsService {
  constructor(
    @InjectRepository(Pet) private petsRepository: Repository<Pet>
  ){

  }
  async create(createPetDto: CreatePetDto) {
    // const newPet =  await this.petsRepository.create(createPetDto);
    // return newPet;
    return await this.petsRepository.save(createPetDto)
    // return await this.petsRepository.save(newPet)
  }

  async findAll(): Promise<Pet[]> {
    return await this.petsRepository.find();
  }

  findOne(id: number) {
    return `This action returns a #${id} pet`;
  }

  update(id: number, updatePetDto: UpdatePetDto) {
    return `This action updates a #${id} pet`;
  }

  remove(id: number) {
    return `This action removes a #${id} pet`;
  }
}
