/* eslint-disable camelcase */
import React, { useState, useReducer } from "react";

import DoneIcon from "@mui/icons-material/Done";
import LoadingButton from "@mui/lab/LoadingButton";
import Container from "@mui/material/Container";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import { useParams } from "react-router-dom";

import { useEmailValidate, createSubmission } from "@/hooks";

const validEmail = new RegExp("^[a-zA-Z0-9._:$!%-]+@[a-zA-Z0-9.-]+.[a-zA-Z]$");

type State = {
    fullName: string;
    email: string;
    query: string;
    errors: {
        email?: string;
    };
};

type Action = {
    [key: string]: string;
};

const reducer = (state: State, action: Action): State => {
    let error;

    switch (action.type) {
        case "fullName":
            return { ...state, fullName: action.value };
        case "email":
            if (!validEmail.test(action.value.toLowerCase())) {
                error = "Please enter a valid email address";
            }
            return {
                ...state,
                email: action.value,
                errors: { ...state.errors, email: error },
            };
        case "query":
            return { ...state, query: action.value };
        default:
            throw new Error(`Unhandled action type: ${action.type}`);
    }
};

const init = {
    fullName: "",
    email: "",
    query: "",
    errors: {},
};

const url = "/.netlify/functions/contact";

const Contact = (): JSX.Element => {
    const { slug } = useParams();

    const [state, dispatch] = useReducer(reducer, init);
    const [submitting, setSubmitting] = useState<boolean>(false);
    const [submitted, setSubmitted] = useState<boolean>(false);
    const formCheck = useEmailValidate(state);

    const handleSubmit = async () => {
        setSubmitting(true);

        const data = {
            full_name: state.fullName,
            email: state.email,
            query: state.query,
        };

        createSubmission({
            url,
            data,
            setSubmitting,
            setSubmitted,
        });
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        dispatch({ type: name, value: value });
    };

    if (slug === "contact")
        return (
            <Stack
                id="contact-form"
                sx={{ py: 6, backgroundColor: "background.default" }}
                justifyContent="center"
                alignItems="center"
                spacing={2}>
                {submitted && (
                    <DoneIcon sx={{ fontSize: 100, color: "success.main" }} />
                )}
                <Typography
                    id="contact-headline"
                    gutterBottom
                    align="center"
                    variant="h4"
                    sx={{ mt: 6, mb: 2 }}>
                    {!submitted
                        ? "Transform Your Garden with Our Expert Maintenance Solutions - Reach Out Today!"
                        : "Thank you for getting in touch, we will get back to you shortly."}
                </Typography>
                {!submitted && (
                    <Container component={Stack} spacing={2} maxWidth="md">
                        <TextField
                            size="medium"
                            name="fullName"
                            onChange={handleChange}
                            fullWidth
                            label="Full Name"
                        />
                        <TextField
                            name="email"
                            size="medium"
                            helperText={state.errors.email}
                            error={state.errors.email ? true : false}
                            onChange={handleChange}
                            type="email"
                            fullWidth
                            label="Email Address"
                        />
                        <TextField
                            name="query"
                            size="medium"
                            onChange={handleChange}
                            fullWidth
                            label="Enquiry"
                            multiline
                            rows={4}
                        />
                        <LoadingButton
                            id="contact-submit"
                            size="large"
                            variant="contained"
                            fullWidth
                            disabled={!formCheck}
                            loading={submitting}
                            onClick={handleSubmit}>
                            Get in touch
                        </LoadingButton>
                    </Container>
                )}
            </Stack>
        );
    return <></>;
};

export default Contact;
