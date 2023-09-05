const { Router } = require("express"); 
const { getSurvey } = require("../controllers/getSurvey");
const { postSurvey } = require("../controllers/postSurvey");
const { getResponses } = require("../controllers/getResponses");
const { updateSurvey } = require("../controllers/updateSurvey");
const router = Router(); 

router.get("/survey", getSurvey); 
router.post("/surveys", postSurvey); 
router.get("/response", getResponses); 
router.put("/response/:id", updateSurvey); 

module.exports = router; 