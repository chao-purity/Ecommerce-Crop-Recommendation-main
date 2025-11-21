import joblib

def recommend_crop(land_area, altitude, soil_ph, average_rainfall, average_temp, sunshine_hours):
    # Load the trained model
    model = joblib.load('trained_model.pkl')  # Load the trained model using joblib
    
    # Prepare input data
    input_data = [[land_area, altitude, soil_ph, average_rainfall, average_temp, sunshine_hours]]
    
    # Make prediction
    crop_variety = model.predict(input_data)
    
    return crop_variety[0]

if __name__ == "__main__":
    import sys

    # Parse input arguments
    land_area = float(sys.argv[1])
    altitude = float(sys.argv[2])
    soil_ph = float(sys.argv[3])
    average_rainfall = float(sys.argv[4])
    average_temp = float(sys.argv[5])
    sunshine_hours = float(sys.argv[6])

    # Recommend crop based on input data
    recommended_crop = recommend_crop(land_area, altitude, soil_ph, average_rainfall, average_temp, sunshine_hours)
    
    # Print recommended crop variety
    print(recommended_crop)
