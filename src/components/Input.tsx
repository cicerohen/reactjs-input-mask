import { forwardRef } from 'react';

export const Input = forwardRef<HTMLInputElement>((props, ref) => {
  return (
    <input
      {...props}
      ref={ref}
      className="border border-gray-300 rounded-lg text-lg text-gray-700 p-4"
    />
  );
});
