import React, { useState } from 'react';
import axios from 'axios';

export const CropRecommendation = () => {
  const [formData, setFormData] = useState({
    sub_county: '',
    land_area: '',
    altitude: '',
    soil_ph: '',
    average_rainfall: '',
    average_temp: '',
    sunshine_hours: '',
  });
  const [result, setResult] = useState('');
  const [loading, setLoading] = useState(false); // Added for loading state
  const [error, setError] = useState(null); // Added for error state

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true); // Set loading state to true
    setError(null); // Clear any previous errors

    try {
      const response = await axios.post('http://localhost:4009/result', formData);
      setResult(response.data.recommended_crop);
    } catch (error) {
      console.error('Error:', error);
      setError('An error occurred. Please try again later.');
    } finally {
      setLoading(false); // Set loading state to false
    }
  };

  return (
    <div>
      <h2>Enter Crop Parameters</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="sub_county">Sub-County:</label><br />
        <input
          type="text"
          id="sub_county"
          name="sub_county"
          value={formData.sub_county}
          onChange={handleChange}
        /><br /><br />

        <label htmlFor="land_area">Land Area (hectares):</label><br />
        <input
          type="text"
          id="land_area"
          name="land_area"
          value={formData.land_area}
          onChange={handleChange}
        /><br /><br />

        <label htmlFor="altitude">Altitude (meters):</label><br />
        <input
          type="text"
          id="altitude"
          name="altitude"
          value={formData.altitude}
          onChange={handleChange}
        /><br /><br />

        <label htmlFor="soil_ph">Soil pH:</label><br />
        <input
          type="text"
          id="soil_ph"
          name="soil_ph"
          value={formData.soil_ph}
          onChange={handleChange}
        /><br /><br />

        <label htmlFor="average_rainfall">Average Rainfall (mm):</label><br />
        <input
          type="text"
          id="average_rainfall"
          name="average_rainfall"
          value={formData.average_rainfall}
          onChange={handleChange}
        /><br /><br />

        <label htmlFor="average_temp">Average Temperature (Celsius):</label><br />
        <input
          type="text"
          id="average_temp"
          name="average_temp"
          value={formData.average_temp}
          onChange={handleChange}
        /><br /><br />

        <label htmlFor="sunshine_hours">Sunshine Hours:</label><br />
        <input
          type="text"
          id="sunshine_hours"
          name="sunshine_hours"
          value={formData.sunshine_hours}
          onChange={handleChange}
        /><br /><br />

        <button type="submit" disabled={loading}>
          {loading ? 'Submitting...' : 'Submit'}
        </button>
      </form>

      {result && <p>Recommended Crop: {result}</p>}
      {error && <p className="error">{error}</p>}
    </div>
  );
};

export default CropRecommendation;
