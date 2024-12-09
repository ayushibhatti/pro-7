const catagoryuser = require('../models/catagoryModal')
const subcatagoryuser = require('../models/subcatagoryModal')

const routes = require('../routes/subcatagoryRoute')

const subCatagory = async (req , res) => {
    try {
        let subcatagory = await subcatagoryuser.find({}).populate("catagoryId")
        return res.render('view_subcatagory',{
            subcatagory
        })
    } catch (err) {
        console.log(err);
        return false;
    }
}

const addsubCatagory = async (req , res) => {
    try {
        let catagory = await catagoryuser.find({});
        return res.render('add_subcatagory',{
            catagory
        })
    } catch (err) {
        console.log(err);
        return false;
    }
}

const insertsubCatagory = async (req , res) => {
    try {
        const {catagory , subcatagory} = req.body;
        await subcatagoryuser.create({
            catagoryId : catagory,
            subcatagory : subcatagory,
        })
        console.log("subcatagory craete");
        return res.redirect('/subcatagory')
    } catch (err) {
        console.log(err);
        return false;
    }
}

const deletesubCatagory = async (req , res) =>{
    try {
        const id = req.query.id;
        await subcatagoryuser.findByIdAndDelete(id);
        return res.redirect('/subcatagory');
    } catch (err) {
        console.log(err);
        return false;
    }
}

const editsubCatagory = async (req , res) => {
    try {
        const id = req.query.id;
        let catagory = await catagoryuser.find({  });
        let single = await subcatagoryuser.findById(id).populate("catagoryId")
        return res.render('edit_subcatagory', {
            catagory,
            single 
        })
    } catch (err) {
        console.log(err);
        return false;
    }
}

const updatesubCatagory = async (req , res) => {
    try {
        const { editid, catagory, subcatagory } = req.body;
        await subcatagoryuser.findByIdAndUpdate(editid, {
            catagoryId: catagory,
            subcatagory: subcatagory
        })
        return res.redirect('/subcatagory');
    } catch (err) {
        console.log(err);
        return false;
    }
}
const changeStatus = async (req, res) => {
    try {
        const status = req.query.status;
        const id = req.query.id;
        if (status == "active") {
            await catagoryuser.findByIdAndUpdate(id, { status: "deactive" })
            req.flash('success', "Status Successfully changed");
            return res.redirect('/subcategory')
        } else {
            await catagoryuser.findByIdAndUpdate(id, { status: "active" })
            req.flash('success', "Status Successfully changed");
            return res.redirect('/subcategory')
        }
    } catch (err) {
        console.log(err);
        return false;
    }
}

module.exports = {
    subCatagory , addsubCatagory ,insertsubCatagory , deletesubCatagory , editsubCatagory , updatesubCatagory ,changeStatus
}
