import { Children, isValidElement } from 'react';
import { describe, expect, it } from '@jest/globals';

import styles from './inline-button.module.css';
import { InlineButton } from './inline-button';

const getClassNames = (className?: string) => new Set((className ?? '').split(' ').filter(Boolean));

describe('InlineButton', () => {
  it('renders the surface variant by default', () => {
    const element = InlineButton({
      icon: 'icon',
      label: 'Reset',
    });

    expect(isValidElement(element)).toBe(true);

    const classes = getClassNames(element.props.className);
    expect(classes.has(styles.inlineButton)).toBe(true);
    expect(classes.has(styles.variantSurface)).toBe(true);
  });

  it('renders icon and label in order', () => {
    const element = InlineButton({
      variant: 'primary',
      icon: 'calendar',
      label: 'Reset',
    });

    const classes = getClassNames(element.props.className);
    expect(classes.has(styles.variantPrimary)).toBe(true);

    const children = Children.toArray(element.props.children);
    expect(children).toHaveLength(2);
    expect(isValidElement(children[0])).toBe(true);
    expect(children[0].props.children).toBe('calendar');
    expect(isValidElement(children[1])).toBe(true);
    expect(children[1].props.children).toBe('Reset');
  });

  it('applies disabled state', () => {
    const element = InlineButton({
      variant: 'bezeled',
      icon: 'calendar',
      label: 'Reset',
      disabled: true,
    });

    expect(element.props.disabled).toBe(true);

    const classes = getClassNames(element.props.className);
    expect(classes.has(styles.variantBezeled)).toBe(true);
    expect(classes.has(styles.disabled)).toBe(true);
  });
});
