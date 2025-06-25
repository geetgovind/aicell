// Data for dynamic content
const aiEducationData = {
  // NEP 2020 Section Data
  nep2020: {
    title: "NEP 2020 Emphasis on AI",
    description: "The National Education Policy 2020 introduces comprehensive initiatives to integrate AI education across all levels, preparing Indian students for the future.",
    cards: [
      {
        title: "Policy Framework",
        description: "The National Education Policy 2020 emphasizes AI as a critical area for multidisciplinary education. It recognizes AI as one of the emerging technologies that will shape India's future economy and society.",
        icon: "nep-icon"
      },
      {
        title: "Curriculum Integration",
        description: "NEP 2020 promotes the integration of AI across all levels of education, starting from schools to higher education institutions, to develop computational thinking and digital literacy among students.",
        icon: "curriculum-icon"
      },
      {
        title: "Future Skills Development",
        description: "The policy emphasizes developing AI skills and competencies to prepare students for future jobs. It recommends creating specialized AI education programs and research centers in higher education institutions.",
        icon: "skills-icon"
      }
    ],
    quote: {
      text: "Education must move towards learning about how to think critically and solve problems, how to be creative and multidisciplinary, and how to innovate, adapt, and absorb new material in novel and changing fields.",
      author: "National Education Policy 2020"
    }
  },
  
  // Government Initiatives Data
  initiatives: {
    title: "Government of India Initiatives on AI",
    timelineItems: [
      {
        title: "NITI Aayog's National Strategy for AI",
        description: "NITI Aayog released the \"National Strategy for Artificial Intelligence\" focusing on education as one of the core areas for AI application. It proposed creating a multi-stakeholder marketplace for AI tools in education."
      },
      {
        title: "AI for All Initiative",
        description: "The Ministry of Education launched the \"AI for All\" initiative to democratize AI education. This program aims to make AI education accessible to students from diverse backgrounds across India."
      },
      {
        title: "Responsible AI for Youth",
        description: "This program focuses on empowering young students to become AI-ready by giving them an opportunity to learn AI skills at an early age. It offers training modules and project-based learning experiences."
      },
      {
        title: "CBSE AI Curriculum",
        description: "The Central Board of Secondary Education (CBSE) introduced AI as a skill subject for classes 8, 9, and 10, making India one of the first countries to include AI in the school curriculum."
      }
    ]
  },
  
  // Examples Data
  examples: {
    title: "Examples of AI in Education Landscape in India",
    features: [
      {
        title: "Personalized Learning Platforms",
        description: "Startups like BYJU'S and Vedantu are leveraging AI algorithms to personalize learning paths for students based on their performance, preferences, and learning pace.",
        image: "https://images.pexels.com/photos/4144179/pexels-photo-4144179.jpeg"
      },
      {
        title: "AI-Powered Assessment",
        description: "Organizations like EkStep Foundation are developing AI tools for automated assessment and feedback, reducing the workload on teachers and providing instant feedback to students.",
        image: "https://images.pexels.com/photos/4145153/pexels-photo-4145153.jpeg"
      },
      {
        title: "Vernacular Language Learning",
        description: "AI is being used to develop language learning applications that support India's diverse linguistic landscape, helping students learn in their native languages.",
        image: "https://images.pexels.com/photos/6238118/pexels-photo-6238118.jpeg"
      },
      {
        title: "Predictive Analytics for Dropouts",
        description: "Educational institutions are using predictive analytics to identify students at risk of dropping out and implementing timely interventions to improve retention rates.",
        image: "https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg"
      }
    ]
  },
  
  // Way Forward Data
  wayForward: {
    title: "Way Forward",
    stats: [
      {
        value: "93%",
        description: "of educators believe AI will significantly transform education in India by 2030"
      },
      {
        value: "65%",
        description: "of Indian schools plan to implement AI-based learning tools in the next five years"
      },
      {
        value: "70M+",
        description: "students could benefit from AI-enhanced education by 2025"
      },
      {
        value: "45%",
        description: "reduction in administrative workload for teachers through AI automation"
      }
    ],
    roadmap: [
      {
        title: "Infrastructure Development",
        description: "Investing in digital infrastructure to support AI implementation in all educational institutions, including those in rural and remote areas."
      },
      {
        title: "Teacher Training Programs",
        description: "Developing comprehensive training programs to equip teachers with the skills to effectively integrate AI tools in their teaching methodologies."
      },
      {
        title: "Ethical AI Framework",
        description: "Establishing ethical guidelines for the use of AI in educational settings to ensure privacy, security, and fairness."
      },
      {
        title: "Public-Private Partnerships",
        description: "Fostering collaboration between government, educational institutions, and private sector to accelerate AI innovation in education."
      }
    ]
  },
  
  // Open-Source Tools Data
  tools: {
    title: "Various Open-Source AI Tools for Education",
    toolsList: [
      {
        title: "Moodle with AI Plugins",
        description: "Moodle's open-source LMS with AI plugins offers features like automated grading, content recommendations, and learning analytics.",
        link: "#"
      },
      {
        title: "OpenAI Gym",
        description: "A toolkit for developing and comparing reinforcement learning algorithms that can be used for educational simulations and experiments.",
        link: "#"
      },
      {
        title: "TensorFlow Education",
        description: "Google's TensorFlow provides resources and tools specifically designed for educational applications of machine learning.",
        link: "#"
      },
      {
        title: "H5P",
        description: "An open-source content collaboration framework that enables the creation of interactive content with AI capabilities for educational purposes.",
        link: "#"
      },
      {
        title: "Juptyerhub",
        description: "A multi-user server for Jupyter notebooks that can be used to create and share documents with live code, equations, and visualizations.",
        link: "#"
      },
      {
        title: "RapidMiner",
        description: "An open-source data science platform that can be used in educational settings to teach data mining and predictive analytics.",
        link: "#"
      }
    ]
  }
};

// Function to dynamically update content if needed
function updateDynamicContent() {
  // This function could be used to dynamically update page content
  // based on user interactions or other events
  
  // For now, it's just a placeholder for future functionality
  console.log('Data loaded successfully');
}

// Initialize dynamic content updates
document.addEventListener('DOMContentLoaded', function() {
  updateDynamicContent();
});