import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';

@Controller('movies')
export class MoviesController {
@Get()
getAll(){
    return 'all movies'
}

@Get('/:id')
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
 patch(@Param('id') movieId:string){
     return `edit movie with id= ${movieId}`
 }
}
