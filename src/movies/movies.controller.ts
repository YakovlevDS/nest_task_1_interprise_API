import { MoviesService } from './movies.service';
import { Body, Controller, Delete, Get, NotFoundException, Param, Patch, Post, Query } from '@nestjs/common';
import { Movie } from './entities/movie.entities';
import { NotFoundError } from 'rxjs';
import { CreateMovieDto } from './dto/create-movie.dto';

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
getOne(@Param('id') movieId:number): Movie {
    return this.moviesService.getOne(movieId);
}

@Post()
create(@Body() movieData:CreateMovieDto){
    // console.log('movieData = ', movieData);
    
    return this.moviesService.create(movieData)
}
 @Delete(':id')
 remove(@Param('id') movieId:number){
     return this.moviesService.remove(movieId);
 }
 @Patch(':id')
 patch(@Param('id') movieId:number, @Body() updateData){
     return this.moviesService.patch(movieId,updateData)
 }
 
}
