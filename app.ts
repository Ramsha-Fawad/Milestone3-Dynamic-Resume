interface PersonalDetails {
    email: string;
    phone: string;
    address: string;
}

interface Education {
    degree: string;
    institution: string;
    graduationDate: string;
    achievements: string[];
}

interface Experience {
    title: string;
    period: string;
    organization: string;
    details: string[];
}

interface ResumeData {
    name: string;
    personalDetails: PersonalDetails;
    objective: string;
    education: Education;
    experience: Experience;
    skills: string[];
}

function generateResume(): void {
    // Get data from form inputs
    const name = (document.getElementById("name") as HTMLInputElement).value.trim();
    const email = (document.getElementById("email") as HTMLInputElement).value.trim();
    const phone = (document.getElementById("phone") as HTMLInputElement).value.trim();
    const address = (document.getElementById("address") as HTMLInputElement).value.trim();
    const objective = (document.getElementById("objective") as HTMLInputElement).value.trim();

    const degree = (document.getElementById("degree") as HTMLInputElement).value.trim();
    const institution = (document.getElementById("institution") as HTMLInputElement).value.trim();
    const graduationDate = (document.getElementById("graduation-date") as HTMLInputElement).value.trim();
    const achievements = (document.getElementById("education-achievements") as HTMLInputElement).value.split(',').map(a => a.trim()).filter(a => a);

    const jobTitle = (document.getElementById("job-title") as HTMLInputElement).value.trim();
    const period = (document.getElementById("period") as HTMLInputElement).value.trim();
    const organization = (document.getElementById("organization") as HTMLInputElement).value.trim();
    const experienceDetails = (document.getElementById("experience-details") as HTMLInputElement).value.split(',').map(d => d.trim()).filter(d => d);

    const skills = (document.getElementById("skills") as HTMLInputElement).value.split(',').map(s => s.trim()).filter(s => s);

    // Validate required fields
    if (!name || !email || !phone || !address || !degree || skills.length === 0) {
        alert("Please fill out all required fields (Name, Email, Phone, Address, Degree, and Skills) to generate the resume.");
        return;
    }

    // Populate resume data
    const resumeData: ResumeData = {
        name,
        personalDetails: { email, phone, address },
        objective,
        education: { degree, institution, graduationDate, achievements },
        experience: { title: jobTitle, period, organization, details: experienceDetails },
        skills
    };

    // Render resume output
    const resumeOutput = document.getElementById("resume-output")!;
    resumeOutput.innerHTML = `
        <h1>${resumeData.name}</h1>
        <div class="section">
            <div class="section-header">Personal Details</div>
            <div class="section-content">
                <p><strong>Email:</strong> ${resumeData.personalDetails.email}</p>
                <p><strong>Phone:</strong> ${resumeData.personalDetails.phone}</p>
                <p><strong>Address:</strong> ${resumeData.personalDetails.address}</p>
            </div>
        </div>
        <div class="section">
            <div class="section-header">Resume Objective</div>
            <div class="section-content">${resumeData.objective}</div>
        </div>
        <div class="section">
            <div class="section-header">Education</div>
            <div class="section-content">
                <p><strong>${resumeData.education.degree}</strong> - ${resumeData.education.institution}</p>
                <p><strong>Graduation Date:</strong> ${resumeData.education.graduationDate}</p>
                <ul>${resumeData.education.achievements.map(a => `<li>${a}</li>`).join('')}</ul>
            </div>
        </div>
        <div class="section">
            <div class="section-header">Work Experience</div>
            <div class="section-content">
                <p><strong>${resumeData.experience.title}</strong> (${resumeData.experience.period}) - ${resumeData.experience.organization}</p>
                <ul>${resumeData.experience.details.map(d => `<li>${d}</li>`).join('')}</ul>
            </div>
        </div>
        <div class="section">
            <div class="section-header">Skills</div>
            <div class="section-content">
                <ul>${resumeData.skills.map(skill => `<li>${skill}</li>`).join('')}</ul>
            </div>
        </div>
    `;
}

