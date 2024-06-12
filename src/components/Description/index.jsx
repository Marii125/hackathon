import './styles.css';

export const Description = ({ description, title }) => {
  return (
    <div>
      <h3 className="description__title">{title}</h3>
      <p className="description__position">{description}</p>
    </div>
  );
};
