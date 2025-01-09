interface CustomInputProps {
    label: string;
    placeholder: string;
    value: string;
    disabled?: boolean;
    onChangeText: (text: string) => void;
    multiline?: boolean;
  }
  export default CustomInputProps;
