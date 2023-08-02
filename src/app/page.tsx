import {Card, Container} from '@app/components';

const sampleData = [
  {
    title: 'Card 1',
    description: 'This is the first card',
  },
  {
    title: 'Card 2',
    description: 'This is the second card',
  },
  {
    title: 'Card 3',
    description: 'This is the third card',
  },
];

const HomePage = (): JSX.Element => (
  <div>
    <h1>HomePage Component</h1>
    <Container className="grid gap-8">
      {sampleData.map((card) => (
        <Card {...card} />
      ))}
    </Container>
  </div>
);

export default HomePage;
