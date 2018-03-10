var express=require('express');
var Movie=require('../model/model.js')
var router=express.Router();

router.get('/', async function(req,res){                 //get functionality
   await Movie.getMovies((err,movies)=>{
    if(err) throw err;
    res.json(movies);
    //console.log(movies);
    })
})
router.post('/', function(req, res){                     //post functionality
    var newMovie = {
        code:req.body.code,
        moviename: req.body.moviename,
        release_date : req.body.release_date,
        rating : req.body.rating,
        language : req.body.language
        
    }
     Movie.addMovie(newMovie,function(err,movie){
         if(err) throw err;
         res.json(movie);
        console.log(movie);
         
     });
 })

 router.put('/:_id', function(req, res){                    //put functionality
    var update = {
        code:req.body.code,
        moviename: req.body.moviename,
        release_date : req.body.release_date,
        rating : req.body.rating,
        language : req.body.language
    }
     Movie.updateMovie(req.params._id,update,function(err,movie){
         if(err) throw err;
         res.json(movie);
         console.log('movie updated');
     });
 })

 router.delete('/:_id', function(req, res){                    //delete functionality
     Movie.deleteMovie(req.params._id,function(err,movie){
         if(err) throw err;
         res.json(movie);
         console.log('movie deleted');
     });

 })

 /*router.get('/:_id',function(req,res){
     MOvie.getMovie(req.params._id,function(err,movie){
         if(err) throw err;
         res.json(movie);
         console.log(' movie details');
     })
 })*/
 module.exports=router;