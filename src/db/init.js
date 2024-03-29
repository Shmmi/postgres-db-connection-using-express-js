import userModel from "../model/user/index.js";
import postModel from "../model/post/index.js";
import commentModel from "../model/comment/index.js";
import UserFollowerModel from "../model/user/userFollower.js";
const dbinit = async()=>{
    await userModel.sync({
        alter: true,
        force: false
    })
    await postModel.sync({
        alter: true,
        force: false
    });
    await commentModel.sync({
        alter:true,
        force:false
    });
    await UserFollowerModel.sync({
        alter:true,
        force:false
    });
    
}
export default dbinit;