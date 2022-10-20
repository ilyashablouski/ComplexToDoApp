import React, { useEffect, useRef } from 'react';

const TextInput = () => {
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    inputRef.current && inputRef.current.focus();
  }, []);

  return <input type="text" defaultValue="Uncontrolled input" ref={inputRef} />;
};

export default TextInput;
