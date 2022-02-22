import { NotFoundException } from '@nestjs/common';
import { Test, TestingModule } from '@nestjs/testing';
import { MoviesService } from './movies.service';

describe('MoviesService', () => {
  let service: MoviesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MoviesService],
    }).compile();

    service = module.get<MoviesService>(MoviesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  describe('Testing function getAll', () => {
    it('should return array', () => {
      const result = service.getAll();
      expect(result).toBeInstanceOf(Array);
    });
  });
  describe('Testing function getOne', () => {
    it('should return  movie', () => {
      service.create({
        title: 'Cards, money...!!',
        year: 1998,
        genres: ['Test genres'],
      });
      const movie = service.getOne(1);
      expect(movie).toBeDefined;
      expect(movie.id).toEqual(1);
    });

    it('should return  404 error', () => {
      try {
        const movie = service.getOne(9999);
      } catch (e) {
        expect(e).toBeInstanceOf(NotFoundException);
      }
    });
  });
});
