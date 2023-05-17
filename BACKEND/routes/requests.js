const router = require("express").Router(); //import package
const { response } = require("express");
const packages = require("../Models/request"); //use
let Package = require("../Models/request");//use n import model file


http://localhost:8060/request/makeRequest
router.route("/makeRequest").post((req,res)=>{ //post - http request method
                                   //js arrow function
    //create variables
    const divisionID = req.body.divisionID;      //get insert data add n send to databae to use this variables
    const title = req.body.title;
    const description = req.body.description;
    const name = req.body.name;            //send request in frontend to backend to save data in databas (as a request's body )
    const address = req.body.address;
    const division = req.body.division;
    const district = req.body.district;
    const province = req.body.province;
    const email = req.body.email;            //send request in frontend to backend to save data in databas (as a request's body )
    const phoneNo = req.body.phoneNo;
   
    

    const newPackage = new Request({
        //initiolize that properties
        divisionID,
        title,
        description,
        name,
        address,
        division,
        district,
        province,
        email,
        phoneNo
        
    })
    //insert js objects to DB
    newPackage.save().then(() => {       //js promis (same if else)
        res.json("Request Added")  // that msg sent as a response, to front end, json format
    }).catch((err) =>{
        console.log(err);
    })         
})


//get all requests

router.get("/request" , (req,res)=>{
    Request.find().exec((err,request) => {
        if(err){
            return res.status(400).json({
                error:err
            });
        }
        return res.status(200).json({
            success:true,
            existingPackage:request
        });
    });
});


//get a single data


router.get("/:id", (req, res) =>{
    let ptId = req.params.id;

    Request.findById(ptId,(err,request)=>{

        if(err){
            return res.status(400).json({success:false, err});


        }

        return res.status(200).json({
            success:true,
            request
        })
    });

})


//update
http://localhost:8060/package/update/


router.put('/update/:id', (req, res)=>{

    Request.findByIdAndUpdate(
        req.params.id,{
            $set:req.body

        },
        (err, request)=>{
            if(err){
                return res.status(400).json({error:err});

            }
            return res.status(200).json({
                success:"updated succesfully"
            });
        }
    );
});


// Delete
router.route("/delete/:id").delete(async(req,res) => {
    let pId = req.params.id;

    await Request.findByIdAndDelete(pId).then(()=> {
        res.status(200).send({status:"Request deleted"});
    }).catch((err) => {
        console.log(err.message);
        res.status(500).send({status:"Error with delete request",error: err.message});
    })
})


{/*//create PDF

router.post('/createpdfpack', (req, res) => {
    pdf.create(pdfTemplate3(req.body), {}).toFile('pdfpack.pdf', (err) => {
        if(err) {
            res.send(Promise.reject());
        }

        res.send(Promise.resolve());
    });
});

//get PDF

router.get('/fetchpdfpack', (req, res) => {
    res.sendFile('pdfpack.pdf', { root: `${__dirname}/../..` })
})*/}


module.exports = router;


