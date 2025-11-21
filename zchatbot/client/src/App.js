import React, { useState } from 'react';
import axios from 'axios';

function App() {
    const [formData, setFormData] = useState({
        land_area: '',
        altitude: '',
        soil_ph: '',
        average_rainfall: '',
        average_temp: '',
        sunshine_hours: ''
    });
    const [recommendedCrop, setRecommendedCrop] = useState('');

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await axios.post('/api/recommend-crop', formData);
            setRecommendedCrop(res.data.crop_variety);
        } catch (error) {
            console.error('Error:', error);
        }
    };

    return (
        <div>
            <h1>Crop Recommendation Chatbot</h1>
            <form onSubmit={handleSubmit}>
                <label>
                    Land Area (hectares):
                    <input type="number" name="land_area" value={formData.land_area} onChange={handleChange} />
                </label>
                <br />
                <label>
                    Altitude (meters):
                    <input type="number" name="altitude" value={formData.altitude} onChange={handleChange} />
                </label>
                <br />
                <label>
                    Soil pH:
                    <input type="number" name="soil_ph" step="0.01" value={formData.soil_ph} onChange={handleChange} />
                </label>
                <br />
                <label>
                    Average Rainfall (mm):
                    <input type="number" name="average_rainfall" value={formData.average_rainfall} onChange={handleChange} />
                </label>
                <br />
                <label>
                    Average Temperature (Celsius):
                    <input type="number" name="average_temp" value={formData.average_temp} onChange={handleChange} />
                </label>
                <br />
                <label>
                    Sunshine Hours:
                    <input type="number" name="sunshine_hours" value={formData.sunshine_hours} onChange={handleChange} />
                </label>
                <br />
                <button type="submit">Recommend Crop</button>
            </form>
            {recommendedCrop && <p>Recommended Crop: {recommendedCrop}</p>}
        </div>
    );
}

export default App;
