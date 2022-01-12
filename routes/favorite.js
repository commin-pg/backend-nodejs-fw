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
        res.status(200).json({
            success : true,
            favoriteNumber : rows.length
        }
        )
    })
    // 그 다음에 프론트로 보내기
});

module.exports = router;
