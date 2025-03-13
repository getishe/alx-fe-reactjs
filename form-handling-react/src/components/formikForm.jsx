// import React from "react";
// import { Formik, Form, Field, ErrorMessage } from "formik";
// import * as Yup from "yup";

// const FormikForm = () => {
//   // Validation schema using Yup
//   const validationSchema = Yup.object({
//     username: Yup.string().required("Username is required"),
//     email: Yup.string()
//       .email("Invalid email format")
//       .required("Email is required"),
//     password: Yup.string().required("Password is required"),
//   });

//   const initialValues = {
//     username: "",
//     email: "",
//     password: "",
//   };

//   const onSubmit = (values) => {
//     console.log("Form data:", values);
//     alert("Registration Successful!");
//   };

//   return (
//     <Formik
//       initialValues={initialValues}
//       validationSchema={validationSchema}
//       onSubmit={onSubmit}
//     >
//       {({ isSubmitting }) => (
//         <Form>
//           <div>
//             <label htmlFor="username">Username:</label>
//             <Field type="text" id="username" name="username" />
//             <ErrorMessage
//               name="username"
//               component="div"
//               style={{ color: "red" }}
//             />
//           </div>
//           <div>
//             <label htmlFor="email">Email:</label>
//             <Field type="email" id="email" name="email" />
//             <ErrorMessage
//               name="email"
//               component="div"
//               style={{ color: "red" }}
//             />
//           </div>
//           <div>
//             <label htmlFor="password">Password:</label>
//             <Field type="password" id="password" name="password" />
//             <ErrorMessage
//               name="password"
//               component="div"
//               style={{ color: "red", backgroundColor: "red" }}
//               s
//             />
//           </div>
//           <button type="submit" disabled={isSubmitting}>
//             Register
//           </button>
//         </Form>
//       )}
//     </Formik>
//   );
// };

// export default FormikForm;

import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const Formikform = () => {
  const initialValues = {
    username: "",
    email: "",
    password: "",
  };

  const validationSchema = Yup.object({
    username: Yup.string().required("Username is required"),
    email: Yup.string()
      .email("Invalid email format")
      .required("Email is required"),
    password: Yup.string()
      .min(6, "Password must be at least 6 characters")
      .required("Password is required"),
  });

  const onSubmit = (values) => {
    console.log("Form Data:", values);
    alert("Registration successful!");
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      {() => (
        <Form>
          <div>
            <label htmlFor="username">Username</label>
            <Field type="text" name="username" />
            <ErrorMessage name="username" component="div" className="error" />
          </div>
          <div>
            <label htmlFor="email">Email</label>
            <Field type="email" name="email" />
            <ErrorMessage name="email" component="div" className="error" />
          </div>
          <div>
            <label htmlFor="password">Password</label>
            <Field type="password" name="password" />
            <ErrorMessage name="password" component="div" className="error" />
          </div>
          <button type="submit">Register</button>
        </Form>
      )}
    </Formik>
  );
};

export default Formikform;
