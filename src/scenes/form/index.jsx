import React from "react";

import * as yup from "yup";
import { Box, Button, TextField, useMediaQuery } from "@mui/material";
import { Formik } from "formik";
import Header from "../../components/Header";

const initialValues = {
	firstName: "",
	lastName: "",
	email: "",
	contact: "",
	address1: "",
	address2: "",
};

// Regular Expression for phone number from Stack overflow😁
const phoneRegExpr = /^(\+\d{1,2}\s)?\(?\d{3}\)?[\s.-]\d{3}[\s.-]\d{4}$/;

// Input Fields validation using yup
const userSchema = yup.object().shape({
	firstName: yup.string().required("required"),
	lastName: yup.string().required("required"),
	email: yup.string().email("Invalid Email").required("required"),
	contact: yup.string().matches(phoneRegExpr, "Invalid Phone Number").required("required"),
	address1: yup.string().required("required"),
	address2: yup.string().required("required"),
});

const Form = function () {
	const isNonMobile = useMediaQuery("(min-width: 600px)");

	// Log submitted values from form to the console
	const handleFormSubmit = function (values) {
		console.log(values);
	};

	return (
		<Box m="20px">
			<Header title="CREATE USER" subtitle="Create a New User Profile" />

			<Formik
				onSubmit={handleFormSubmit}
				initialValues={initialValues}
				validationSchema={userSchema}
			>
				{({ values, errors, touched, handleBlur, handleChange, handleSubmit }) => (
					<form onSubmit={handleSubmit}>
						<Box
							display="grid"
							gap="30px"
							gridTemplateColumns="repeat(4, min-max(0, 1fr))"
							sx={{ "& > div": { gridColumn: isNonMobile ? undefined : "span 4" } }}
						>
							<TextField
								fullWidth
								variant="filled"
								type="text"
								label="First Name"
								onBlur={handleBlur}
								onChange={handleChange}
								values={values.firstName}
								name="firstName"
								error={!!touched.firstName && !!errors.firstName}
								helperText={touched.firstName && errors.firstName}
								sx={{ gridColumn: "span 2" }}
							/>
							<TextField
								fullWidth
								variant="filled"
								type="text"
								label="Last Name"
								onBlur={handleBlur}
								onChange={handleChange}
								values={values.LastName}
								name="firstName"
								error={!!touched.lastName && !!errors.lastName}
								helperText={touched.lastName && errors.lastName}
								sx={{ gridColumn: "span 2" }}
							/>
							<TextField
								fullWidth
								variant="filled"
								type="text"
								label="Email"
								onBlur={handleBlur}
								onChange={handleChange}
								values={values.email}
								name="email"
								error={!!touched.email && !!errors.email}
								helperText={touched.email && errors.email}
								sx={{ gridColumn: "span 4" }}
							/>
							<TextField
								fullWidth
								variant="filled"
								type="text"
								label="Contact Number"
								onBlur={handleBlur}
								onChange={handleChange}
								values={values.contact}
								name="contact"
								error={!!touched.contact && !!errors.contact}
								helperText={touched.contact && errors.contact}
								sx={{ gridColumn: "span 4" }}
							/>
							<TextField
								fullWidth
								variant="filled"
								type="text"
								label="Address 1"
								onBlur={handleBlur}
								onChange={handleChange}
								values={values.address1}
								name="address1"
								error={!!touched.address1 && !!errors.address1}
								helperText={touched.address1 && errors.address1}
								sx={{ gridColumn: "span 4" }}
							/>
							<TextField
								fullWidth
								variant="filled"
								type="text"
								label="Address 2"
								onBlur={handleBlur}
								onChange={handleChange}
								values={values.address2}
								name="address2"
								error={!!touched.address2 && !!errors.address2}
								helperText={touched.address2 && errors.address2}
								sx={{ gridColumn: "span 4" }}
							/>
						</Box>

						{/* BUTTON */}
						<Box display="flex" justifyContent="end" mt="20px">
							<Button type="submit" variant="contained" color="secondary">
								Create New User
							</Button>
						</Box>
					</form>
				)}
			</Formik>
		</Box>
	);
};

export default Form;
