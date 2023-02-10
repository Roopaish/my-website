import type { FC } from 'react';

interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement | HTMLTextAreaElement> {
  label: string;
  textarea?: boolean;
  error?: string;
}

const Input: FC<InputProps> = ({
  label,
  name,
  textarea,
  className,
  error,
  ...rest
}) => {
  return (
    <div className="space-y-1">
      <label className="block text-base leading-none">{label}</label>
      {textarea ? (
        <textarea
          className="border-default disabled:text-disabled placeholder:text-disabled h-10 min-h-[200px] w-full rounded-[4px] border bg-transparent p-3 text-lg leading-tight outline-none"
          {...rest}
        />
      ) : (
        <input
          className="border-default disabled:text-disabled placeholder:text-disabled h-10 w-full rounded-[4px] border bg-transparent px-3 text-lg outline-none"
          {...rest}
        />
      )}
      {error && <p className="text-sm text-red-500">{error}</p>}
    </div>
  );
};

export default Input;
