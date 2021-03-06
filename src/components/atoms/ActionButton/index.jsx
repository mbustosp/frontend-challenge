/**
 * Core dependencies
 */
import React from 'react';
import classNames from 'classnames';
import Button from '../Button';

/**
 * Styles
 */
import './ActionButton.scss';

const ActionButton = ({ onClick, label, lightTheme, disabled, className }) => {
  return (
    <Button
      className={classNames(
        'button-action',
        { 'button-action--disabled': disabled },
        { 'button-action--light': lightTheme },
        className,
      )}
      onClick={onClick}
      label={label}
      disabled={disabled}
    />
  );
};

ActionButton.propTypes = { ...Button.propTypes };

export default ActionButton;
