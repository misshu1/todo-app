import { useSetRecoilState } from 'recoil';
import { v4 as uuidv4 } from 'uuid';
import { todosState } from '../state';
import * as yup from 'yup';
import { useFormik } from 'formik';

const errorStyle = {
  margin: 0,
  color: 'red',
  fontWeight: 900,
};

const validationSchema = yup.object().shape({
  todo: yup
    .string()
    .required('Todo is required!')
    .matches(/^.{1,50}$/, 'Todo must be less than 50 characters'),
});

export function AddTodo() {
  const setTodos = useSetRecoilState(todosState);
  const {
    errors,
    touched,
    isValid,
    values,
    handleBlur,
    handleChange,
    handleSubmit,
  } = useFormik({
    initialValues: {
      todo: '',
    },
    validationSchema,
    onSubmit: (values, { resetForm }) => {
      handleAddTodo(values, resetForm);
    },
  });

  const handleAddTodo = (values, resetForm) => {
    setTodos((prevState) => [
      ...prevState,
      { id: uuidv4(), title: values.todo, isCompleted: false },
    ]);
    resetForm();
  };

  return (
    <>
      <input
        placeholder='Add a task...'
        value={values.todo}
        onChange={handleChange}
        onBlur={handleBlur}
        name='todo'
        type='text'
        required
      />
      <button type='submit' onClick={handleSubmit} disabled={!isValid}>
        Add todo
      </button>
      <p style={errorStyle}>{touched.todo && errors.todo}</p>
    </>
  );
}
