/* global alert */

import React from 'react';
import { storiesOf } from '@kadira/storybook';
import Wrapper from '../components/Wrapper';

storiesOf('React signup login component', module)
  .add('to default wrapper', () => (
    <Wrapper
      handleSignup={(data) => { console.log(data); alert('Signup callback, see log on the console to see the data.'); }}
      handleLogin={(data) => { console.log(data); alert('Login callback, see log on the console to see the data.'); }}
      handleRecoverPassword={(data) => { console.log(data); alert('Recover password callback, see log on the console to see the data.'); }}
    />
  ))
  .add('to signup as default', () => (
    <Wrapper
      isLogin={false}
      handleSignup={(data) => { console.log(data); alert('Signup callback, see log on the console to see the data.'); }}
      handleLogin={() => {}}
      handleRecoverPassword={() => {}}
    />
  ))
  .add('to signup with custom title', () => (
    <Wrapper
      isLogin={false}
      title={'My awesome company'}
      handleSignup={(data) => { console.log(data); alert('Signup callback, see log on the console to see the data.'); }}
    />
  ))
  .add('to recover password', () => (
    <Wrapper isRecoveringPassword />
  ))
  .add('to default wrapper with no css', () => (
    <Wrapper />
  ))
  .add('to default wrapper with ugly css on all posible elements', () => (
    <Wrapper
      styles={{
        mainWrapper: { backgroundColor: 'blue' },
        mainTitle: { color: 'red' },
        flipper: { transition: '0.1s' },
        signup: {
          wrapper: { backgroundColor: 'yellow' },
          inputWrapper: { backgroundColor: 'AliceBlue' },
          buttonsWrapper: { backgroundColor: 'Aqua' },
          input: { backgroundColor: 'LavenderBlush' },
          recoverPassword: {},
          button: { backgroundColor: 'LightCoral' },
        },
        login: {
          wrapper: { backgroundColor: 'yellow' },
          inputWrapper: { backgroundColor: 'AliceBlue' },
          buttonsWrapper: { backgroundColor: 'Aqua' },
          input: { backgroundColor: 'LavenderBlush' },
          recoverPasswordWrapper: { backgroundColor: 'MediumBlue' },
          recoverPasswordButton: { backgroundColor: 'OldLace ' },
          button: { backgroundColor: 'LightCoral' },
        },
        recoverPassword: {
          wrapper: { backgroundColor: 'yellow' },
          inputWrapper: { backgroundColor: 'AliceBlue' },
          buttonsWrapper: { backgroundColor: 'Aqua' },
          input: { backgroundColor: 'LavenderBlush' },
          button: { backgroundColor: 'LightCoral' },
        },
      }}
    />
  ));
