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
    });

    it('should return  404 error', () => {
      try {
        service.getOne(9999);
      } catch (e) {
        expect(e).toBeInstanceOf(NotFoundException);
      }
    });
  });

  describe('Testing function remove', () => {
    it('should removed movie', () => {
      service.create({
        title: 'Cards, money...!!',
        year: 1998,
        genres: ['Test genres'],
      });
      // console.log(service.getAll());
      const allMovie = service.getAll().length;
      service.remove(1);
      const afterRemove = service.getAll().length;
      expect(afterRemove).toBeLessThan(allMovie);
    });

    it('should return  404 error', () => {
      try {
        service.remove(9999);
      } catch (e) {
        expect(e).toBeInstanceOf(NotFoundException);
      }
    });
  });


  describe('Testing function create', () => {
    it('should created movie', () => {
      const beforeCreateMovie = service.getAll().length;
      service.create({
        title: 'Cards, money...!!',
        year: 1998,
        genres: ['Test genres'],
      });
      const afterCreateMovie = service.getAll().length;
      // console.log(beforeCreateMovie, afterCreateMovie);
      
      expect(beforeCreateMovie).toBeLessThan(afterCreateMovie);
  });
});



});
