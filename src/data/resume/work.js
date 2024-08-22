/**
 * @typedef {Object} Position
 * Conforms to https://jsonresume.org/schema/
 *
 * @property {string} name - Name of the company
 * @property {string} position - Position title
 * @property {string} url - Company website
 * @property {string} startDate - Start date of the position in YYYY-MM-DD format
 * @property {string|undefined} endDate - End date of the position in YYYY-MM-DD format.
 * If undefined, the position is still active.
 * @property {string|undefined} summary - html/markdown summary of the position
 * @property {string[]} highlights - plain text highlights of the position (bulleted list)
 */
const work = [
  {
    name: 'Valuence Technologies(VT) Japan',
    position: 'Lead AI Engineer',
    url: 'https://www.valuence.inc/en/group/technologies/',
    startDate: '2023-01-01',
    summary: `Valuence Technologies is a subsidiary of Valuence Holdings, a luxury goods retailer company in Japan. 
    It is a technology company that provides AI solutions to various business problems of its other subsidiaries and also other clients.`,
    highlights: [
      'Developed an API using a Large Language Model (LLM) to extract product information from'
      + ' different e-commerce websites in Japan effectively. These websites have non-uniform HTML structures,'
      + ' which previously made data scraping time-consuming.',
      'Expanded the Auto-assessing Platform with new features such as the "Guarantee Card Detector", "Watch Dial-info Predictor",'
      + ' and "Optimal Sales Channel Estimator". Understood the requirements, prepared dataset and trained models to address them.',
    ],
  },
  {
    name: 'Valuence Technologies(VT) Japan',
    position: 'AI Engineer',
    url: 'https://www.valuence.inc/en/group/technologies/',
    startDate: '2021-01-01',
    endDate: '2022-12-31',
    highlights: [
      'Developed a model using a Branched-CNN (BCNN) architecture to accurately predict the brand,'
      + ' model name, and model number of luxury watches from its images. Understood the requirements,'
      + ' prepared training dataset, trained models and tested it rigourously before deploying it.',
      'Created a general detector model that could detect and localize the target products from images'
      + ' and videos shared by customers on our platform. It helped to semi-automate replies to customers.',
      'Trained a regression model to predict the price of luxury watches based on its features like brand,'
      + ' model name, model number, and condition. It helped to estimate the price range of watches accurately.',
    ],
  },
  {
    name: 'Valuence Technologies(VT) Japan',
    position: 'Trainee AI Engineer',
    url: 'https://www.valuence.inc/en/group/technologies/',
    startDate: '2020-07-01',
    endDate: '2020-12-31',
    highlights: [
      'Developed the model architecture for Multi-view CNN from scratch on the ResNet backbone'
      + ' and tested its performance on multiple datasets. Subsequently, it was adopted as a benchmark.',
      'Built an API to record and manage the work hours of in-house employees of Valuence.'
      + ' This end-to-end project had all the necessary security checks, roles definition and a user-friendly interface.',
    ],
  },
  {
    name: 'Imarticus Learning',
    position: 'Assistant Instructor - Machine Learning',
    url: 'https://imarticus.org/',
    startDate: '2022-08-01',
    endDate: '2023-03-30',
    summary: `Imarticus Learning is a professional education institute that offers various courses in the field of Data Science, 
    Machine Learning, and Finance. I worked part-time as an Assistant Instructor for the Machine Learning course.`,
    highlights: [
      'Conducted live sessions for students on various Machine Learning topics like Regression, Classification,'
      + ' Clustering, Dimensionality Reduction, and Neural Networks.',
      'Assisted students in their projects and assignments by providing them with the necessary guidance and support.',
    ],
  },
  {
    name: 'Tata Consultancy Services(TCS)',
    position: 'ML Engineer Intern',
    url: 'https://www.tcs.com/',
    startDate: '2019-05-25',
    endDate: '2019-07-30',
    summary: `Tata Consultancy Services is an Indian multinational information technology services and consulting company.
    I worked as a Machine Learning Engineer Intern in the AI and Cognitive Sciences team of TCS Research and Innovation Labs.`,
    highlights: [
      'Worked on a project called "Shoppable Video - In-video Search" where I developed a model to detect and localise'
      + ' products like bags, shoes, and apparels from videos.',
      'The model was later on integrated with a retailer\'s catalog to fetch top similar products to the detected ones'
      + ' using Content-based Image Retrival (CBIR) system.',
    ],
  },
  {
    name: 'Indian Institute of Technology Guwahati(IITG)',
    position: 'Teaching Assistant - ML Labs',
    url: 'https://www.iitg.ac.in/',
    startDate: '2019-07-01',
    endDate: '2020-04-30',
    summary: `IIT Guwahati is one of the premier institutes of India. I worked as a Teaching Assistant in the 
    Introduction to Machine Learning Lab of the Electrical Engineering and Electronics Department.`,
    highlights: [
      'Conducted lab sessions for students on various Machine Learning topics like Regression, Classification,'
      + ' Clustering, Dimensionality Reduction, and Neural Networks.',
      'Assisted students in their projects and assignments by providing them with the necessary guidance and support.',
    ],
  },
];

export default work;
