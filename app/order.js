const  mongoose = require("mongoose");

const orderSchema  = new mongoose.Schema ({
    order_id:{
        type : Number,
        unique: true,
        required:[true, "order_id must be provided"],
    },
    cat_id : {
       type:  Number,
       required:[true, "cat_id must be provided"],
   },
   food_item_id:
   {
       type: Number,
       required:[true, "food_item_id must be provided"],
   },
   user_id : {  
       type : Number,
       required: [true, "User_id must be provided"],
    },
    qty:{
        type: Number,
        required: [true, "qty must be provided"],
    },
});
module.exports = mongoose.model("order", orderSchema);