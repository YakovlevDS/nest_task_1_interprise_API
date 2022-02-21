import { MoviesService } from './movies.service';
import { Body, Controller, Delete, Get, NotFoundException, Param, Patch, Post, Query } from '@nestjs/common';
import { Movie } from './entities/movie.entities';
import { NotFoundError } from 'rxjs';

@Controller('movies')
export class MoviesController {
    constructor(private readonly moviesService : MoviesService){

    }
    
@Get()
getAll(): Movie[] {
    return this.moviesService.getAll();
}
// @Get('search')
//  search(@Query('year') searchingYear:string ){
//   return `We search movie production after ${searchingYear} year`
//  }
@Get(':id')
getOne(@Param('id') movieId:string): Movie {
    return this.moviesService.getOne(movieId);
}

@Post()
create(@Body() movieData){
    // console.log('movieData = ', movieData);
    
    return this.moviesService.create(movieData)
}
 @Delete(':id')
 remove(@Param('id') movieId:string){
     return this.moviesService.remove(movieId);
 }
 @Patch(':id')
 patch(@Param('id') movieId:string, @Body() updateData){
     return this.moviesService.patch(movieId,updateData)
 }
 
}
