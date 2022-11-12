import { useFormikContext } from "formik";
import Button from '../Button'

function SubmitButton({ title, style }) {
  const { handleSubmit } = useFormikContext();

  return <Button title={title} onPress={handleSubmit}></Button>;
}

export default SubmitButton;
