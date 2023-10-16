const PROFILE = {
  NAME: "name",
  EMAIL: "email",
  UNIVERSITY: "university",
  ADDRESS: "address",
  CONTACT: "contact",
  PREFERRED_LOCATIONS: "locations",
  SKILLS: "skills",
  EXPERIENCE_LEVEL: "experience_level",
  JOB_MODE: "modes",
};

const COUNTRIES = [
  { label: "Afghanistan", value: "Afghanistan" },
  { label: "Albania", value: "Albania" },
  { label: "Algeria", value: "Algeria" },
  { label: "Andorra", value: "Andorra" },
  { label: "Angola", value: "Angola" },
  { label: "Antigua and Barbuda", value: "Antigua and Barbuda" },
  { label: "Argentina", value: "Argentina" },
  { label: "Armenia", value: "Armenia" },
  { label: "Australia", value: "Australia" },
  { label: "Austria", value: "Austria" },
  { label: "Azerbaijan", value: "Azerbaijan" },
  { label: "Bahamas", value: "Bahamas" },
  { label: "Bahrain", value: "Bahrain" },
  { label: "Bangladesh", value: "Bangladesh" },
  { label: "Barbados", value: "Barbados" },
  { label: "Belarus", value: "Belarus" },
  { label: "Belgium", value: "Belgium" },
  { label: "Belize", value: "Belize" },
  { label: "Benin", value: "Benin" },
  { label: "Bhutan", value: "Bhutan" },
  { label: "Bolivia", value: "Bolivia" },
  { label: "Bosnia and Herzegovina", value: "Bosnia and Herzegovina" },
  { label: "Botswana", value: "Botswana" },
  { label: "Brazil", value: "Brazil" },
  { label: "Brunei", value: "Brunei" },
  { label: "Bulgaria", value: "Bulgaria" },
  { label: "Burkina Faso", value: "Burkina Faso" },
  { label: "Burundi", value: "Burundi" },
  { label: "Cabo Verde", value: "Cabo Verde" },
  { label: "Cambodia", value: "Cambodia" },
  { label: "Cameroon", value: "Cameroon" },
  { label: "Canada", value: "Canada" },
  { label: "Central African Republic", value: "Central African Republic" },
  { label: "Chad", value: "Chad" },
  { label: "Chile", value: "Chile" },
  { label: "China", value: "China" },
  { label: "Colombia", value: "Colombia" },
  { label: "Comoros", value: "Comoros" },
  { label: "Congo (Congo-Brazzaville)", value: "Congo-Brazzaville" },
  { label: "Costa Rica", value: "Costa Rica" },
  { label: "Croatia", value: "Croatia" },
  { label: "Cuba", value: "Cuba" },
  { label: "Cyprus", value: "Cyprus" },
  { label: "Czechia (Czech Republic)", value: "Czech Republic" },
  {
    label: "Democratic Republic of the Congo (Congo-Kinshasa)",
    value: "Congo-Kinshasa",
  },
  { label: "Denmark", value: "Denmark" },
  { label: "Djibouti", value: "Djibouti" },
  { label: "Dominica", value: "Dominica" },
  { label: "Dominican Republic", value: "Dominican Republic" },
  { label: "East Timor (Timor-Leste)", value: "Timor-Leste" },
  { label: "Ecuador", value: "Ecuador" },
  { label: "Egypt", value: "Egypt" },
  { label: "El Salvador", value: "El Salvador" },
  { label: "Equatorial Guinea", value: "Equatorial Guinea" },
  { label: "Eritrea", value: "Eritrea" },
  { label: "Estonia", value: "Estonia" },
  { label: "Eswatini (fmr. 'Swaziland')", value: "Eswatini" },
  { label: "Ethiopia", value: "Ethiopia" },
  { label: "Fiji", value: "Fiji" },
  { label: "Finland", value: "Finland" },
  { label: "France", value: "France" },
  { label: "Gabon", value: "Gabon" },
  { label: "Gambia, The", value: "Gambia" },
  { label: "Georgia", value: "Georgia" },
  { label: "Germany", value: "Germany" },
  { label: "Ghana", value: "Ghana" },
  { label: "Greece", value: "Greece" },
  { label: "Grenada", value: "Grenada" },
  { label: "Guatemala", value: "Guatemala" },
  { label: "Guinea", value: "Guinea" },
  { label: "Guinea-Bissau", value: "Guinea-Bissau" },
  { label: "Guyana", value: "Guyana" },
  { label: "Haiti", value: "Haiti" },
  { label: "Holy See", value: "Holy See" },
  { label: "Honduras", value: "Honduras" },
  { label: "Hungary", value: "Hungary" },
  { label: "Iceland", value: "Iceland" },
  { label: "India", value: "India" },
  { label: "Indonesia", value: "Indonesia" },
  { label: "Iran", value: "Iran" },
  { label: "Iraq", value: "Iraq" },
  { label: "Ireland", value: "Ireland" },
  { label: "Israel", value: "Israel" },
  { label: "Italy", value: "Italy" },
  { label: "Ivory Coast", value: "Ivory Coast" },
  { label: "Jamaica", value: "Jamaica" },
  { label: "Japan", value: "Japan" },
  { label: "Jordan", value: "Jordan" },
  { label: "Kazakhstan", value: "Kazakhstan" },
  { label: "Kenya", value: "Kenya" },
  { label: "Kiribati", value: "Kiribati" },
  { label: "Kuwait", value: "Kuwait" },
  { label: "Kyrgyzstan", value: "Kyrgyzstan" },
  { label: "Laos", value: "Laos" },
  { label: "Latvia", value: "Latvia" },
  { label: "Lebanon", value: "Lebanon" },
  { label: "Lesotho", value: "Lesotho" },
  { label: "Liberia", value: "Liberia" },
  { label: "Libya", value: "Libya" },
  { label: "Liechtenstein", value: "Liechtenstein" },
];

const SKILLS = [
  { label: "Programming Languages", value: "Programming Languages" },
  { label: "JavaScript", value: "JavaScript" },
  { label: "Python", value: "Python" },
  { label: "Java", value: "Java" },
  { label: "C++", value: "C++" },
  { label: "C#", value: "C#" },
  { label: "Ruby", value: "Ruby" },
  { label: "Swift", value: "Swift" },
  { label: "Go", value: "Go" },
  { label: "PHP", value: "PHP" },
  { label: "Kotlin", value: "Kotlin" },
  { label: "TypeScript", value: "TypeScript" },
  { label: "Rust", value: "Rust" },
  { label: "Dart", value: "Dart" },
  { label: "SQL", value: "SQL" },

  { label: "Web Development", value: "Web Development" },
  { label: "HTML/CSS", value: "HTML/CSS" },
  { label: "React", value: "React" },
  { label: "Angular", value: "Angular" },
  { label: "Vue.js", value: "Vue.js" },
  { label: "Node.js", value: "Node.js" },
  { label: "Express.js", value: "Express.js" },
  { label: "Django", value: "Django" },
  { label: "Ruby on Rails", value: "Ruby on Rails" },
  { label: "ASP.NET", value: "ASP.NET" },
  { label: "Bootstrap", value: "Bootstrap" },

  { label: "Mobile App Development", value: "Mobile App Development" },
  { label: "React Native", value: "React Native" },
  { label: "Flutter", value: "Flutter" },
  { label: "iOS Development (Swift)", value: "iOS Development (Swift)" },
  {
    label: "Android Development (Java/Kotlin)",
    value: "Android Development (Java/Kotlin)",
  },

  { label: "Databases", value: "Databases" },
  { label: "MySQL", value: "MySQL" },
  { label: "PostgreSQL", value: "PostgreSQL" },
  { label: "MongoDB", value: "MongoDB" },
  { label: "SQLite", value: "SQLite" },
  { label: "Oracle", value: "Oracle" },
  { label: "SQL Server", value: "SQL Server" },

  { label: "Version Control", value: "Version Control" },
  { label: "Git", value: "Git" },
  { label: "SVN", value: "SVN" },

  { label: "DevOps and Deployment", value: "DevOps and Deployment" },
  { label: "Docker", value: "Docker" },
  { label: "Kubernetes", value: "Kubernetes" },
  { label: "Jenkins", value: "Jenkins" },
  { label: "CI/CD", value: "CI/CD" },
  { label: "AWS", value: "AWS" },
  { label: "Azure", value: "Azure" },
  { label: "Google Cloud", value: "Google Cloud" },

  { label: "Frameworks", value: "Frameworks" },
  { label: "Spring Framework", value: "Spring Framework" },
  { label: "Ruby on Rails", value: "Ruby on Rails" },
  { label: ".NET Core", value: ".NET Core" },
  { label: "Laravel", value: "Laravel" },
  { label: "Symfony", value: "Symfony" },
  { label: "Flask", value: "Flask" },
  { label: "Express.js", value: "Express.js" },
  { label: "Ruby on Rails", value: "Ruby on Rails" },

  { label: "Testing and QA", value: "Testing and QA" },
  { label: "JUnit", value: "JUnit" },
  { label: "Selenium", value: "Selenium" },
  { label: "Jest", value: "Jest" },
  { label: "Cucumber", value: "Cucumber" },

  { label: "Machine Learning (ML)", value: "Machine Learning (ML)" },
  {
    label: "Artificial Intelligence (AI)",
    value: "Artificial Intelligence (AI)",
  },
  { label: "Big Data", value: "Big Data" },
  { label: "Blockchain", value: "Blockchain" },
  { label: "IoT (Internet of Things)", value: "IoT (Internet of Things)" },
  { label: "Serverless Computing", value: "Serverless Computing" },
  { label: "Microservices", value: "Microservices" },
  { label: "RESTful APIs", value: "RESTful APIs" },
  { label: "GraphQL", value: "GraphQL" },
  { label: "Web Services", value: "Web Services" },
  { label: "Agile Methodologies", value: "Agile Methodologies" },
  { label: "Scrum", value: "Scrum" },
  { label: "Kanban", value: "Kanban" },
  {
    label: "Software Development Life Cycle (SDLC)",
    value: "Software Development Life Cycle (SDLC)",
  },
];

const EXPERIENCE_LEVEL = [
  { label: "Entry-Level", value: "Entry-Level" },
  { label: "Junior", value: "Junior" },
  { label: "Associate", value: "Associate" },
  { label: "Mid-Level", value: "Mid-Level" },
  { label: "Senior", value: "Senior" },
  { label: "Lead", value: "Lead" },
  { label: "Manager", value: "Manager" },
  { label: "Director", value: "Director" },
  { label: "Vice President (VP)", value: "Vice President (VP)" },
  { label: "Executive", value: "Executive" },
];

const JOB_MODES = [
  { label: "Full-Time", value: "Full-Time" },
  { label: "Part-Time", value: "Part-Time" },
  { label: "Contract", value: "Contract" },
  { label: "Temporary", value: "Temporary" },
  { label: "Freelance", value: "Freelance" },
  { label: "Remote", value: "Remote" },
  { label: "Internship", value: "Internship" },
  { label: "Volunteer", value: "Volunteer" },
  { label: "Consultant", value: "Consultant" },
  { label: "Seasonal", value: "Seasonal" },
];

export const CONSTANTS = {
  COUNTRIES,
  SKILLS,
  PROFILE,
  EXPERIENCE_LEVEL,
  JOB_MODES,
};