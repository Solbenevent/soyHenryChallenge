import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";

const Response = () => {
  //Hooks useState
  const [responses, setResponses] = useState([]);
  const [editingResponse, setEditingResponse] = useState(null);
  const [isEditing, setIsEditing] = useState(false);
  const [editedData, setEditedData] = useState({
    name: "",
    phoneNumber: "",
    language: "",
    howFound: "",
    newsletter: false,
    startDate: "",
  });

  //useEffect
  useEffect(() => {
    axios
      .get("http://localhost:3001/response")
      .then((response) => {
        setResponses(response.data);
      })
      .catch((error) => {
        throw new Error("Error al obtener las respuestas");
      });
  }, []);

  //Handlers
  const handleEditClick = (response) => {
    setEditingResponse(response);
    setIsEditing(true);
    setEditedData({
      name: response.name,
      phoneNumber: response.phoneNumber,
      language: response.language,
      howFound: response.howFound,
      startDate: response.startDate,
      newsletter: response.newsletter,
    });
  };

  const handleSaveChanges = async (e) => {
    e.preventDefault();
    try {
      await axios.put(
        `http://localhost:3001/response/${editingResponse.id}`,
        editedData
      );
      const updatedResponses = responses.map((response) =>
        response.id === editingResponse.id
          ? { ...response, ...editedData }
          : response
      );
      setResponses(updatedResponses);

      setEditedData({
        name: "",
        phoneNumber: "",
        language: "",
        howFound: "",
        startDate: "",
        newsletter: false,
      });
      setEditingResponse(null);
      setIsEditing(false);
    } catch (error) {
      console.log(error);
      throw new Error(" Error al guardar los cambios", error);
    }
  };

  const handleCancelEdit = () => {
    setIsEditing(false);
    // También puedes limpiar los datos editados si lo deseas
    setEditedData({
      name: "",
      phoneNumber: "",
      language: "",
      howFound: "",
      newsletter: false,
      startDate: "",
    });
  };

  return (
    <div>
      {responses.map((response) => (
        <div key={response.id}>
          <p>{response.name}</p>
          <p>{response.phoneNumber}</p>
          <p>{response.language}</p>
          <p>{response.howFound}</p>
          <p>{response.startDate}</p>
          <p>{response.newsletter}</p>
          <button onClick={() => handleEditClick(response)}>Editar</button>
        </div>
      ))}
      {isEditing && (
        <div>
          <h2>Editar Respuesta</h2>
          <form onSubmit={handleSaveChanges}>
            <div className="mb-3">
              <label htmlFor="editName" className="form-label">
                Nombre completo
              </label>
              <input
                type="text"
                className="form-control"
                id="editName"
                defaultValue={editingResponse.name}
                onChange={(e) =>
                  setEditedData({ ...editedData, name: e.target.value })
                }
                required
              />
            </div>

            <div className="mb-3">
              <label htmlFor="editPhoneNumber" className="form-label">
                Número de teléfono
              </label>
              <input
                type="tel"
                className="form-control"
                id="editPhoneNumber"
                defaultValue={editingResponse.phoneNumber}
                onChange={(e) =>
                  setEditedData({
                    ...editedData,
                    phoneNumber: e.target.value,
                  })
                }
                required
              />
            </div>

            <div className="mb-3">
              <label htmlFor="editStartDate" className="form-label">
                Fecha de inicio
              </label>
              <input
                type="date"
                className="form-control"
                id="editStartDate"
                defaultValue={editingResponse.startDate}
                onChange={(e) =>
                  setEditedData({
                    ...editedData,
                    startDate: e.target.value,
                  })
                }
                required
              />
            </div>

            <div className="mb-3">
              <label htmlFor="editLanguage" className="form-label">
                ¿Cuál es tu idioma preferido?
              </label>
              <select
                className="form-select"
                id="editLanguage"
                defaultValue={editingResponse.language}
                onChange={(e) =>
                  setEditedData({
                    ...editedData,
                    language: e.target.value,
                  })
                }
                required
              >
                <option selected disabled value="">
                  Elige uno...
                </option>
                <option value="Spanish">Español</option>
                <option value="English">Inglés</option>
                <option value="French">Francés</option>
              </select>
            </div>

            <div className="mb-3">
              <label htmlFor="editHowFound" className="form-label">
                ¿Cómo nos encontraste?
              </label>
              <select
                className="form-select"
                id="editHowFound"
                defaultValue={editingResponse.howFound}
                onChange={(e) =>
                  setEditedData({
                    ...editedData,
                    howFound: e.target.value,
                  })
                }
                required
              >
                <option selected disabled value="">
                  Elige uno...
                </option>
                <option value="Friends">Amigos</option>
                <option value="Advertisement">Publicidad</option>
                <option value="OnlineSearch">Búsqueda en línea</option>
              </select>
            </div>

            <div>
              <label>¿Desea recibir nuestro boletín informativo?</label>
              <input
                type="checkbox"
                className="mb-2 form-switch"
                checked={editedData.newsletter}
                onChange={(e) =>
                  setEditedData({
                    ...editedData,
                    newsletter: e.target.checked,
                  })
                }
              />
            </div>

            <button type="submit" onClick={handleSaveChanges}>
              Guardar Cambios
            </button>
            <button type="button" onClick={handleCancelEdit}>
              Cancelar
            </button>
          </form>
        </div>
      )}
    </div>
  );
};

export default Response;
