import {create} from 'react-test-renderer';
import Container from './container';

test('snapshot', () => {
  const render = create(<Container>Test</Container>).toJSON();
  expect(render).toMatchSnapshot();
});
