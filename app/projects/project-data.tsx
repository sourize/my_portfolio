export interface Project {
  title: string;
  year: number;
  description: string;
  url: string;
  imageUrl: string;
}

export const projects: Project[] = [
  {
    title: "NIFTY-50 Stock Prediction Model",
    year: 2024,
    description:
      "A Predictive Model to predict Nifty-50 Stock.",
    url: "https://github.com/sourize/Nifty_50Stock_PredictionModel",
    imageUrl: "folio/nifty50.jpeg",
  },
  {
    title: "Energy Consumption Prediction Model",
    year: 2024,
    description:
      "A Predictive Model to predict Energy Consumption based on some features as input.",
    url: "https://github.com/sourize/EnergyConsumption",
    imageUrl: "folio/energy.jpeg",
  },
  {
    title: "Real Estate Price Prediction Model",
    year: 2024,
    description:
      "A Predictive Model to predict Real Estate Price based on some features as input.",
    url: "https://github.com/sourize/Real-Estate-Price-Prediction-Using-Machine-Learning",
    imageUrl: "folio/realestate.jpeg",
  },
  {
    title: "Restaurant Review Sentiment Analysis Model",
    year: 2024,
    description:
      "An NLP Model to predict whether a review is positive or negative.",
    url: "https://github.com/sourize/Restaurant-Review-Sentiment-Analysis-Model",
    imageUrl: "folio/restaurant.jpeg",
  },  
];
