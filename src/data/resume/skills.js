// Programming, Python, Data Science, Deep Learning,
// Web Development, Tools, DevOps/MLOps, Databases, Generative AI
const skills = [
  {
    title: 'Python',
    competency: 5,
    category: ['Programming', 'Data Science', 'Web Development'],
  },
  {
    title: 'Numpy',
    competency: 5,
    category: ['Data Science', 'Python'],
  },
  {
    title: 'PyTorch',
    competency: 5,
    category: ['Deep Learning', 'Data Science', 'Python'],
  },
  {
    title: 'Transformers',
    competency: 5,
    category: ['Deep Learning', 'Data Science', 'Python', 'Generative AI'],
  },
  {
    title: 'Tensorflow + Keras',
    competency: 4,
    category: ['Deep Learning', 'Python'],
  },
  {
    title: 'OpenCV',
    competency: 4,
    category: ['Python', 'Data Science'],
  },
  {
    title: 'Pandas',
    competency: 5,
    category: ['Python', 'Data Science'],
  },
  {
    title: 'Matplotlib',
    competency: 4,
    category: ['Python'],
  },
  {
    title: 'Scikit-Learn',
    competency: 5,
    category: ['Python', 'Data Science'],
  },
  {
    title: 'Javascript',
    competency: 3,
    category: ['Web Development', 'Programming'],
  },
  {
    title: 'Node.JS',
    competency: 3,
    category: ['Web Development'],
  },
  {
    title: 'React',
    competency: 4,
    category: ['Web Development'],
  },
  {
    title: 'Vue.js',
    competency: 3,
    category: ['Web Development', 'Programming'],
  },
  {
    title: 'Laravel',
    competency: 3,
    category: ['Web Development', 'Programming'],
  },
  {
    title: 'HTML + CSS',
    competency: 4,
    category: ['Web Development'],
  },
  {
    title: 'Bash',
    competency: 3,
    category: ['Tools', 'Programming', 'DevOps/MLOps'],
  },
  {
    title: 'awscli',
    competency: 4,
    category: ['Tools', 'Programming', 'DevOps/MLOps'],
  },
  {
    title: 'SQL',
    competency: 4,
    category: ['Tools', 'Programming', 'DevOps/MLOps'],
  },
  {
    title: 'Amazon Web Services (AWS)',
    competency: 4,
    category: ['Tools', 'DevOps/MLOps', 'Web Development', 'Databases', 'Generative AI'],
  },
  {
    title: 'Microsoft Azure',
    competency: 4,
    category: ['Tools', 'DevOps/MLOps', 'Web Development', 'Databases', 'Generative AI'],
  },
  {
    title: 'MongoDB',
    competency: 3,
    category: ['Web Development', 'Databases'],
  },
  {
    title: 'PostgreSQL/SQLite3/SQL',
    competency: 4,
    category: ['Web Development', 'Databases', 'Programming'],
  },
  {
    title: 'Flask',
    competency: 4,
    category: ['Web Development', 'Python'],
  },
  {
    title: 'FastAPI',
    competency: 4,
    category: ['Web Development', 'Python'],
  },
  {
    title: 'Streamlit',
    competency: 4,
    category: ['Web Development', 'Python'],
  },
  {
    title: 'Git',
    competency: 4,
    category: ['Tools', 'DevOps/MLOps'],
  },
  {
    title: 'Linux',
    competency: 4,
    category: ['Tools', 'DevOps/MLOps'],
  },
  {
    title: 'Docker/Docker Compose',
    competency: 4,
    category: ['Tools', 'DevOps/MLOps'],
  },
  {
    title: 'Kubernetes',
    competency: 3,
    category: ['Tools', 'DevOps/MLOps'],
  },
  {
    title: 'Jupyter',
    competency: 5,
    category: ['Data Science', 'Python', 'Tools'],
  },
  {
    title: 'C',
    competency: 3,
    category: ['Programming'],
  },
  {
    title: 'Java',
    competency: 3,
    category: ['Programming'],
  },
  {
    title: 'C++',
    competency: 3,
    category: ['Programming'],
  },
  {
    title: 'MATLAB',
    competency: 3,
    category: ['Programming', 'Data Science', 'Tools'],
  },
  {
    title: 'Langchain',
    competency: 4,
    category: ['Generative AI', 'Deep Learning', 'Python', 'Tools'],
  },
  {
    title: 'Hugging Face',
    competency: 4,
    category: ['Generative AI', 'Deep Learning', 'Python', 'Tools'],
  },
  {
    title: 'GPT/Gemini/Claude/Grok',
    competency: 4,
    category: ['Generative AI', 'Deep Learning', 'Python', 'Tools'],
  },
  {
    title: 'Data Structures and Algorithms',
    competency: 4,
    category: ['Programming'],
  },
  {
    title: 'Prompt Engineering',
    competency: 5,
    category: ['Generative AI', 'Deep Learning', 'Python', 'Tools'],
  },
  {
    title: 'MLFlow',
    competency: 4,
    category: ['Tools', 'DevOps/MLOps'],
  },
  {
    title: 'GitHub Actions',
    competency: 3,
    category: ['Tools', 'DevOps/MLOps'],
  },
].map((skill) => ({ ...skill, category: skill.category.sort() }));
// this is a list of colors that I like. The length should be === to the
// number of categories. Re-arrange this list until you find a pattern you like.
const colors = [
  '#747fff',
  '#64cb7b',
  '#e47272',
  '#6968b3',
  '#cc7b94',
  '#37b1f5',
  '#40494e',
  '#515dd4',
  '#c3423f',
  '#d75858',
  '#3896e2',
];

const categories = [...new Set(skills.flatMap(({ category }) => category))]
  .sort()
  .map((category, index) => ({
    name: category,
    color: colors[index],
  }));

export { categories, skills };
