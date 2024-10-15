var popupStack = [];

function checkMatch() {
    var userInput = document.getElementById('inputData').value;

    var database = [
        { id: 1, disease: 'Influenza', symptoms: ['High fever', 'Fever', 'Cough', 'Sore throat', 'Runny nose', 'Nasal congestion', 'Sneezing', 'high fever', 'fever', 'cough', 'sore throat', 'runny nose', 'nasal congestion', 'sneezing'], treatment: 'Pain relievers, fever-reducing medication, cough medicine, nasal decongestants, and adequate rest. Consult a doctor.' },
        { id: 2, disease: 'Migraine', symptoms: ['Headache', 'Severe headache', 'Difficulty moving', 'Nausea', 'Vomiting', 'Light sensitivity', 'headache', 'severe headache', 'difficulty moving', 'nausea', 'vomiting', 'light sensitivity'], treatment: 'Pain relievers, vasodilators, and migraine prevention medication. Consult a doctor.' },
        { id: 3, disease: 'Diabetes', symptoms: ['Excessive thirst', 'Increased hunger', 'Frequent urination', 'Weight loss', 'Blurred vision', 'excessive thirst', 'increased hunger', 'frequent urination', 'weight loss', 'blurred vision'], treatment: 'Blood sugar-lowering medication, dietary control, and exercise. Consult a doctor.' },
        { id: 4, disease: 'Asthma', symptoms: ['Easy breathing', 'Chronic cough', 'easy breathing', 'chronic cough'], treatment: 'Bronchodilators, asthma control medication, and avoiding triggers. Consult a doctor.' },
        { id: 5, disease: 'High Blood Pressure', symptoms: ['Severe headache', 'Headache', 'Dizziness', 'Nausea', 'Blurred vision', 'Vertigo', 'Easy fatigue', 'severe headache', 'headache', 'dizziness', 'nausea', 'blurred vision', 'vertigo', 'easy fatigue'], treatment: 'Antihypertensive medication, dietary control, and exercise. Consult a doctor.' },
        { id: 6, disease: 'Pneumonia', symptoms: ['Dry cough', 'Productive cough', 'Shortness of breath', 'Chest pain', 'dry cough', 'productive cough', 'shortness of breath', 'chest pain'], treatment: 'Antibiotics, oxygen therapy, and adequate rest. Consult a doctor.' },
        { id: 7, disease: 'Rheumatoid Arthritis', symptoms: ['Joint pain', 'Red and warm joints', 'Swelling', 'Limited mobility', 'joint pain', 'red and warm joints', 'swelling', 'limited mobility'], treatment: 'Pain relievers, anti-inflammatory drugs, and physical therapy. Consult a doctor.' },
        { id: 8, disease: 'Gastric Ulcer', symptoms: ['Nausea', 'Abdominal pain', 'Loss of appetite', 'nausea', 'abdominal pain', 'loss of appetite'], treatment: 'Antibiotics, acid-reducing medication, and avoiding spicy foods. Consult a doctor.' },
        { id: 9, disease: 'Lupus', symptoms: ['Joint pain', 'Fatigue', 'Swelling', 'Easy fatigue', 'Rash on the body', 'joint pain', 'fatigue', 'swelling', 'easy fatigue', 'rash on the body'], treatment: 'Anti-inflammatory drugs, immunosuppressants, and symptom-specific medication. Consult a doctor.' },
        { id: 10, disease: 'Hyperthyroidism', symptoms: ['Weight loss', 'Tremors', 'Sweating easily', 'Irritability', 'weight loss', 'tremors', 'sweating easily', 'irritability'], treatment: 'Thyroid medication, pain relievers, and symptom-specific medication. Consult a doctor.' },
        { id: 11, disease: 'Hypothyroidism', symptoms: ['Weight gain', 'Irregular menstruation', 'Dry skin', 'Hair loss', 'weight gain', 'irregular menstruation', 'dry skin', 'hair loss'], treatment: 'Thyroid stimulants, pain relievers, and symptom-specific medication. Consult a doctor.' },
        { id: 12, disease: 'Chronic Obstructive Pulmonary Disease (COPD)', symptoms: ['Chronic cough', 'Shortness of breath', 'chronic cough', 'shortness of breath'], treatment: 'Bronchodilators, anti-inflammatory drugs, and oxygen therapy. Consult a doctor.' },
        { id: 13, disease: 'Epilepsy', symptoms: ['Seizures', 'seizures'], treatment: 'Antiepileptic drugs. Consult a doctor.' },
        { id: 14, disease: 'Parkinson\'s Disease', symptoms: ['Tremors', 'Stiff muscles', 'Slow movements', 'tremors', 'stiff muscles', 'slow movements'], treatment: 'Parkinson\'s medication, physical therapy, and symptom-specific treatment. Consult a doctor.' },
        { id: 15, disease: 'Abnormal Bone and Joint Disease', symptoms: ['Joint pain', 'Toothache', 'joint pain', 'toothache'], treatment: 'Pain relievers, muscle relaxants, and symptom-specific treatment. Consult a doctor.' },
        { id: 16, disease: 'Alzheimer\'s Disease', symptoms: ['Memory loss', 'Cognitive and behavioral issues', 'memory loss', 'cognitive and behavioral issues'], treatment: 'Symptom-specific medication. Consult a doctor.' },
        { id: 17, disease: 'Crohn\'s Disease', symptoms: ['Abdominal pain', 'Diarrhea', 'Rectal bleeding', 'Blood or pus in stool', 'abdominal pain', 'diarrhea', 'rectal bleeding', 'blood or pus in stool'], treatment: 'Anti-inflammatory drugs, antimicrobials, and surgery. Consult a doctor.' },
        { id: 18, disease: 'Inflammatory Bowel Disease', symptoms: ['Abdominal pain', 'Diarrhea', 'Rectal bleeding', 'Blood or pus in stool', 'abdominal pain', 'diarrhea', 'rectal bleeding', 'blood or pus in stool'], treatment: 'Anti-inflammatory drugs, antimicrobials, and surgery. Consult a doctor.' },
        { id: 18, disease: 'Inflammatory Bowel Disease', symptoms: ['Abdominal pain', 'Diarrhea', 'Rectal bleeding', 'Blood or pus in stool', 'abdominal pain', 'diarrhea', 'rectal bleeding', 'blood or pus in stool'], treatment: 'Anti-inflammatory drugs, antimicrobials, and surgery. Consult a doctor.' },
        { id: 19, disease: 'Chronic Kidney Disease', symptoms: ['Swelling', 'Easy fatigue', 'Frequent urination', 'swelling', 'easy fatigue', 'frequent urination'], treatment: 'Blood pressure control medication, diuretics, and surgery. Consult a doctor.' },
        { id: 20, disease: 'Pelvic Inflammatory Disease', symptoms: ['Menstrual pain', 'Mild abdominal pain', 'Abdominal bloating', 'Constipation', 'Diarrhea', 'menstrual pain', 'mild abdominal pain', 'abdominal bloating', 'constipation', 'diarrhea'], treatment: 'Contraceptives, antibiotics, and surgery. Consult a doctor.' },
        { id: 21, disease: 'Glomerulonephritis', symptoms: ['Abdominal pain', 'Frequent urination', 'Blood in urine', 'abdominal pain', 'frequent urination', 'blood in urine'], treatment: 'Anti-inflammatory drugs, blood pressure control medication, and surgery. Consult a doctor.' },
        { id: 22, disease: 'Hepatitis', symptoms: ['Fatigue', 'Swelling', 'Weight loss', 'Abdominal pain', 'Constipation', 'fatigue', 'swelling', 'weight loss', 'abdominal pain', 'constipation'], treatment: 'Antiviral drugs, blood pressure control medication, and surgery. Consult a doctor.' },
        { id: 23, disease: 'Anemia', symptoms: ['Fatigue', 'Dizziness', 'Blurred vision', 'Pale skin', 'fatigue', 'dizziness', 'blurred vision', 'pale skin'], treatment: 'Blood-boosting medication. Consult a doctor.' },
        { id: 24, disease: 'Breast Cancer', symptoms: ['Lump in the breast', 'Breast pain', 'lump in the breast', 'breast pain'], treatment: 'Surgery, radiation therapy, chemotherapy, and symptom-specific treatment. Consult a doctor.' },
        { id: 25, disease: 'Schizophrenia', symptoms: ['Hallucinations', 'Nervous system disturbances', 'Disruptive speech', 'hallucinations', 'nervous system disturbances', 'disruptive speech'], treatment: 'Symptom-specific medication. Consult a doctor.' },
        { id: 26, disease: 'Bipolar Disorder', symptoms: ['Mood swings', 'Depression', 'Abnormal mood', 'mood swings', 'depression', 'abnormal mood'], treatment: 'Mood stabilizers, psychotherapy, and symptom-specific treatment. Consult a doctor.' }
      ];
      
      
        

    var matches = [];

    database.forEach(entry => {
        entry.symptoms.forEach(symptom => {
            if (userInput.includes(symptom)) {
                matches.push(entry);
            }
        });
    });

    closePopup();
    closeTreatmentPopup();

    var popup = document.getElementById('popup');
    var resultElement = document.getElementById('result');

    if (matches.length > 0) {
        var diseaseLinks = matches.map(entry => {
            return '<a href="#" onclick="showTreatmentPopup(' + entry.id + ')">' + entry.disease + '</a>';
        }).join(' หรือ ');

        resultElement.innerHTML = 'You might have : ' + diseaseLinks + '<br>click on disease to see treatment';
    } else {
        resultElement.innerText = 'Sorry it appears that your symptoms are not on our list so we cant not check it ';
    }

    popup.style.display = 'block';
    popupStack.push(popup);

    return false;
}

function showTreatmentPopup(diseaseId) {
    closePopup();
    closeTreatmentPopup();

    var disease = getDiseaseById(diseaseId);

    var treatmentPopup = document.getElementById('treatmentPopup');
    var treatmentResult = document.getElementById('treatmentResult');

    if (disease) {
        treatmentResult.innerHTML = 'Treatment: ' + disease.treatment;
    } else {
        treatmentResult.innerText = 'Sorry it appears that your symptoms are not on our list so we cant not check it';
    }

    treatmentPopup.style.display = 'block';
    popupStack.push(treatmentPopup);
}

function closeTreatmentPopup() {
    var treatmentPopup = popupStack.pop();
    if (treatmentPopup) {
        treatmentPopup.style.display = 'none';
    }
}

function getDiseaseById(diseaseId) {
    var database = [
        { id: 1, disease: 'Influenza', symptoms: ['High fever', 'Fever', 'Cough', 'Sore throat', 'Runny nose', 'Nasal congestion', 'Sneezing', 'high fever', 'fever', 'cough', 'sore throat', 'runny nose', 'nasal congestion', 'sneezing'], treatment: 'Pain relievers, fever-reducing medication, cough medicine, nasal decongestants, and adequate rest. Consult a doctor.' },
        { id: 2, disease: 'Migraine', symptoms: ['Headache', 'Severe headache', 'Difficulty moving', 'Nausea', 'Vomiting', 'Light sensitivity', 'headache', 'severe headache', 'difficulty moving', 'nausea', 'vomiting', 'light sensitivity'], treatment: 'Pain relievers, vasodilators, and migraine prevention medication. Consult a doctor.' },
        { id: 3, disease: 'Diabetes', symptoms: ['Excessive thirst', 'Increased hunger', 'Frequent urination', 'Weight loss', 'Blurred vision', 'excessive thirst', 'increased hunger', 'frequent urination', 'weight loss', 'blurred vision'], treatment: 'Blood sugar-lowering medication, dietary control, and exercise. Consult a doctor.' },
        { id: 4, disease: 'Asthma', symptoms: ['Easy breathing', 'Chronic cough', 'easy breathing', 'chronic cough'], treatment: 'Bronchodilators, asthma control medication, and avoiding triggers. Consult a doctor.' },
        { id: 5, disease: 'High Blood Pressure', symptoms: ['Severe headache', 'Headache', 'Dizziness', 'Nausea', 'Blurred vision', 'Vertigo', 'Easy fatigue', 'severe headache', 'headache', 'dizziness', 'nausea', 'blurred vision', 'vertigo', 'easy fatigue'], treatment: 'Antihypertensive medication, dietary control, and exercise. Consult a doctor.' },
        { id: 6, disease: 'Pneumonia', symptoms: ['Dry cough', 'Productive cough', 'Shortness of breath', 'Chest pain', 'dry cough', 'productive cough', 'shortness of breath', 'chest pain'], treatment: 'Antibiotics, oxygen therapy, and adequate rest. Consult a doctor.' },
        { id: 7, disease: 'Rheumatoid Arthritis', symptoms: ['Joint pain', 'Red and warm joints', 'Swelling', 'Limited mobility', 'joint pain', 'red and warm joints', 'swelling', 'limited mobility'], treatment: 'Pain relievers, anti-inflammatory drugs, and physical therapy. Consult a doctor.' },
        { id: 8, disease: 'Gastric Ulcer', symptoms: ['Nausea', 'Abdominal pain', 'Loss of appetite', 'nausea', 'abdominal pain', 'loss of appetite'], treatment: 'Antibiotics, acid-reducing medication, and avoiding spicy foods. Consult a doctor.' },
        { id: 9, disease: 'Lupus', symptoms: ['Joint pain', 'Fatigue', 'Swelling', 'Easy fatigue', 'Rash on the body', 'joint pain', 'fatigue', 'swelling', 'easy fatigue', 'rash on the body'], treatment: 'Anti-inflammatory drugs, immunosuppressants, and symptom-specific medication. Consult a doctor.' },
        { id: 10, disease: 'Hyperthyroidism', symptoms: ['Weight loss', 'Tremors', 'Sweating easily', 'Irritability', 'weight loss', 'tremors', 'sweating easily', 'irritability'], treatment: 'Thyroid medication, pain relievers, and symptom-specific medication. Consult a doctor.' },
        { id: 11, disease: 'Hypothyroidism', symptoms: ['Weight gain', 'Irregular menstruation', 'Dry skin', 'Hair loss', 'weight gain', 'irregular menstruation', 'dry skin', 'hair loss'], treatment: 'Thyroid stimulants, pain relievers, and symptom-specific medication. Consult a doctor.' },
        { id: 12, disease: 'Chronic Obstructive Pulmonary Disease (COPD)', symptoms: ['Chronic cough', 'Shortness of breath', 'chronic cough', 'shortness of breath'], treatment: 'Bronchodilators, anti-inflammatory drugs, and oxygen therapy. Consult a doctor.' },
        { id: 13, disease: 'Epilepsy', symptoms: ['Seizures', 'seizures'], treatment: 'Antiepileptic drugs. Consult a doctor.' },
        { id: 14, disease: 'Parkinson\'s Disease', symptoms: ['Tremors', 'Stiff muscles', 'Slow movements', 'tremors', 'stiff muscles', 'slow movements'], treatment: 'Parkinson\'s medication, physical therapy, and symptom-specific treatment. Consult a doctor.' },
        { id: 15, disease: 'Abnormal Bone and Joint Disease', symptoms: ['Joint pain', 'Toothache', 'joint pain', 'toothache'], treatment: 'Pain relievers, muscle relaxants, and symptom-specific treatment. Consult a doctor.' },
        { id: 16, disease: 'Alzheimer\'s Disease', symptoms: ['Memory loss', 'Cognitive and behavioral issues', 'memory loss', 'cognitive and behavioral issues'], treatment: 'Symptom-specific medication. Consult a doctor.' },
        { id: 17, disease: 'Crohn\'s Disease', symptoms: ['Abdominal pain', 'Diarrhea', 'Rectal bleeding', 'Blood or pus in stool', 'abdominal pain', 'diarrhea', 'rectal bleeding', 'blood or pus in stool'], treatment: 'Anti-inflammatory drugs, antimicrobials, and surgery. Consult a doctor.' },
        { id: 18, disease: 'Inflammatory Bowel Disease', symptoms: ['Abdominal pain', 'Diarrhea', 'Rectal bleeding', 'Blood or pus in stool', 'abdominal pain', 'diarrhea', 'rectal bleeding', 'blood or pus in stool'], treatment: 'Anti-inflammatory drugs, antimicrobials, and surgery. Consult a doctor.' },
        { id: 18, disease: 'Inflammatory Bowel Disease', symptoms: ['Abdominal pain', 'Diarrhea', 'Rectal bleeding', 'Blood or pus in stool', 'abdominal pain', 'diarrhea', 'rectal bleeding', 'blood or pus in stool'], treatment: 'Anti-inflammatory drugs, antimicrobials, and surgery. Consult a doctor.' },
        { id: 19, disease: 'Chronic Kidney Disease', symptoms: ['Swelling', 'Easy fatigue', 'Frequent urination', 'swelling', 'easy fatigue', 'frequent urination'], treatment: 'Blood pressure control medication, diuretics, and surgery. Consult a doctor.' },
        { id: 20, disease: 'Pelvic Inflammatory Disease', symptoms: ['Menstrual pain', 'Mild abdominal pain', 'Abdominal bloating', 'Constipation', 'Diarrhea', 'menstrual pain', 'mild abdominal pain', 'abdominal bloating', 'constipation', 'diarrhea'], treatment: 'Contraceptives, antibiotics, and surgery. Consult a doctor.' },
        { id: 21, disease: 'Glomerulonephritis', symptoms: ['Abdominal pain', 'Frequent urination', 'Blood in urine', 'abdominal pain', 'frequent urination', 'blood in urine'], treatment: 'Anti-inflammatory drugs, blood pressure control medication, and surgery. Consult a doctor.' },
        { id: 22, disease: 'Hepatitis', symptoms: ['Fatigue', 'Swelling', 'Weight loss', 'Abdominal pain', 'Constipation', 'fatigue', 'swelling', 'weight loss', 'abdominal pain', 'constipation'], treatment: 'Antiviral drugs, blood pressure control medication, and surgery. Consult a doctor.' },
        { id: 23, disease: 'Anemia', symptoms: ['Fatigue', 'Dizziness', 'Blurred vision', 'Pale skin', 'fatigue', 'dizziness', 'blurred vision', 'pale skin'], treatment: 'Blood-boosting medication. Consult a doctor.' },
        { id: 24, disease: 'Breast Cancer', symptoms: ['Lump in the breast', 'Breast pain', 'lump in the breast', 'breast pain'], treatment: 'Surgery, radiation therapy, chemotherapy, and symptom-specific treatment. Consult a doctor.' },
        { id: 25, disease: 'Schizophrenia', symptoms: ['Hallucinations', 'Nervous system disturbances', 'Disruptive speech', 'hallucinations', 'nervous system disturbances', 'disruptive speech'], treatment: 'Symptom-specific medication. Consult a doctor.' },
        { id: 26, disease: 'Bipolar Disorder', symptoms: ['Mood swings', 'Depression', 'Abnormal mood', 'mood swings', 'depression', 'abnormal mood'], treatment: 'Mood stabilizers, psychotherapy, and symptom-specific treatment. Consult a doctor.' }
      ];
      
      
        
    return database.find(entry => entry.id === diseaseId);
}

function closePopup() {
    var popup = popupStack.pop();
    if (popup) {
        popup.style.display = 'none';
    }
}

document.addEventListener('keydown', function (e) {
    if (e.key === "Escape") {
        closePopup();
        closeTreatmentPopup();
    }
});
