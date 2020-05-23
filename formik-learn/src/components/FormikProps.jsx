// libraries
import * as Yup from "yup";

export const useFormikProps = () => {
  const initialValues = {
    name: "",
    email: "",
    channel: "",
  };

  const validationSchema = Yup.object({
    name: Yup.string().required("Required!"),
    email: Yup.string().email("Invalid email format!").required("Required!"),
    channel: Yup.string().required("Required!"),
  });

  const onSubmit = (values) => console.log(values);

  return { initialValues, validationSchema, onSubmit };
};
