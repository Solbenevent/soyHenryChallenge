const { Survey } = require("../db");

const updateSurvey = async (req, res) => {
    const { id } = req.params;
     const updateFields = req.body; 
    try {

        if(!Object.keys(updateFields).length) 
        return res.status(400).json({ message: "Error: Debe ingresar datos a cambiar" });

        const surveyDB = await Survey.findByPk(id);
        if(!surveyDB) return res.status(404).json({ message: `No existe con el id ${id}`})
       
        for(const field in updateFields) {
            if(updateFields.hasOwnProperty(field)) {
                surveyDB[field] = updateFields[field];
            };
        };
        await surveyDB.save();
        return res.status(200).json(surveyDB);
        
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Error al modificar los campos"}); 
    }
}

module.exports = { updateSurvey }