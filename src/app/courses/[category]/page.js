import CourseTemplate from "@/components/templates/CourseTemplate";

const coursesData = {
  "early-childhood": {
    category: "Early Childhood",
    title: "Colors & Shapes Discovery",
    description: "An interactive journey for young minds to explore the vibrant world of colors and the fundamental logic of shapes through engaging visual patterns.",
    color: "pink",
    videoPlaceholder: "https://images.unsplash.com/photo-1543332164-6e82f355badc?auto=format&fit=crop&q=80&w=800",
    content: [
      "Early childhood development is the cornerstone of lifelong learning. In this module, children are introduced to the primary colors: Red, Blue, and Yellow. We use nature-based examples to help them form mental associations—like the blue sky, green grass, and red apples.",
      "Shapes are the building blocks of geometry. By recognizing circles, squares, and triangles, children develop spatial awareness and logical reasoning. This lesson uses interactive animations to show how shapes combine to build everything in our world.",
      "Engagement through play is vital. Theoretical learning at this stage focuses on 'discovery' rather than rote memorization. We encourage parents and caregivers to follow along with the interactive guides provided in the resources section."
    ],
    resources: [
      { name: "Coloring Workbook.pdf", type: "pdf" },
      { name: "Shape Matcher Guide.pdf", type: "pdf" },
      { name: "Parental Roadmap.pdf", type: "pdf" }
    ]
  },
  "basic-computer": {
    category: "Basic Computer",
    title: "Digital Foundations 101",
    description: "Master the essentials of modern computing. From understanding hardware components to navigating operating systems and mastering the mouse.",
    color: "blue",
    videoPlaceholder: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&q=80&w=800",
    content: [
      "Computer literacy is no longer an option; it is a fundamental skill. This lesson covers the anatomy of a computer: the CPU (the brain), the Monitor (the eyes), and the Keyboard/Mouse (the hands).",
      "We explore the concept of the User Interface (UI). Learners will understand how to navigate the desktop, manage files in folders, and use basic shortcuts like Ctrl+C and Ctrl+V to improve efficiency.",
      "Safety on the internet is a key theoretical pillar. We discuss what 'The Cloud' means and how to stay safe from common digital threats by choosing strong passwords and recognizing phishing attempts."
    ],
    resources: [
      { name: "Keyboard Shortcuts.pdf", type: "pdf" },
      { name: "Hardware Components Map.pdf", type: "pdf" },
      { name: "Internet Safety Tips.pdf", type: "pdf" }
    ]
  },
  "poultry": {
    category: "Poultry Farming",
    title: "Sustainable Coop Management",
    description: "A professional guide to poultry health, nutrition, and sustainable farming practices for small to medium-scale operations.",
    color: "orange",
    videoPlaceholder: "https://images.unsplash.com/photo-1548550023-2bdb3c5beed7?auto=format&fit=crop&q=80&w=800",
    content: [
      "Poultry farming requires biological precision and environmental management. This theory module focuses on poultry nutrition—balancing grains, vitamins, and minerals to ensure high egg production and meat quality.",
      "Disease prevention is the most critical aspect of management. We cover common ailments such as Newcastle disease and how proper ventilation and hygiene in the coop can mitigate risks without over-reliance on antibiotics.",
      "Economic sustainability involves understanding the market cycle. We discuss record-keeping for feed conversion ratios and how to time your production with seasonal demand to maximize profitability."
    ],
    resources: [
      { name: "Feeding Schedule Template.pdf", type: "pdf" },
      { name: "Disease Checklist.pdf", type: "pdf" },
      { name: "Cooper Design Blueprint.pdf", type: "pdf" }
    ]
  },
  "plant": {
    category: "Plant Science",
    title: "Principles of Horticulture",
    description: "Understand the biological processes of plant growth, soil chemistry, and modern irrigation techniques for high-yield gardening.",
    color: "green",
    videoPlaceholder: "https://images.unsplash.com/photo-1523348837708-15d4a09cfac2?auto=format&fit=crop&q=80&w=800",
    content: [
      "Photosynthesis and respiration are the fundamental biological processes of all plant life. This module breaks down how plants convert sunlight into energy and the role of micronutrients like Nitrogen, Phosphorus, and Potassium (NPK).",
      "Soil science is the foundation of horticulture. We explore pH levels and how to improve soil structure through organic composting and mulching techniques to retain moisture and foster beneficial microbial life.",
      "Modern irrigation strategies, such as drip systems, are discussed from a theoretical efficiency standpoint. We analyze plant water requirements throughout different growth stages—from germination to harvest."
    ],
    resources: [
      { name: "Soil Testing Guide.pdf", type: "pdf" },
      { name: "Seasonal Planting Calendar.pdf", type: "pdf" },
      { name: "NPK Balance Chart.pdf", type: "pdf" }
    ]
  }
};

export default function CoursePage({ params }) {
  const course = coursesData[params.category];

  return <CourseTemplate course={course} />;
}

export async function generateStaticParams() {
  return [
    { category: "early-childhood" },
    { category: "basic-computer" },
    { category: "poultry" },
    { category: "plant" },
  ];
}
