// /* eslint-disable no-undef */
// /* eslint-disable no-unused-vars */
// import { Link, useNavigate,useLocation } from 'react-router-dom';
// import { Formik, Form, Field, ErrorMessage } from 'formik';
// import * as Yup from 'yup';
// import axios from 'axios';
// import toast, { Toaster } from 'react-hot-toast';
// import { Smartphone, Mail, User } from 'lucide-react';
// import { useState, useEffect } from 'react';


// // Define the Yup schema for validation
// const validationSchema = Yup.object().shape({
//   name: Yup.string()
//     .matches(/^[a-zA-Z\s]+$/, 'Name can only contain letters and spaces')
//     .required('Name is required'),
//   email: Yup.string()
//     .email('Invalid email address')
//     .matches(/@.*\.com$/, { message: 'Email must include "@" and end with ".com"' })
//     .required('Email is required'),
//   phone_no: Yup.string()
//     .matches(/^[0-9]{10}$/, 'Mobile number must be 10 digits')
//     .required('Mobile number is required'),
// });

// // Custom validation function combining Yup and Zod
// const validate = async (values) => {
//   try {
//     await validationSchema.validate(values, { abortEarly: false });
//   } catch (yupError) {
//     return yupError.inner.reduce((acc, err) => {
//       acc[err.path] = err.message;
//       return acc;
//     }, {});
//   }

//   try {
//     phoneSchema.parse({ phone_no: values.phone_no });
//   } catch (zodError) {
//     return zodError.errors.reduce((acc, err) => {
//       acc[err.path] = err.message;
//       return acc;
//     }, {});
//   }
//   return {};
// };

// function SignUp() {
//   const navigate = useNavigate();
//   const type = 'verification';
//   const [userEmail, setUserEmail] = useState('');
//   const location = useLocation();

//   useEffect(() => {
//     if (localStorage.getItem('inviteToken') && location.state?.email) {
//       setUserEmail(location.state.email);
//     }
//   },[location.state]);

//   const handleSubmit = async (values, { setSubmitting, resetForm }) => {
//     const { name, email, phone_no } = values;
//     try {
//       const response = await axios.get(`${import.meta.env.VITE_API}/send-otp?phone_no=${phone_no}&type=${type}`, {
//         headers: {
//           'X-Requested-With': 'XMLHttpRequest',
//         },
//       });
//       if (response.status === 200) {
//         const data = {
//           otps: response.data.otp,
//           name,
//           email,
//           phone_no,
//           type,
//         };
//         navigate('/otp', { state: data });
//       }
//     } catch (error) {
//       toast.error('Something went wrong');
//       console.error('Error:', error);
//     } finally {
//       setSubmitting(false);
//       resetForm();
//     }
//   };

//   return (
//     <div className="w-full h-svh flex items-center justify-center bg-primaryColor">
//       <div className="w-full max-w-md p-6 md:p-9 shadow-md bg-primaryColor">
//         <h2 className="text-4xl font-semibold text-center text-white font-nunito">Sign Up</h2>
//         <Formik
//           initialValues={{ type: '', phone_no: '', name: '', email: userEmail }}
//           validationSchema={validationSchema}
//           onSubmit={handleSubmit}
//         >
//           {({ isSubmitting, setFieldValue }) => (
//             <div className="mt-7 gap-4">
//               <Form>
//                 <div className="flex flex-col gap-3">
//                   <div className="flex items-center gap-3">
//                     <User className="text-white" />
//                     <Field
//                       type="text"
//                       id="name"
//                       name="name"
//                       placeholder="Full Name"
//                       className="w-full p-2 text-base border-b-2 bg-transparent text-white font-nunito focus:outline-none"
//                     />
//                   </div>
//                   <div className="flex justify-start ml-8 md:justify-start">
//                     <ErrorMessage name="name" component="div" className="text-sm text-red-500" />
//                   </div>

//                   <div className="flex items-center gap-3">
//                     <Mail className="text-white" />
//                     <Field
//                       type="email"
//                       id="email"
//                       name="email"
//                       placeholder="Email"
//                       className="w-full p-2 text-base border-b-2 bg-transparent text-white font-nunito focus:outline-none"
//                     />
//                   </div>
//                   <div className="flex justify-start md:justify-start ml-8">
//                     <ErrorMessage name="email" component="div" className="text-sm text-red-500" />
//                   </div>

//                   <div className="flex items-center gap-3">
//                     <Smartphone className="text-white" />
//                     <Field
//                       type="text"
//                       id="phone_no"
//                       name="phone_no"
//                       inputMode="numeric"
//                       className="w-full p-2 bg-transparent text-base border-b-2 text-white font-nunito focus:outline-none"
//                       placeholder="Phone"
//                       onChange={(e) => {
//                         const value = e.target.value;
//                         if (/^\d*$/.test(value) && value.length <= 10) {
//                           setFieldValue('phone_no', value);
//                         }
//                       }}
//                     />
//                   </div>
//                   <div className="flex justify-start md:justify-start ml-8">
//                     <ErrorMessage name="phone_no" component="div" className="text-sm text-red-500" />
//                   </div>
//                 </div>

//                 <div className="flex justify-center ">
//                   <button
//                     type="submit"
//                     className="w-2/4 mt-9 py-2 font-bold text-lg text-black rounded-full bg-buttonColor font-nunito"
//                     disabled={isSubmitting}
//                   >
//                     {isSubmitting ? 'Submitting...' : 'Submit'}
//                   </button>
//                 </div>

//                 <div className="flex justify-center mt-4">
//                   <h2 className="text-sm font-medium text-white font-nunito">
//                     Already have an account? <Link to="/signin" className="text-textColor">Log in</Link>
//                   </h2>
//                 </div>
//               </Form>
//             </div>
//           )}
//         </Formik>
//       </div>
//     </div>
//   );
// }

// export default SignUp;

/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import toast, { Toaster } from 'react-hot-toast';
import { Smartphone, Mail, User } from 'lucide-react';
import { useState, useEffect } from 'react';

// Define the Yup schema for validation 
const validationSchema = Yup.object().shape({
  name: Yup.string()
    .matches(/^[a-zA-Z\s]+$/, 'Name can only contain letters and spaces')
    .required('Name is required'),
  email: Yup.string()
    .email('Invalid email address')
    .matches(/@.*\.com$/, { message: 'Email must include "@" and end with ".com"' })
    .required('Email is required'),
  phone_no: Yup.string()
    .matches(/^[0-9]{10}$/, 'Mobile number must be 10 digits')
    .required('Mobile number is required'),
});

function SignUp() {
  const navigate = useNavigate();
  const type = 'verification';
  const [userEmail, setUserEmail] = useState('');
  const location = useLocation();

  useEffect(() => {
    if (localStorage.getItem('inviteToken') && location.state?.email) {
      setUserEmail(location.state.email);
      console.log('Email:', location.state.email);
    }
  }, [location.state]);

  const handleSubmit = async (values, { setSubmitting, resetForm }) => {
    const { name, email, phone_no } = values;
    try {
      const response = await axios.get(`${import.meta.env.VITE_API}/send-otp?phone_no=${phone_no}&type=${type}`, {
        headers: {
          'X-Requested-With': 'XMLHttpRequest',
        },
      });
      if (response.status === 200) {
        const data = {
          otps: response.data.otp,
          name,
          email,
          phone_no,
          type,
        };
        navigate('/otp', { state: data });
      }
    } catch (error) {
      toast.error('Something went wrong');
      console.error('Error:', error);
    } finally {
      setSubmitting(false);
      resetForm();
    }
  };

  return (
    <div className="w-full h-svh flex items-center justify-center bg-primaryColor">
      <div className="w-full max-w-md p-6 md:p-9 shadow-md bg-primaryColor">
        <h2 className="text-4xl font-semibold text-center text-white font-nunito">Sign Up</h2>
        <Formik
          initialValues={{ type: '', phone_no: '', name: '', email: userEmail }}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          {({ isSubmitting, setFieldValue }) => {
            useEffect(() => {
              if (userEmail) {
                setFieldValue('email', userEmail);
              }
            }, [userEmail, setFieldValue]);

            return (
              <div className="mt-7 gap-4">
                <Form>
                  <div className="flex flex-col gap-3">
                    <div className="flex items-center gap-3">
                      <User className="text-white" />
                      <Field
                        type="text"
                        id="name"
                        name="name"
                        placeholder="Full Name"
                        className="w-full p-2 text-base border-b-2 bg-transparent text-white font-nunito focus:outline-none"
                      />
                    </div>
                    <div className="flex justify-start ml-8 md:justify-start">
                      <ErrorMessage name="name" component="div" className="text-sm text-red-500" />
                    </div>

                    <div className="flex items-center gap-3">
                      <Mail className="text-white" />
                      <Field
                        type="email"
                        id="email"
                        name="email"
                        placeholder="Email"
                        className="w-full p-2 text-base border-b-2 bg-transparent text-white font-nunito focus:outline-none"
                      />
                    </div>
                    <div className="flex justify-start md:justify-start ml-8">
                      <ErrorMessage name="email" component="div" className="text-sm text-red-500" />
                    </div>

                    <div className="flex items-center gap-3">
                      <Smartphone className="text-white" />
                      <Field
                        type="text"
                        id="phone_no"
                        name="phone_no"
                        inputMode="numeric"
                        className="w-full p-2 bg-transparent text-base border-b-2 text-white font-nunito focus:outline-none"
                        placeholder="Phone"
                        onChange={(e) => {
                          const value = e.target.value;
                          if (/^\d*$/.test(value) && value.length <= 10) {
                            setFieldValue('phone_no', value);
                          }
                        }}
                      />
                    </div>
                    <div className="flex justify-start md:justify-start ml-8">
                      <ErrorMessage name="phone_no" component="div" className="text-sm text-red-500" />
                    </div>
                  </div>

                  <div className="flex justify-center ">
                    <button
                      type="submit"
                      className="w-2/4 md:w-1/3 mt-9 py-2 font-bold text-lg text-black rounded-full bg-buttonColor font-nunito"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? 'Wait...' : 'Submit'}
                    </button>
                  </div>

                  <div className="flex justify-center mt-4">
                    <h2 className="text-sm font-medium text-white font-nunito">
                      Already have an account? <Link to="/signin" className="text-textColor">Log in</Link>
                    </h2>
                  </div>
                </Form>
              </div>
            );
          }}
        </Formik>
      </div>
    </div>
  );
}

export default SignUp;