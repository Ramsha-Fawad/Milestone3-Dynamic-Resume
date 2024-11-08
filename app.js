function generateResume() {
    // Get data from form inputs
    var name = document.getElementById("name").value.trim();
    var email = document.getElementById("email").value.trim();
    var phone = document.getElementById("phone").value.trim();
    var address = document.getElementById("address").value.trim();
    var objective = document.getElementById("objective").value.trim();
    var degree = document.getElementById("degree").value.trim();
    var institution = document.getElementById("institution").value.trim();
    var graduationDate = document.getElementById("graduation-date").value.trim();
    var achievements = document.getElementById("education-achievements").value.split(',').map(function (a) { return a.trim(); }).filter(function (a) { return a; });
    var jobTitle = document.getElementById("job-title").value.trim();
    var period = document.getElementById("period").value.trim();
    var organization = document.getElementById("organization").value.trim();
    var experienceDetails = document.getElementById("experience-details").value.split(',').map(function (d) { return d.trim(); }).filter(function (d) { return d; });
    var skills = document.getElementById("skills").value.split(',').map(function (s) { return s.trim(); }).filter(function (s) { return s; });
    // Validate required fields
    if (!name || !email || !phone || !address || !degree || skills.length === 0) {
        alert("Please fill out all required fields (Name, Email, Phone, Address, Degree, and Skills) to generate the resume.");
        return;
    }
    // Populate resume data
    var resumeData = {
        name: name,
        personalDetails: { email: email, phone: phone, address: address },
        objective: objective,
        education: { degree: degree, institution: institution, graduationDate: graduationDate, achievements: achievements },
        experience: { title: jobTitle, period: period, organization: organization, details: experienceDetails },
        skills: skills
    };
    // Render resume output
    var resumeOutput = document.getElementById("resume-output");
    resumeOutput.innerHTML = "\n        <h1>".concat(resumeData.name, "</h1>\n        <div class=\"section\">\n            <div class=\"section-header\">Personal Details</div>\n            <div class=\"section-content\">\n                <p><strong>Email:</strong> ").concat(resumeData.personalDetails.email, "</p>\n                <p><strong>Phone:</strong> ").concat(resumeData.personalDetails.phone, "</p>\n                <p><strong>Address:</strong> ").concat(resumeData.personalDetails.address, "</p>\n            </div>\n        </div>\n        <div class=\"section\">\n            <div class=\"section-header\">Resume Objective</div>\n            <div class=\"section-content\">").concat(resumeData.objective, "</div>\n        </div>\n        <div class=\"section\">\n            <div class=\"section-header\">Education</div>\n            <div class=\"section-content\">\n                <p><strong>").concat(resumeData.education.degree, "</strong> - ").concat(resumeData.education.institution, "</p>\n                <p><strong>Graduation Date:</strong> ").concat(resumeData.education.graduationDate, "</p>\n                <ul>").concat(resumeData.education.achievements.map(function (a) { return "<li>".concat(a, "</li>"); }).join(''), "</ul>\n            </div>\n        </div>\n        <div class=\"section\">\n            <div class=\"section-header\">Work Experience</div>\n            <div class=\"section-content\">\n                <p><strong>").concat(resumeData.experience.title, "</strong> (").concat(resumeData.experience.period, ") - ").concat(resumeData.experience.organization, "</p>\n                <ul>").concat(resumeData.experience.details.map(function (d) { return "<li>".concat(d, "</li>"); }).join(''), "</ul>\n            </div>\n        </div>\n        <div class=\"section\">\n            <div class=\"section-header\">Skills</div>\n            <div class=\"section-content\">\n                <ul>").concat(resumeData.skills.map(function (skill) { return "<li>".concat(skill, "</li>"); }).join(''), "</ul>\n            </div>\n        </div>\n    ");
}
