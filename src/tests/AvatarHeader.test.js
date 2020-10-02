import React from 'react';
import { render, cleanup } from '@testing-library/react-native';
import AvatarHeader from '../predefinedComponents/AvatarHeader/AvatarHeader';

describe('AvatarHeader test empty', () => {
  afterEach(cleanup);
  test('AvatarHeader snapshot for default', () => {
    const tree = render(<AvatarHeader />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
