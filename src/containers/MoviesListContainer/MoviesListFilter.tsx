import { Form, Formik } from 'formik';
import TextInputField from 'components/TextInputField';
import Button from 'components/Button';
import SelectField, { Option } from 'components/SelectField';

import styles from './MovieListFilters.module.css';

type MovieListFilterProps = {
  onFilterSubmit: (values: MovieListFilterFormValues) => void;
  onFilterReset: (values: MovieListFilterFormValues) => void;
  initialValues: MovieListFilterFormValues;
  genreOptions: Option[];
  sortOptions: Option[];
};

export type MovieListFilterFormValues = {
  title: string;
  genres: string[];
  sort: string;
};

const MoviesListFilter = ({ onFilterSubmit, onFilterReset, initialValues, genreOptions, sortOptions }: MovieListFilterProps): JSX.Element => {
  return (
    <Formik initialValues={initialValues} onReset={onFilterReset} onSubmit={onFilterSubmit}>
      {({ resetForm }) => {
        return (
          <>
            <Form className={styles.form}>
              <TextInputField id="title" name="title" placeholder="Enter movie title" />
              <SelectField className={styles.selectField} id="genres" name="genres" options={genreOptions} placeholder="Select genre" isMulti />
              <SelectField className={styles.selectField} id="sort" name="sort" options={sortOptions} placeholder="Select sorting" />
              <Button className={styles.button} type="submit">
                Submit
              </Button>
              <Button className={styles.button} onClick={resetForm}>
                Reset
              </Button>
            </Form>
          </>
        );
      }}
    </Formik>
  );
};

export default MoviesListFilter;
