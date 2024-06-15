import express from "express";

const router =express.Router()

router.post("/signup",(req,res)=>{
    res.json({
        data:"you in signup page",
    })
})

router.post("/login",(req,res)=>{
    res.json({
        data:"you in login page",
    })
})

router.post("/logout",(req,res)=>{
    res.json({
        data: "you in logout page",
    })
})

export default router