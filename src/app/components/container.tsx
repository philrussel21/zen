type ContainerProperties = {
  children: React.ReactNode;
  className?: string;
};

const Container = ({
  children,
  className = '',
}: ContainerProperties): JSX.Element => (
  <div className={`container ${className}`}>{children}</div>
);

export default Container;

export type {ContainerProperties as ContainerProps};
