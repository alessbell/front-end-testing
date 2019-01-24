/*  1.  will this test break when there’s a mistake that would break
       the component in production ?

    ❌  we could mistakenly set`onClick` of the button to`this.tgogle` instead
      of `this.toggle`.Test continues to work, but our component is broken./*

/*  2.  will this test continue to work when there’s a fully backward
       compatible refactor of the component ?

    ❌  we could rename toggle to `handleButtonClick` (and update the corresponding
        `onClick` reference). Test breaks despite this being a refactor.*/

test('toggle changes the state of show', () => {
  const wrapper = shallow(<HiddenMessage initialShow={true} />);
  expect(wrapper.state().show).toBe(true); // initialized properly
  wrapper.instance().toggle();
  wrapper.update();
  expect(wrapper.state().show).toBe(false); // toggled
});
