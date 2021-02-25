import ContentSection from "./ContentSection";

export default function MainContent() {
  return (
    <>
      <ContentSection
        sectionClassName="section-what-usp"
        badge="Do you want to"
        title="Learn how to code"
        description="Awesome! Let’s do this together. We are here to support you in your coding journey."
        rowItems={[
          {
            image: "https://learntocodetogether.nl/assets/team.svg",
            description: "Get help from experienced developers",
          },
          {
            image: "https://learntocodetogether.nl/assets/community.svg",
            description: "Learn & share with our community",
          },
          {
            image: "https://learntocodetogether.nl/assets/personal-speed.svg",
            description: "Personal & at your own speed",
          },
        ]}
      />
      <ContentSection
        sectionClassName="section-courses-usp"
        badge="Courses"
        title="Our Courses"
        description="We have created courses to help you learn, with easy to follow steps and some sparks of fun!"
        rowItems={[
          {
            image: "https://learntocodetogether.nl/assets/expand-horizon.svg",
            description: "Learn new skills and expand your horizon",
          },
          {
            image: "https://learntocodetogether.nl/assets/developers.svg",
            description: "Follow courses created by experienced developers",
          },
          {
            image: "https://learntocodetogether.nl/assets/step-by-step.svg",
            description: "Fun, hands on and easy to follow",
          },
        ]}
      />
      <ContentSection
        sectionClassName="section-why-usp"
        badge="Why?"
        title="Why do we do this"
        description="It’s really simple actually. We just love to combine our passion for code with our love for teaching. Coding is so much fun when doing it together."
        rowItems={[
          {
            image: "https://learntocodetogether.nl/assets/technology.svg",
            title: "Technology",
            description:
              "We love to experiment and create awesome stuff from the comfort of our couch.",
          },
          {
            image: "https://learntocodetogether.nl/assets/community.svg",
            title: "People",
            description:
              "It’s always fun to do things together, the excitement and the collaborations.",
          },
          {
            image: "https://learntocodetogether.nl/assets/personal-speed.svg",
            title: "Teaching",
            description:
              "We like to learn and to teach others the stuff we know.",
          },
        ]}
      />
    </>
  );
}
