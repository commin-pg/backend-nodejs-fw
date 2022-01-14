const express = require('express');
const { Like } = require('../models/Like');
const router = express.Router();

//=================================
//             Like
//=================================


router.post("/likedNumber", (req, res) => {
    // db 에서 favorite 숫자를 가져오기
    Like.find({ "movieId": req.body.movieId, "like": true })
        .exec((err, rows) => {
            if (err) return res.status(400).send(err)

            console.log(rows)
            // 그 다음에 프론트로 보내기
            res.status(200).json({
                success: true,
                likeNumber: rows.length
            }
            )
        })
});


router.post("/disLikedNumber", (req, res) => {
    // db 에서 favorite 숫자를 가져오기
    Like.find({ "movieId": req.body.movieId, "dislike": true })
        .exec((err, rows) => {
            if (err) return res.status(400).send(err)

            console.log(rows)
            // 그 다음에 프론트로 보내기
            res.status(200).json({
                success: true,
                disLikeNumber: rows.length
            }
            )
        })
});


router.post("/likeInfo", (req, res) => {
    // 내가 이 영화를 Favorite 리스트에 넣었는지 정보를  DB에서 가져오기

    // db 에서 favorite 숫자를 가져오기
    Like.findOne({ "movieId": req.body.movieId, "userFrom": req.body.userFrom })
        .exec((err, result) => {
            if (err) return res.status(400).send(err)

            console.log("IS LIKED :: ", result)
            // 그 다음에 프론트로 보내기
            res.status(200).json({
                success: true,
                result: result
            }
            )
        })

});


// router.post("/disliked", (req, res) => {
//     // 내가 이 영화를 Favorite 리스트에 넣었는지 정보를  DB에서 가져오기

//     // db 에서 favorite 숫자를 가져오기
//     Like.find({ "movieId": req.body.movieId, "userFrom": req.body.userFrom, "dislike": true })
//         .exec((err, rows) => {
//             if (err) return res.status(400).send(err)

//             console.log(rows)
//             // 그 다음에 프론트로 보내기
//             res.status(200).json({
//                 success: true,
//                 disliked: rows.length !== 0 ? true : false
//             }
//             )
//         })

// });


router.post("/updateLike", (req, res) => {


    if (req.body._id) {
        console.log("UPDATE ", req.body)
        Like.updateOne({ "_id": req.body._id }, { $set: { "like": req.body.like, "dislike": req.body.dislike } })
            .exec((err, result) => {
                if (err) return res.status(400).send(err);
                console.log("UPDATE RESULT : ", result)
                res.status(200).json({ success: true, _id: result._id })
            })
    } else {
        console.log("SAVE ", req.body)
        var likes = new Like(req.body);
        likes.save((err, result) => {
            if (err) return res.status(400).send(err);

            return res.status(200).json({ success: true, _id: result._id })
        })
    }


});




// router.post("/getFavoritedMovie", (req, res) => {

//     console.log("favorited movie req : ", req.body);

//     Favorite.find({ "userFrom": req.body.userFrom })
//         .exec((err, rows) => {
//             if (err) return res.status(400).send(err);

//             console.log("favorited movies : ", rows);
//             return res.status(200).json({ success: true, rows })
//         })
// });




module.exports = router;
