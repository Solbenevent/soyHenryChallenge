const { Survey } = require("../db"); 

const postSurvey = async (req, res) => {
   const { name, phoneNumber, newsletter, startDate, language, howFound } = req.body; 

    try {
        if (!name && !phoneNumber && !newsletter && !startDate && !language && !howFound) {
            return res.status(400).json({ message: "Debe completar todos los campos" });
        }
        console.log("hola");
        console.log(req.body);
        const createSurvey = await Survey.create({
            name, 
            phoneNumber,
            newsletter,
            howFound,
            startDate,
            language,
            created: true
        }) 
        return res.status(200).json(createSurvey);
    } catch (error) {
        console.log(error + "hola como va")
        res.status(500).json({ message: "Error al cargar encuesta" }); 
    }
}

module.exports = { postSurvey }; 