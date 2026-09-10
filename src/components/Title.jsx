import "../styles/Title.css";

function Title({ subtitle, mainTitle }) {
  return (
    <>
      <div className="title-container">
        <h4 className="title-small-header">{subtitle}</h4>
        <h1 className="title-header">{mainTitle}</h1>
      </div>
    </>
  );
}

export default Title;
