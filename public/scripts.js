// Function to show Mood Survey section
function showSurvey() {
    var surveySection = document.getElementById('mood-survey');
    var surveyForm = document.getElementById('survey-form');
    
    // Toggle the visibility of the survey form
    if (surveySection.style.display === 'none') {
        surveySection.style.display = 'block';
        surveyForm.style.display = 'block';
    } else {
        surveySection.style.display = 'none';
        surveyForm.style.display = 'none';
    }
}

// Function to show Dashboard Overview section
function showDashboard() {
    document.getElementById('homepage').style.display = 'none';
    document.getElementById('dashboard').style.display = 'block'; // Change display property to block
    fetchChartData(); // Fetch chart data when showing the dashboard
}

// Function to show Resources & Support section
function showResources() {
    document.getElementById('homepage').style.display = 'none';
    document.getElementById('resources-support').style.display = 'block';
}

// Function to show Feedback & Suggestions section
function showFeedback() {
    document.getElementById('homepage').style.display = 'none';
    document.getElementById('feedback-suggestions').style.display = 'block';
}
