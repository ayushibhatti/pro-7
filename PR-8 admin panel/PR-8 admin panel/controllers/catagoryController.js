const catagoryuser = require('../models/catagoryModal')

const addCatagory = (req , res) =>{
    return res.render('add_catagory')
}

const viewCatagory = async (req , res) => {
    try {
        const { name } = req.body
        const catagory = await catagoryuser.find({});
        return res.render('view_catagory', {
            catagory
        })
    } catch (err) {
        console.log(err);
        return false;
    }


}

module.exports = {
    addCatagory , viewCatagory
}