import React from 'react';
import { action } from '@storybook/addon-actions';

import Button from './Button';

export default {
  title: 'Components/Button',
  component: Button,
  argTypes: {
    variant: {
      type: 'string',
      description: 'Вариант внешнего вида кнопки',
      defaultValue: 'primary',
      options: ['primary', 'square', 'link'],
      control: {
        type: 'radio'
      }
    },
    type: {
      type: 'string',
      description: 'Тип кнопки',
      defaultValue: 'button',
      options: ['button', 'submit'],
      control: {
        type: 'radio'
      },
    },
    children: {
      type: 'string',
      description: 'Текст кнопки',
      name: 'label',
      defaultValue: 'Записаться на экскурсию'
    },
    onClick: {
      type: 'func',
      description: 'Функция: клик по кнопке',
      // control: {
      //   type: '-'
      // }
    }
  },
};

const Template = (args) => <Button {...args} />

export const headerButton = Template.bind({});
headerButton.args = {
  children: 'Записаться на экскурсию',
  variant: 'header__button',
}

export const formButton = Template.bind({});
formButton.args = {
  children: 'Записаться',
  variant: 'form__button',
}

// export const headerButton = () => <Button onClick={action('clicked')}>Записаться на экскурсию</Button>;
// export const formButton = () => <Button onClick={action('clicked')}>Записаться</Button>;


