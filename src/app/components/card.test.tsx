import {create} from 'react-test-renderer';
import Card from './card';

test('snapshot', () => {
  const render = create(<Card title="Test" description="Test" />).toJSON();
  expect(render).toMatchSnapshot();
});
