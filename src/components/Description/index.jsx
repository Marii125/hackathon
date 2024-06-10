import "./styles.css";



export const Description = ({ description, title }) => {
  return (
    <div>
      <h3 className="description--title">{title}</h3>
      <p className="description--position">{description}</p>
    </div>
  );
};
