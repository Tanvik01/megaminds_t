import React from 'react';

interface Subject {
  name: string;
  emoji: string;
}

interface GradeLevel {
  title: string;
  subjects: Subject[];
  color: string;
}

interface SubjectsOfferedProps {
  category: 'school' | 'entrance' | 'communication' | 'tech' | 'competitive';
}

const schoolSubjects: GradeLevel[] = [
  {
    title: "Primary (Grades 1–5)",
    color: "from-rose-100 to-rose-50",
    subjects: [
      { name: "Math", emoji: "🧮" },
      { name: "EVS", emoji: "🧑‍🎨" },
      { name: "English", emoji: "📖" },
      { name: "Hindi", emoji: "📘" },
      { name: "Drawing & Creative Skills", emoji: "🎨" },
    ]
  },
  {
    title: "Middle School (Grades 6–8)",
    color: "from-amber-100 to-amber-50",
    subjects: [
      { name: "Math", emoji: "📐" },
      { name: "Science", emoji: "🔬" },
      { name: "Social Studies", emoji: "🌍" },
      { name: "English Grammar & Writing", emoji: "📝" },
    ]
  },
  {
    title: "High School (Grades 9–10)",
    color: "from-emerald-100 to-emerald-50",
    subjects: [
      { name: "Math", emoji: "📊" },
      { name: "Physics", emoji: "🧪" },
      { name: "Biology", emoji: "🌱" },
      { name: "Chemistry", emoji: "🧬" },
      { name: "Social Studies", emoji: "🗺" },
      { name: "Languages (Hindi, Telugu, Sanskrit)", emoji: "📚" },
    ]
  },
  {
    title: "Senior Secondary (Grades 11–12)",
    color: "from-blue-100 to-blue-50",
    subjects: [
      // Science Stream
      { name: "Physics", emoji: "🔭" },
      { name: "Biology", emoji: "🧬" },
      { name: "Chemistry", emoji: "⚗️" },
      { name: "Mathematics", emoji: "📐" },
      // Commerce Stream
      { name: "Accountancy", emoji: "📈" },
      { name: "Economics", emoji: "📘" },
      { name: "Business Studies", emoji: "📊" },
      // Arts Stream
      { name: "English Core", emoji: "🧑‍🎓" },
      { name: "Computer Science", emoji: "📖" },
      { name: "Psychology", emoji: "💡" },
    ]
  }
];

const entranceSubjects: GradeLevel[] = [
  {
    title: "JEE (Main & Advanced)",
    color: "from-indigo-100 to-indigo-50",
    subjects: [
      { name: "Physics", emoji: "⚡" },
      { name: "Chemistry", emoji: "🧪" },
      { name: "Mathematics", emoji: "📐" },
      { name: "Problem Solving", emoji: "🎯" },
      { name: "Previous Year Papers", emoji: "📝" },
    ]
  },
  {
    title: "NEET",
    color: "from-emerald-100 to-emerald-50",
    subjects: [
      { name: "Biology", emoji: "🧬" },
      { name: "Physics", emoji: "⚡" },
      { name: "Chemistry", emoji: "⚗️" },
      { name: "NCERT Focus", emoji: "📚" },
      { name: "Medical Terminology", emoji: "👨‍⚕️" },
    ]
  },
  {
    title: "BITSAT & Other Engineering",
    color: "from-cyan-100 to-cyan-50",
    subjects: [
      { name: "Physics", emoji: "🔭" },
      { name: "Chemistry", emoji: "🧪" },
      { name: "Mathematics", emoji: "📊" },
      { name: "Logical Reasoning", emoji: "🧩" },
      { name: "English Proficiency", emoji: "📖" },
    ]
  }
];

const competitiveSubjects: GradeLevel[] = [
  {
    title: "Banking Exams",
    color: "from-purple-100 to-purple-50",
    subjects: [
      { name: "IBPS PO/Clerk", emoji: "🏦" },
      { name: "SBI PO/Clerk", emoji: "💰" },
      { name: "RBI Grade B", emoji: "📊" },
      { name: "Quantitative Aptitude", emoji: "🔢" },
      { name: "Reasoning", emoji: "🧩" },
      { name: "English", emoji: "📝" },
    ]
  },
  {
    title: "Staff Selection",
    color: "from-blue-100 to-blue-50",
    subjects: [
      { name: "SSC CGL", emoji: "📋" },
      { name: "SSC CHSL", emoji: "📑" },
      { name: "SSC MTS", emoji: "📎" },
      { name: "RRB NTPC", emoji: "🚂" },
      { name: "RRB Group D", emoji: "🎫" },
    ]
  },
  {
    title: "State Services",
    color: "from-teal-100 to-teal-50",
    subjects: [
      { name: "APPSC Groups", emoji: "🏛️" },
      { name: "TSPSC Groups", emoji: "⚖️" },
      { name: "UPSC Foundation", emoji: "🎯" },
      { name: "CSAT", emoji: "📚" },
      { name: "Interview Preparation", emoji: "🤝" },
    ]
  }
];

const techSubjects: GradeLevel[] = [
  {
    title: "Web Development",
    color: "from-sky-100 to-sky-50",
    subjects: [
      { name: "HTML & CSS", emoji: "🎨" },
      { name: "JavaScript", emoji: "⚡" },
      { name: "Bootstrap", emoji: "🎁" },
      { name: "Angular", emoji: "🅰️" },
      { name: "Full Stack Development", emoji: "👨‍💻" },
    ]
  },
  {
    title: "Mobile Development",
    color: "from-emerald-100 to-emerald-50",
    subjects: [
      { name: "Flutter", emoji: "📱" },
      { name: "React Native", emoji: "⚛️" },
      { name: "App Design", emoji: "🎨" },
      { name: "Backend Integration", emoji: "🔄" },
    ]
  },
  {
    title: "Programming & Security",
    color: "from-violet-100 to-violet-50",
    subjects: [
      { name: "Python Programming", emoji: "🐍" },
      { name: "Cyber Security", emoji: "🔒" },
      { name: "Ethical Hacking", emoji: "🛡️" },
      { name: "UI/UX Design", emoji: "✨" },
    ]
  }
];

const communicationSubjects: GradeLevel[] = [
  {
    title: "Speaking Skills",
    color: "from-rose-100 to-rose-50",
    subjects: [
      { name: "Public Speaking", emoji: "🎤" },
      { name: "Presentation Skills", emoji: "📊" },
      { name: "Group Discussion", emoji: "👥" },
      { name: "Interview Skills", emoji: "🤝" },
      { name: "Debate & Anchoring", emoji: "🎯" },
    ]
  },
  {
    title: "English Language",
    color: "from-amber-100 to-amber-50",
    subjects: [
      { name: "English Fluency", emoji: "🗣️" },
      { name: "Grammar & Usage", emoji: "📝" },
      { name: "Vocabulary Building", emoji: "📚" },
      { name: "Pronunciation", emoji: "🔊" },
    ]
  },
  {
    title: "Written Communication",
    color: "from-emerald-100 to-emerald-50",
    subjects: [
      { name: "Creative Writing", emoji: "✍️" },
      { name: "Essay Writing", emoji: "📖" },
      { name: "Business Communication", emoji: "💼" },
      { name: "Email Writing", emoji: "📧" },
    ]
  }
];

const SubjectsOffered: React.FC<SubjectsOfferedProps> = ({ category }) => {
  const getSubjects = () => {
    switch (category) {
      case 'school':
        return schoolSubjects;
      case 'entrance':
        return entranceSubjects;
      case 'competitive':
        return competitiveSubjects;
      case 'tech':
        return techSubjects;
      case 'communication':
        return communicationSubjects;
      default:
        return [];
    }
  };

  const subjects = getSubjects();

  return (
    <div className="space-y-8">
      {subjects.map((gradeLevel, index) => (
        <div key={index} className="bg-white rounded-xl p-6 shadow-lg">
          <h3 className="text-xl font-semibold text-darkBlue mb-4">{gradeLevel.title}</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {gradeLevel.subjects.map((subject, subIndex) => (
              <div
                key={subIndex}
                className={`bg-gradient-to-br ${gradeLevel.color} p-4 rounded-lg shadow-sm 
                  transform transition-all duration-300 hover:scale-105 hover:shadow-md
                  group cursor-pointer`}
              >
                <div className="flex items-center space-x-3">
                  <span className="text-2xl group-hover:scale-110 transition-transform duration-300">
                    {subject.emoji}
                  </span>
                  <span className="text-darkBlue/80 font-medium group-hover:text-darkBlue transition-colors duration-300">
                    {subject.name}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default SubjectsOffered; 