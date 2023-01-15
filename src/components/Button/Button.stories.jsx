import React from 'react';

import { Button } from './Button';

export default {
  title: 'Components/Button',
  component: Button,
};

const Template = (args) => <Button {...args} />;

export const allButtons = () => (
  <>
    <p style={{fontFamily: 'sans-serif', fontSize: '13px', color: 'grey', margin: '0 0 20px'}}> Варианты всех кнопок на сайте: </p>
    <div style={{display: 'flex', flexDirection: 'column', gap: '10px'}}>
      <Button
        label='Записаться на экскурсию'
        color='blue'
        size='extra-small'
      />
      <Button
        label='Записаться на экскурсию'
        color='red'
        size='medium'
      />
      <Button
        label='Записаться на экскурсию'
        color='white'
        size='extra-small'
      />
      <Button
        label='Записаться'
        color='red'
        size='large'
        mixes='intro__form-button'
      />
      <Button
        label='Записаться'
        color='red'
        size='small'
        mixes='intro__form-button'
      />
    </div>
  </>
);

export const headerButtonDesktop = Template.bind({});
headerButtonDesktop.args = {
  label: 'Записаться на экскурсию',
  color: 'blue',
  size: 'extra-small'
};

export const headerButtonMobile = Template.bind({});
headerButtonMobile.args = {
  label: 'Записаться на экскурсию',
  color: 'red',
  size: 'extra-small'
};

export const dropDownMobileButton = Template.bind({});
dropDownMobileButton.args = {
  label: 'Записаться на экскурсию',
  color: 'white',
  size: 'extra-small'
};

export const introSectionFormButtonDesktop = Template.bind({});
introSectionFormButtonDesktop.args = {
  label: 'Записаться',
  color: 'red',
  size: 'large',
  mixes: 'intro__form-button'
};

export const introSectionFormButtonMobile = Template.bind({});
introSectionFormButtonMobile.args = {
  label: 'Записаться',
  color: 'red',
  size: 'small',
  mixes: 'intro__form-button'
};

export const promoSectionFormButtonDesktop = Template.bind({});
promoSectionFormButtonDesktop.args = {
  label: 'Отправить',
  color: 'yellow',
  size: 'large',
  mixes: 'intro__form-button'
};

export const promoSectionFormButtonMobile = Template.bind({});
promoSectionFormButtonMobile.args = {
  label: 'Отправить',
  color: 'red',
  size: 'small',
  mixes: 'intro__form-button'
};
