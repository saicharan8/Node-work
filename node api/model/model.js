var mongoose=require('mongoose');
var movieSchema=new mongoose.Schema({            //create a schema for the movie
    code:String,
    moviename:String,
    release_date:String,
    rating:String,
    language:String
})
var Movie=module.exports=mongoose.model('Movie',movieSchema);

module.exports.getMovies=function(callback){
    Movie.find(callback)
}

module.exports.addMovie=function(newMovie,callback){
    Movie.create(newMovie,callback)
}

module.exports.updateMovie=function(id,newMovie,callback){
    Movie.findByIdAndUpdate(id,newMovie,callback)
}

module.exports.deleteMovie=function(id,callback){
    Movie.findByIdAndRemove(id,callback)
}

module.exports.getMovie=function(id,callback){
    Movie.findById(id,callback)
}
