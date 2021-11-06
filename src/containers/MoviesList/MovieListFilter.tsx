import { Form, Formik } from 'formik';
import TextInputField from 'components/TextInputField';
import Button from 'components/Button';

import styles from './MovieListFilters.module.css';

type MovieListFilterProps = {
  onFilterSubmit: (values: MovieListFilterFormValues) => void;
};

export type MovieListFilterFormValues = {
  title: string;
};

const MovieListFilter = ({ onFilterSubmit }: MovieListFilterProps) => {
  const initialValues: MovieListFilterFormValues = {
    title: '',
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={(values) => {
        onFilterSubmit(values);
      }}
    >
      {() => {
        return (
          <>
            <Form className={styles.form}>
              <TextInputField id="title" name="title" placeholder="Enter movie title" />
              <Button type="submit">Submit</Button>
            </Form>
          </>
        );
      }}
    </Formik>
  );
};

export default MovieListFilter;
