const express = require('express');
const { Favorite } = require('../models/Favorite');
const router = express.Router();

//=================================
//             Favorite
//=================================


router.post("/favoriteNumber", (req, res) => {
    

    // db 에서 favorite 숫자를 가져오기
    Favorite.find({"movieId":req.body.movieId})
    .exec((err,rows)=>{
        if(err) return res.status(400).send(err)

        console.log(rows)
          // 그 다음에 프론트로 보내기
        res.status(200).json({
            success : true,
            favoriteNumber : rows.length
        }
        )
    })
  
});



router.post("/favorited", (req, res) => {
    // 내가 이 영화를 Favorite 리스트에 넣었는지 정보를  DB에서 가져오기

    // db 에서 favorite 숫자를 가져오기
    Favorite.find({"movieId":req.body.movieId,"userFrom":req.body.userFrom})
    .exec((err,rows)=>{
        if(err) return res.status(400).send(err)

        console.log(rows)
          // 그 다음에 프론트로 보내기
        res.status(200).json({
            success : true,
            favorited : rows.length !== 0 ? true : false
        }
        )
    })
  
});



router.post("/removeFromFavorite", (req, res) => {
    Favorite.findOneAndDelete({movieId:req.body.movieId, userFrom:req.body.userFrom})
    .exec((err,result)=>{
        if(err) return res.status(400).send(err);

        res.status(200).json({success:true})
    })
  
});


router.post("/addToFavorite", (req, res) => {
    var favorite = new Favorite(req.body);
    favorite.save((err,result)=>{
        if(err) return res.status(400).send(err);
        console.log(result)
        return res.status(200).json({success:true})
    })
});





module.exports = router;
