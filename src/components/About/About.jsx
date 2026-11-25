const About = ({ tourDetails }) => {
  return (
    <div className="description-box">
      <h2 className="heading-secondary ma-bt-lg">About {tourDetails?.name}</h2>
      {tourDetails?.description?.split("\n")?.map((line, index) => (
        <p className="description__text" key={index}>
          {line}
        </p>
      ))}
    </div>
  );
};

export default About;
