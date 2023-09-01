
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
module.exports = {
    createPost,getListings
}