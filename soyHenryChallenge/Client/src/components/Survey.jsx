import React from "react";
import axios from "axios";
import { useState } from "react";
import { useForm } from "react-hook-form";
import NavBar from "./NavBar";
import AlertSuccess from "./Alerts/AlertSuccess";
import AlertFailure from "./Alerts/AlertFailure";
import "../components/Styles/styles.scss";

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
        <div className={`mb-3 ${errors.name ? "has-error" : ""}`}>
          <label htmlFor="validationDefault01" className="form-label">
            Nombre completo
          </label>
          <input
            type="text"
            className={`form-control ${errors.name ? "is-invalid" : ""}`}
            id="validationDefault01"
            {...register("name", {
              required: {
                value: true,
                message: "El nombre es requerido",
              },
            })}
          />
          {errors.name && (
            <div className="invalid-feedback">{errors.name.message}</div>
          )}
        </div>

        <div className={`mb-3 ${errors.phoneNumber ? "has-error" : ""}`}>
          <label htmlFor="validationDefault02" className="form-label">
            Número de teléfono
          </label>
          <input
            type="tel"
            className={`form-control ${errors.phoneNumber ? "is-invalid" : ""}`}
            id="validationDefault02"
            {...register("phoneNumber", {
              required: {
                value: true,
                message: "El número de telefono es requerido",
              },
            })}
          />
          {errors.phoneNumber && (
            <div className="invalid-feedback">{errors.phoneNumber.message}</div>
          )}
        </div>

        <div className={`mb-3 ${errors.startDate ? "has-error" : ""}`}>
          <label htmlFor="validationDefaultDate" className="form-label">
            Fecha de inicio
          </label>
          <input
            type="date"
            className={`form-control ${errors.startDate ? "is-invalid" : ""}`}
            id="validationDefaultDate"
            {...register("startDate", {
              required: {
                value: true,
                message: "Completa la fecha",
              },
            })}
          />
          {errors.startDate && (
            <div className="invalid-feedback">{errors.startDate.message}</div>
          )}
        </div>

        <div className={`mb-3 ${errors.language ? "has-error" : ""}`}>
          <label htmlFor="validationDefault03" className="form-label">
            ¿Cuál es tu idioma preferido?
          </label>
          <select
            className={`form-select ${errors.language ? "is-invalid" : ""}`}
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
            <div className="invalid-feedback">{errors.language.message}</div>
          )}
        </div>

        <div className={`mb-3 ${errors.howFound ? "has-error" : ""}`}>
          <label className="form-label" htmlFor="editHowFound">
            ¿Cómo nos encontraste?
          </label>
          <select
            className={`form-select ${errors.howFound ? "is-invalid" : ""}`}
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
            <div className="invalid-feedback">{errors.howFound.message}</div>
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
              <span className="text-danger small">{errors.terms.message}</span>
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
      {showSuccess && <AlertSuccess />} {showError && <AlertFailure />}{" "}
    </div>
  );
};

export default Survey;
