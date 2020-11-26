import React from 'react';
import renderer from 'react-test-renderer';
import withSorting from './with-sorting';


const MockComponent = () => {
  return <div />;
};

const MockComponentWrapped = withSorting(MockComponent);

it(`withSorting renders correctly`, () => {
  const tree = renderer.create((
    <MockComponentWrapped
      isOpened={true}
      onSortOpenClick={() => {}}
    />
  )).toJSON();

  expect(tree).toMatchSnapshot();
});
