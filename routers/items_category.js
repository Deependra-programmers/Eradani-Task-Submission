const express =require('express')
const req = require('express/lib/request')
const res = require('express/lib/response')
const item = require('../models/item')
const router = express.Router()
const items =require('../models/item')

// To get all the data
router.get('/',async(req, res)=>{
      try{
            const items = await item.find()
            res.json(items)
      }catch(err){
        res.send('Error' + err)
      } 
          
})
//to find the particular data
router.get('/:id',async(req, res)=>{
    try{
          const Item = await item.findById(req.params.id)
           res.json(Item)
    }catch(err){
      res.send('Error' + err)
    } 
        
})
//to insert the data
router.post('/', async(req,res)=> {
   
    const Item = new item({

        name:req.body.name,
        price: req.body.price,
        category:req.body.category
    })

        try{
             const a1 =await Item.save()
             res.json(a1)
        }catch(err){
            res.send(err);
        }
       
})
//to update a data by using id

router.patch('/:id',async(req,res)=>{
    try{
            const Item =await item.findById(req.params.id)
            Item.price =req.body.price
            const a1 =await Item.save()
            res.json(a1)
    }catch(err){
            res.send('Error')
    }

})

//to delete a data by using id
router.delete('/:id',async(req,res)=>{
    try{
            const Item =await item.findByIdAndDelete(req.params.id)
            res.send('delete')
    }catch(err){
            res.send('Error')
    }

})

module.exports =router