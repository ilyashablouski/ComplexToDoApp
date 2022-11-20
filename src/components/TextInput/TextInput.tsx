import React, { ChangeEvent, useEffect, useRef, useState } from 'react';

const TextInput = () => {
  const inputRef = useRef<HTMLInputElement>(null);
  const [controlledValue, setControlledValue] =
    useState<string>('Controlled input');

  useEffect(() => {
    inputRef.current && inputRef.current.focus();
  }, []);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const inputValue = event.target.value;
    setControlledValue(inputValue);
  };

  return (
    <input
      type="text"
      value={controlledValue}
      onChange={handleChange}
      ref={inputRef}
    />
  );
};

export default React.memo(TextInput);
