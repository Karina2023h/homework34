const validate = (values) => {
  const errors = {};
  if (!values.destination) {
    errors.destination = "Обов&apos;язково виберіть напрямок";
  }
  if (!values.checkin) {
    errors.checkin = "Обов&apos;язково виберіть дату заїзду";
  }
  if (!values.checkout) {
    errors.checkout = "Обов&apos;язково виберіть дату виїзду";
  }
  if (
    values.checkin &&
    values.checkout &&
    new Date(values.checkin) >= new Date(values.checkout)
  ) {
    errors.checkout = "Дата виїзду повинна бути після дати заїзду";
  }
  if (values.adults <= 0) {
    errors.adults = "Кількість дорослих повинна бути більше 0";
  }
  return errors;
};

export default validate;
