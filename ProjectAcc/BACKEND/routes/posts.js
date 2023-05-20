const express = require('express');
const Posts = require('../models/posts');


const router = express.Router();

//Add posts
router.post('/add', (req, res) => {
    Posts.create(req.body)
      .then(posts => res.json({ msg: 'place added successfully' }))
      .catch(err => res.status(400).json({ error: 'Unable to add this places' }));
  });

//get posts
router.get('/getall', (req,res) =>{
    Posts.find().exec((err,posts) =>{
        if(err){
            return res.status(400).json({
                error:err
            });
        }
        return res.status(200).json({
            success:true,
            existingPosts:posts
        });
    });
});


//get a specific post

router.get('/posts/:id', (req, res) => {
    Posts.findById(req.params.id)
      .then(posts => res.json(posts))
      .catch(err => res.status(404).json({ noitemfound: 'No place found' }));
  });


//update place
router.put('/update/:id', (req, res) => {
    Posts.findByIdAndUpdate(req.params.id, req.body)
      .then(posts => res.json({ msg: 'Updated successfully' }))
      .catch(err =>
        res.status(400).json({ error: 'Unable to update the Database' })
      );
  });


//delete post

router.delete('/delete/:id',(req,res) =>{
    Posts.findByIdAndRemove(req.params.id).exec((err,deletePost) =>{

        if(err) return res.status(400).json({
            message:"Delete Unsuccessfull",err
        });

        return res.json({
            message:"Delete Successfull",deletePost
        });
    });
});






module.exports = router;