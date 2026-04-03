export interface SelectProps {
  options: string[];
  onChange?: (value: string) => void;
}

export const Select = ({ options, onChange }: SelectProps) => {
  return (
    <select onChange={(e) => onChange && onChange(e.target.value)}>
      <option value="">Select an option</option>
      {options.map((option) => (
        <option key={option} value={option}>
          {option}
        </option>
      ))}
    </select>
  );
};


