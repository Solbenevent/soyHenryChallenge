import React from "react";
import axios from "axios";
import { useState } from "react";
import { useForm } from "react-hook-form";
import NavBar from "./NavBar";
import AlertSuccess from "./Alerts/AlertSuccess";
import AlertFailure from "./Alerts/AlertFailure";

const Survey = () => {
  //useState
  const [showSuccess, setShowSuccess] = useState(false); // Estado para mostrar el mensaje de éxito
  const [showError, setShowError] = useState(false); // Estado para mostrar el mensaje de error

  //useForm
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    try {
      console.log(data);
      const {
        name,
        phoneNumber,
        newsletter,
        language,
        howFound,
        startDate,
        terms,
      } = data;
      const surveyForm = {
        name,
        phoneNumber,
        newsletter,
        language,
        howFound,
        terms,
        startDate,
      };
      await axios.post("http://localhost:3001/surveys", surveyForm);
      console.log(surveyForm);

      setShowSuccess(true);
      setShowError(false);
    } catch (error) {
      setShowSuccess(false);
      setShowError(true);
      throw new Error("Error al enviar el formulario" + "" + error);
    }
  };

  return (
    <div>
      <NavBar />
      <form class="row g-3" onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-3">
          <label htmlFor="validationDefault01" className="form-label">
            Nombre completo
          </label>
          <input
            type="text"
            className="form-control"
            id="validationDefault01"
            {...register("name", {
              required: {
                value: true,
                message: "El nombre es requerido",
              },
            })}
          />
          {errors.name && (
            <span className="text-danger">{errors.name.message}</span>
          )}
        </div>

        <div className="mb-3">
          <label htmlFor="validationDefault02" className="form-label">
            Número de teléfono
          </label>
          <input
            type="tel"
            className="form-control"
            id="validationDefault02"
            {...register("phoneNumber", {
              required: {
                value: true,
                message: "El número de telefono es requerido",
              },
            })}
          />
          {errors.phoneNumber && (
            <span className="text-danger">{errors.phoneNumber.message}</span>
          )}
        </div>

        <div className="mb-3">
          <label htmlFor="validationDefaultDate" className="form-label">
            Fecha de inicio
          </label>
          <input
            type="date"
            className="form-control"
            id="validationDefaultDate"
            {...register("startDate", {
              required: {
                value: true,
                message: "Completa la fecha",
              },
            })}
          />
          {errors.startDate && (
            <span className="text-danger">{errors.startDate.message}</span>
          )}
        </div>

        <div className="mb-3">
          <label htmlFor="validationDefault03" className="form-label">
            ¿Cuál es tu idioma preferido?
          </label>
          <select
            className="form-select"
            id="validationDefault03"
            {...register("language", {
              required: {
                value: true,
                message: "Por favor, selecciona un idioma",
              },
            })}
          >
            <option selected disabled value="">
              Elige uno...
            </option>
            <option value="Spanish">Español</option>
            <option value="English">Inglés</option>
            <option value="French">Francés</option>
          </select>
          {errors.language && (
            <span className="text-danger">{errors.language.message}</span>
          )}
        </div>

        <div className="mb-3">
          <label className="form-label">¿Cómo nos encontraste?</label>
          <select
            className="form-select"
            {...register("howFound", {
              required: {
                value: true,
                message: "Por favor, selecciona una opción",
              },
            })}
          >
            <option selected disabled value="">
              Elige uno...
            </option>
            <option value="Friends">Amigos</option>
            <option value="Advertisement">Publicidad</option>
            <option value="onlineSearch">Búsqueda en línea</option>
          </select>
          {errors.howFound && (
            <span className="text-danger">{errors.howFound.message}</span>
          )}
        </div>

        <div>
          <label>¿Desea recibir nuestro boletín informativo?</label>
          <input
            type="checkbox"
            className="mb-2 form-switch"
            {...register("newsletter")}
          />
        </div>

        <div class="col-12">
          <div class="form-check">
            <input
              class="form-check-input"
              type="checkbox"
              value=""
              id="invalidCheck"
              {...register("terms", {
                required: {
                  value: true,
                  message: "You must agree before submitting",
                },
              })}
            />
            {errors.terms && (
              <span className="text-danger">{errors.terms.message}</span>
            )}
            <label class="form-check-label" for="invalidCheck">
              Agree to terms and conditions
            </label>
          </div>
        </div>

        <div className="mb-3">
          <button className="btn btn-primary" type="submit">
            Enviar
          </button>
        </div>
      </form>
      {showSuccess && <AlertSuccess />}{" "}
      {/* Mostrar el mensaje de éxito si showSuccess es true */}
      {showError && <AlertFailure />}{" "}
      {/* Mostrar el mensaje de error si showError es true */}
    </div>
  );
};

export default Survey;
