import React from "react";
import 'app/about/about.css';

export default function About() {
  return (
    <main className="flex flex-col min-h-[100dvh] space-y-10">
      <section id="quote">
        <h1 className="text-3xl font-bold tracking-tight">Hey There, I'm Sourish 👋🏼</h1>
        <img src="folio/land.jpg" alt="Landscape" className="rounded-xl w-full h-auto object-cover max-h-[300px]" />
        <p className="text-base text-muted-foreground mb-6">
          Welcome to my digital abode!
        </p>
      </section>
      <section id="about">
        <h2 className="text-xl font-bold">About Me</h2>
        <p className="mb-4">
          I'm a tech enthusiast with a deep passion for AI and ML. My journey began at Ram Mohan Mission High School, where my curiosity for technology first took root. It blossomed into a full-fledged passion at DPS Ruby Park as I delved into the world of Computer Science.
        </p>
        <p className="mb-4">
          Currently, I'm in my 3rd year pursuing a B. Tech in Computer Science and Engineering with a specialization in Artificial Intelligence and Machine Learning. I've built projects in real estate price prediction and natural language processing, and I'm skilled in Python, scikit-learn, and data science tools, with a focus on transforming data into actionable insights. My career objective is to innovate solutions in AI/ML that drive real-world impact.
        </p>
        </section>
        <section id="whyAIML">
        <h2 className="text-xl font-bold">Why AI and ML?</h2>
        <p className="mb-4">
          It all started with a spark—a fascination with how technology could unlock the mysteries of the universe, inspired by the genius of <em>Tony Stark</em>. Today, I channel that spark into crafting models that push the boundaries of Artificial Intelligence, predicting stock markets, and evolving game AI.
        </p>
      </section>
      <section id="Skills">
        <h2 className="text-xl font-bold">Skills</h2>
        <div className="mb-4">
          <h3 className="font-semibold">Programming Languages</h3>
          <p>Python, Java, C</p>
        </div>
        <div className="mb-4">
          <h3 className="font-semibold">Tools & Libraries</h3>
          <p>Pandas, NumPy, Matplotlib, Scikit-learn, TensorFlow, Keras, PyTorch, Streamlit</p>
        </div>
        <div className="mb-4">
          <h3 className="font-semibold">Data Analysis</h3>
          <p>Data Preprocessing, Data Cleaning, Data Visualization</p>
        </div>
        <div className="mb-4">
          <h3 className="font-semibold">Platforms</h3>
          <p>Google Colab, Kaggle, Hugging Face, OpenAI, Google Cloud, GitHub, Git (Basic)</p>
        </div>
      </section>
      <section id="skills">
        <h2 className="text-xl font-bold">Skills</h2>
        <p className="mb-4">
          Let's connect and build something cool together. Feel free to reach out to me. I'm always open to new opportunities and collaborations. Reach out to me via <strong>email: <a href="mailto:contact.sourishchatterjeer@gmail.com" className="email-link">contact.sourishchatterjeer@gmail.com</a></strong> or dm me on <a href="https://twitter.com/sourize_" target="_blank" className="twitter-link">Twitter</a> or <a href="https://www.instagram.com/sourish.ml/" target="_blank" className="instagram-link">Instagram</a>.
        </p>
      </section>
    </main>
  );
}

