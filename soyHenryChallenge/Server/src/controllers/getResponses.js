const { Survey } = require("../db"); 

const getResponses = async (req, res) => {
    try {
      const responses = await Survey.findAll(); 
      if(responses) 
      return res.status(200).json(responses);
      return res.status(404).json({ message: "No existe la respuesta"})
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Algo salió mal" + "" + error})
    }
}

module.exports = { getResponses }; 