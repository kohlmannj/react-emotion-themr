import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import * as emotion from 'emotion';
import { createSerializer as createEmotionSerializer } from 'jest-emotion';
import { createSerializer as createEnzymeSerializer } from 'enzyme-to-json';

expect.addSnapshotSerializer(createEmotionSerializer(emotion));

expect.addSnapshotSerializer(createEnzymeSerializer({ mode: 'deep' }));

Enzyme.configure({ adapter: new Adapter() });
