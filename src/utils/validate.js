export default ({ values, isAuth }) => {
  const errors = {};

  const rules = {
    username: (value) => {

    },
    email: (value) => {
      if (!value) {
        errors.email = 'Введите E-mail';
      } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)) {
        errors.email = 'Неверный E-mail';
      }
    },
    password: (value) => {
      if (!value) {
        errors.password = 'Введите пароль';
      } else if (!/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{8,})/.test(value)) {
        errors.password = isAuth ? 'Неверный пароль' : 'Слишком легкий пароль';
      }
    },
  };

  Object
    .keys(values)
    .forEach((key) => rules[key] && rules[key](values[key]));

  return errors;
};