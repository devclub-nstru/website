import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import formConfig from "../data/formConfig";
import Loader from "../components/Loader";
import { showError, showSuccess } from "../utils/toastUtil";
import NotFound from "./NotFound"; // Import NotFound if you want to show a page for invalid routes

const Registration = () => {
  const { eventId } = useParams();
  const navigate = useNavigate(); // To handle redirection
  const [formFields, setFormFields] = useState([]);
  const [formData, setFormData] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchFormConfig = () => {
      const eventConfig = formConfig[eventId];
      if (eventConfig) {
        console.log(eventConfig);
        setFormFields(eventConfig.formFields);
      } else {
        showError(`No form configuration found for this event.`);
        navigate("/events"); // Redirect to events list if event configuration is not found
      }
      setLoading(false);
    };

    fetchFormConfig();
  }, [eventId, navigate]); // Adding navigate as a dependency

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    showSuccess("Registration successful!");
  };

  if (loading) {
    return <Loader />;
  }

  return (
    <div className="registration-form-container">
      <div className="intro-container">
        <h1 className="registration-form-heading">Registration Form</h1>
        <p className="registration-form-description">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa
          mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla,
          mattis ligula consectetur, ultrices mauris. Maecenas vitae mattis
          tellus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et
          massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien
          fringilla, mattis ligula consectetur, ultrices mauris. Maecenas vitae
          mattis tellus. Aliquam in hendrerit urna. Pellentesque sit amet sapien
          fringilla, mattis ligula consectetur, ultrices mauris. Maecenas vitae
          mattis tellus.
        </p>
      </div>
      <form onSubmit={handleSubmit}>
        {formFields.map((field) => {
          if (field.type === "select") {
            return (
              <div key={field.name} className="form-group">
                <label>{field.label}</label>
                <select
                  name={field.name}
                  required={field.required}
                  onChange={handleInputChange}
                >
                  <option value="">Select an option</option>
                  {field.options.map((option, index) => (
                    <option key={index} value={option}>
                      {option}
                    </option>
                  ))}
                </select>
              </div>
            );
          }

          return (
            <div key={field.name} className="form-group">
              <label>{field.label}</label>
              <input
                type={field.type}
                name={field.name}
                placeholder={field.placeholder}
                required={field.required}
                onChange={handleInputChange}
              />
            </div>
          );
        })}

        <div className="button-container">
          <button type="submit" className="submit-button">
            Submit Details
          </button>
        </div>
      </form>
    </div>
  );
};

export default Registration;
