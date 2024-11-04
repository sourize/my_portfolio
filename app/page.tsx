import Image from "next/image";
import { socialLinks } from "./config";

export default function Page() {
  return (
    <section>
      <a href={socialLinks.twitter} target="_blank">
        <Image
          src="/me.png"
          alt="Profile photo"
          className="rounded-full border border-gray-300 bg-gray-100 block lg:mt-5 mt-0 lg:mb-5 mb-10 mx-auto sm:float-right sm:ml-5 sm:mb-5 transition-transform duration-300 ease-in-out transform hover:scale-95"
          unoptimized
          width={160}
          height={160}
          priority
        />
      </a>

      <h1 className="mb-8 text-2xl font-medium tracking-tight">
        Sourish Chatterjee
      </h1>

      <div className="prose prose-neutral dark:prose-invert">
        <p>
          I'm an aspiring Data Scientist and ML Engineer, passionate about transforming data into impactful real-world solutions.
        </p>
        <p>
          I'm currently studying B.Tech in Computer Science Engineering, focusing on AI and ML at {" "}
          <a
            target="_blank"
            href="https://msit.edu.in"
          >
            MSIT
          </a>
          .
        </p>
        <p>
        Beyond tech, I enjoy sharing insights on data science and personal projects through blog posts, participating in hackathons, and staying connected with the industry.
        </p>
        <p>
        Let's connect! I'm open to collaborations and discussions on shared interests.
        </p>
      </div>
    </section>
  );
}
