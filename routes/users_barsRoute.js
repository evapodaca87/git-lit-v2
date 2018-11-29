const express = require('express')
const router = express.Router()
const knex = require('../db/connection.js')


router.get('/', (req,res,next) => {
  knex('users_bars')
  .then(review => {
    res.json({review: review})
  })
})

router.get('/:id', (req,res,next) =>{
const id = req.params.id
  knex('users_bars')
  .where('id',id)
  .then((review) =>{
    if(!review.length){
      next()
    }
    else{
    res.json({review: review[0]})
    }
  })
})

router.post('/', (req,res,next) =>{
  // const body = req.body
  knex('users_bars')
    .insert(req.body)
    .returning('*')
    .then((review) =>{
      console.log(review)
      res.json({review: review})
    })
})

router.put('/:id', (req,res,next) => {
  const id = req.params.id
  const body = req.body

  knex('users_bars')
    .where('id', id)
    .update(body)
    .returning('*')
    .then(updatedReview =>{
      res.json({updatedReview: updatedReview[0]})
    })
})

router.delete('/:id', (req,res,next) => {
  const id = req.params.id
  knex('users_bars')
  .where('id', id)
  .del()
  .returning('*')
  .then(deletedReview => {
    res.json({deletedReview:deletedReview[0]})
  })
})





module.exports = router