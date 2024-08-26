import { useNavigate } from "react-router-dom";
import axios from "axios";

const useSubmitForm = () => {
  const navigate = useNavigate();

  const submitForm = async (values) => {
    try {
      const apiUrl = process.env.REACT_APP_API_URL;
      if (!apiUrl) {
        throw new Error("URL API не визначено у змінних середовища");
      }

      await axios.post(`${apiUrl}/hotels`, values);
      navigate("/hotels");
    } catch (error) {
      console.error("Помилка під час відправки форми:", error);
    }
  };

  return submitForm;
};

export default useSubmitForm;
