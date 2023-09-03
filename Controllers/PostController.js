const Listing = require('../Models/ListingModel')
const createPost = async(req,res)=>{
 try {
    const listing= new Listing({
        category : req.body.category,
        link : req.body.link,
        url :req.body.url,
        title : req.body.title,
     })
    const listingData = await listing.save();
    res.status(200).send({success:true,msg:'successfully created listing',data: listingData});
 } catch (error) {
     res.status(400).send({success:false,msg:error.message});
 }

}
const getListings = async(req,res)=>{
    try {
        const listings = await Listing.find({});
        res.status(200).send({success:true,msg:'Successfully fetched Data',data:listings})
    } catch (error) {
        res.status(400).send({success:false,msg:error.message});
    }
}

const deleteListing = async(req,res) =>{
    try {
      const id = req.params.id
       await Listing.deleteOne({_id:id});
       res.status(200).send({success:true,msg:'Listing deleted successfully!'})
    } catch (error) {
        res.status(400).send({success:false,msg:error.message});
    }
}

const updateListing = async(req,res) =>{
    try {
        var id = req.body.id;
        var category = req.body.category;
        var title = req.body.title;
        var url = req.body.url;
        var link = req.body.link;
        // var updatedAt = date.now();
        await Listing.findByIdAndUpdate({_id: id},{$set:{category :category,title:title,link : link ,url: url}})
        res.status(200).send({success:true,msg:'Listing updated successfully!'})
    } catch (error) {
        res.status(400).send({success:false,msg:error.message});
    }
}
module.exports = {
    createPost,getListings,deleteListing,updateListing
}