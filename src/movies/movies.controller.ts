import { MoviesService } from './movies.service';
import { Body, Controller, Delete, Get, Param, Patch, Post, Query } from '@nestjs/common';

@Controller('movies')
export class MoviesController {
    constructor(readonly moviesService : MoviesService){
        
    }
    
@Get()
getAll(){
    return 'all movies'
}
@Get('search')
 search(@Query('year') searchingYear:string ){
  return `We search movie production after ${searchingYear} year`
 }
@Get(':id')
getOne(@Param('id') id:string){
    return `one movie c id= ${id}`
}

@Post()
create(@Body() movieData){
    // console.log('movieData = ', movieData);
    
    return movieData
}
 @Delete(':id')
 remove(@Param('id') movieId:string){
     return `delete movie with id= ${movieId}`;
 }
 @Patch(':id')
 patch(@Param('id') movieId:string, @Body() updateData){
     return {
      updatedMovie:movieId,
      ...updateData,   
     }
 }
 
}
