import React from "react";
import { Link } from "react-router-dom";
import {
    Box,
    Container,
    TextField,
    Typography,
    Divider,
    Grid
} from "@material-ui/core";
import { spacing } from "@material-ui/system";
import { styled } from "@material-ui/core/styles";
import MuiButton from "@material-ui/core/Button";

import { Formik } from "formik";
import SignUnSchema from "./validateSignUp";

import cls from "./page-sign-up.module.scss";

const Button = styled(MuiButton)(spacing);

export const PageSignUp = props => {
    const {
        match,
        match: { path, url }
    } = props;

    const initialValues = {
        first_name: "",
        last_name: "",
        email: "",
        password: ""
    };

    const handleSignUp = values => {};
    return (
        <div className={cls.signInWrapper}>
            <Box p={1}>
                <Container>
                    <Typography align="center" variant="h5">
                        Password Manager
                    </Typography>
                    <Divider variant="fullWidth" />
                    <Box pt={2}>
                        <Typography align="center" variant="h6">
                            Sign Up
                        </Typography>
                        <Formik
                            initialValues={initialValues}
                            validationSchema={SignUnSchema}
                            onSubmit={handleSignUp}
                        >
                            {({
                                errors,
                                touched,
                                handleChange,
                                handleSubmit,
                                values,
                                handleBlur,
                                setErrors
                            }) => {
                                return (
                                    <form
                                        noValidate
                                        autoComplete="off"
                                        onSubmit={handleSubmit}
                                    >
                                        <TextField
                                            required
                                            label="First Name"
                                            fullWidth
                                            name="first_name"
                                            value={values.first_name}
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            error={Boolean(
                                                touched["first_name"] &&
                                                    errors["first_name"]
                                            )}
                                            helperText={errors["first_name"]}
                                        />
                                        <TextField
                                            required
                                            label="Last Name"
                                            fullWidth
                                            name="last_name"
                                            value={values.last_name}
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            error={Boolean(
                                                touched["last_name"] &&
                                                    errors["last_name"]
                                            )}
                                            helperText={errors["last_name"]}
                                        />
                                        <TextField
                                            required
                                            label="Email"
                                            fullWidth
                                            name="email"
                                            value={values.email}
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            error={Boolean(
                                                touched["email"] &&
                                                    errors["email"]
                                            )}
                                            helperText={errors["email"]}
                                        />
                                        <TextField
                                            required
                                            label="Password"
                                            fullWidth
                                            name="password"
                                            value={values.password}
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            error={Boolean(
                                                touched["password"] &&
                                                    errors["password"]
                                            )}
                                            helperText={errors["password"]}
                                        />
                                        <TextField
                                            required
                                            label="Password Confirm"
                                            fullWidth
                                            name="password_confirm"
                                            value={values.password_confirm}
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            error={Boolean(
                                                touched["password_confirm"] &&
                                                    errors["password_confirm"]
                                            )}
                                            helperText={
                                                errors["password_confirm"]
                                            }
                                        />
                                        <Button
                                            variant="contained"
                                            color="primary"
                                            fullWidth
                                            mt={1}
                                        >
                                            Sing Up
                                        </Button>
                                        <Box py={1}>
                                            <Grid
                                                container
                                                direction="row"
                                                justify="space-between"
                                                alignItems="center"
                                            >
                                                <Link to="/auth/forget-password">
                                                    Forget Password?
                                                </Link>
                                                <Link to="/auth/sign-in">
                                                    Sign In
                                                </Link>
                                            </Grid>
                                        </Box>
                                    </form>
                                );
                            }}
                        </Formik>
                    </Box>
                </Container>
            </Box>
        </div>
    );
};

export default PageSignUp;
