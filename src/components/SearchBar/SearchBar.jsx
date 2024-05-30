import { Formik, Form, Field } from "formik";
import { Toaster, toast } from 'react-hot-toast';
import css from './SearchBar.module.css';

export default function SearchBar({onSubmit}) {
    return (
        <header className={css.header}>
            <Toaster
                position='top-right'
                reverseOrder={false}
            />
            <Formik
                initialValues={{
                    query: '',
                }}
                onSubmit={(values, actions) => {
                    if (values.query !== '') {
                        onSubmit(values.query);
                        actions.resetForm();
                    } else {
                        toast.error('Some text must be entered to search for images', {
                            duration: 2000,
                            style: {
                                border: '2px solid #2a2a2a',
                                padding: '12px',
                                color: '#2a2a2a',
                            }
                        });
                    }
                    
                }}
            >
                <Form className={css.form}>
                    <Field
                        className={css.input}
                        type='text'
                        name='query'
                        placeholder='Search images and photos'
                    />
                    <button type="submit">Search</button>
                </Form>
            </Formik>
        </header>
    );
}