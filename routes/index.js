const express = require('express');
const router = express.Router();
const {ensureAuthenticated} = require('../config/auth');
const pageFieldsByLang = require('../utilitis/lang');

router.get('/', function(req, res){
    console.log(req)
    res.render('indexL',{user: req.user, title:'Home', pageL:pageFieldsByLang('en','home')})
});


router.get('/:lang', function(req, res, next){
    const lang = req.params.lang;
    if(lang === 'en' || lang === 'fr' || lang === 'ar')
        res.render('indexL',{user: req.user, title:'Home', pageL:pageFieldsByLang(req.params.lang, 'home'),lang:lang});
    else next();
});
router.get('/facts/:lang', (req, res, next) => {
    const lang = req.params.lang;
    if(lang === 'en' || lang === 'fr' || lang === 'ar')
        res.render('factsL', {title:'Vaccine Safety Facts', factsL: pageFieldsByLang(req.params.lang, 'facts'), lang:lang});
    else next();
});
router.get('/dashboard', ensureAuthenticated,(req, res) => res.render('dashboard', {user : req.user, title:'Dashboard'}));

router.get('/AboutUs/:lang' , ( req, res, next)=>{
    const lang =req.params.lang ;
    if(lang === 'en' || lang === 'fr' || lang === 'ar')
    res.render('AboutUs' ,{title:'AboutUs' , AboutUs:pageFieldsByLang(req.params.lang , 'AboutUs'), lang:lang});
    else next() ;
}) ;



router.get('/Frequently_Asked_Questions' , function (req,res){
    res.render("Qstn", {Qstn: pageFieldsByLang("en", "Qstn")})
}) ;
router.get('/importance' , function (req,res){
    res.render("importance", {importance: pageFieldsByLang("en", "importance")})
}) ;
router.get('/Safety' , function (req,res){
    res.render("Safety", {Safety: pageFieldsByLang("en", "Safety")})
}) ;
router.get('/targetPopulation' , function (req,res){
    res.render("targetPopulation", {targetPopulation: pageFieldsByLang("en", "targetPopulation")})
}) ;
router.get('/Mechanism' , function (req,res){
    res.render("Mechanism", {Mechanism: pageFieldsByLang("en", "Mechanism")})
}) ;
router.get('/terms' , function (req,res){
    res.render("terms", {terms: pageFieldsByLang("en", "terms")})
}) ;
router.get('/privacy' , function (req,res){
    res.render("privacy", {privacy: pageFieldsByLang("en", "privacy")})
}) ;


router.get('/Ressource' , function (req,res){res.render("Ressource")}) ;
module.exports = router;
