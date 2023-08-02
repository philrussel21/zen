type CardProperties = {
  title: string;
  description: string;
};

const Card = ({title, description}: CardProperties): JSX.Element => (
  <article className="p-8 rounded-2xl bg-white">
    <h3>{title}</h3>
    <p>{description}</p>
  </article>
);

export default Card;

export type {CardProperties as CardProps};
