const fs = require("fs");
const path = require("path")

const surveyFilePath = path.join(__dirname, "./items.json");
const getSurvey = (req, res) => {  
try {
    const surveyFile = fs.readFileSync(surveyFilePath, "utf-8");
    const survey = JSON.parse(surveyFile).items;
    return res.status(200).json(survey); 
} catch (error) {
    res.status(500).json({ message: "Error al leer el archivo" + error})
}
}

module.exports = { getSurvey }; 