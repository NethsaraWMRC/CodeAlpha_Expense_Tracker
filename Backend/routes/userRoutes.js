const router= require("express").Router();
let user = require("../models/user.js");

router.route("/").post((req,res) =>{

    const price = Number(req.body.price);
    const description= req.body.description;
    const expensetype=req.body.expensetype;

    const newUser = new user({
        price,
        description,
        expensetype
    })

    newUser.save().then(()=>{
        res.json("record added");

    }).catch((err)=>{
        res.json(err);
    })

})

router.route("/").get((req,res)=>{
    user.find().then((users)=>{
        res.json(users);
    }).catch((err)=>{
        res.json(err);
    })
})

router.route("/:id").put(async (req,res) =>{
    const recordId = req.params.id;
    const{price,description,expensetype} = req.body;
    
    const updateRecord = {
        price,
        description,
        expensetype
    }

    const update =await user.findByIdAndUpdate(recordId,updateRecord).then(()=>{
        res.status(200).send({status:"record is updated"})
    }).catch((err)=>{
        console.log(err);
        res.status(500).send({status:"error with update record", error:err.message})
    })
})

router.route("/:id").delete(async (req,res) =>{
    const recordId = req.params.id;
    await user.findByIdAndDelete(recordId).then(()=>{
        res.status(200).send({status:"record is deleted"})
    }).catch((err)=>{
        console.log(err);
        res.status(500).send({status:"error with delete record", error:err.message})
    })
})

router.route("/:id").get(async (req,res)=>{
    const recordId = req.params.id;
    await user.findById(recordId).then((details)=>{
        // res.status(200).send({status:"record is fetched"})
        res.json(details);
    }).catch((err)=>{
        console.log(err);
        res.status(500).send({status:"error with delete record", error:err.message})
    })
})

module.exports = router;