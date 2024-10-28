const isUserLogin = async(req,res,next)=>{
    try{
       if(req.session.user_id){}
       else{
         res.redirect('/')
       }
       next();
    }catch(error){
     console.log(error.message);
    }
}

const isUserLogout = async(req,res,next)=>{
 try{
     if(req.session.user_id){
         res.redirect('/user/profile')
     }
     next();
 }catch(error){
  console.log(error.message);
 }
}

module.exports = {isUserLogin, isUserLogout}