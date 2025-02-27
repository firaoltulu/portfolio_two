import * as Yup from 'yup';
import { Form, FormikProvider, useFormik } from 'formik';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';
import { enqueueSnackbar } from 'notistack';
// material
import { TextField, Stack, Typography } from '@mui/material';
import { LoadingButton } from '@mui/lab';
import { useTheme } from '@mui/material/styles';

//
import { varFadeInUp, MotionInView, TextAnimate, varFadeInLeft, varFadeInRight } from '../../animate';
import useIsMountedRef from 'src/hooks/useIsMountedRef';

// ----------------------------------------------------------------------

export default function ContactForm() {
  const theme = useTheme();
  const isMountedRef = useIsMountedRef();
  const isRTL = theme.direction === 'rtl';


  const QuestionSchema = Yup.object().shape({
    Name: Yup.string().required('Name is required'),
    Email: Yup.string().email('Email must be a valid email address').required('Email is required'),
    Subject: Yup.string().required('Subject is required'),
    Message: Yup.string().required('Message is required'),
  });

  const formik = useFormik({

    enableReinitialize: true,

    initialValues: {
      Name: "",
      Email: "",
      Subject: '',
      Message: "",
    },

    validationSchema: QuestionSchema,

    onSubmit: async (values, { setErrors, resetForm, setSubmitting }) => {
      try {
        const newobj = {
          from_name: values.Name,
          from_email: values.Email,
          message: values.Message,
        };

        await emailjs.send('service_373x18j', 'template_3l9xb4n', newobj, 'do-zZ5G9TCljB0czQ');

        enqueueSnackbar(`Thank U For Reaching.I will reply as soon as possible.`, { variant: 'success' });
        resetForm();
        setSubmitting(false);
      }
      catch (error) {
        enqueueSnackbar('Failed please try again...', { variant: 'error' });
        if (isMountedRef.current) {
          setSubmitting(false);
        }

      }

    }

  });

  const { errors, touched, isSubmitting, handleSubmit, getFieldProps, } = formik;



  return (
    <Stack spacing={5} sx={{ color: theme.palette.mode === 'light' ? '#371f0e' : '#fcf2ec' }}>

      <TextAnimate
        text="let's chat!"
        component={motion.h2}

        sx={{
          typography: 'h2',
          'textTransform': 'uppercase',
          'marginTop': '10px',
          'marginBottom': '10px',
          'fontFamily': 'Ade display, sans-serif',
          'fontSize': '3.5em',
          'fontWeight': 400,
        }}
      >

      </TextAnimate>

      <MotionInView variants={varFadeInUp}>
        <Typography sx={{
          color: theme.palette.mode === 'light' ? '#371f0e' : '#fcf2ec',
        }}>
          I’m available for new projects and collaborations..
        </Typography>
      </MotionInView>

      <FormikProvider value={formik}>

        <Form autoComplete="off" noValidate onSubmit={handleSubmit} style={{}}>

          <Stack spacing={1}>

            <MotionInView variants={isRTL ? varFadeInRight : varFadeInLeft}>
              <TextField
                disabled={false}
                fullWidth label="Name"
                {...getFieldProps('Name')}
                error={Boolean(touched.Name && errors.Name)}

              />
            </MotionInView>

            <MotionInView variants={isRTL ? varFadeInRight : varFadeInLeft}>
              <TextField
                disabled={false}
                fullWidth label="Email"
                {...getFieldProps('Email')}
                error={Boolean(touched.Email && errors.Email)}
              />
            </MotionInView>

            <MotionInView variants={isRTL ? varFadeInRight : varFadeInLeft}>
              <TextField
                fullWidth label="Subject"
                {...getFieldProps('Subject')}
                error={Boolean(touched.Subject && errors.Subject)}

              />
            </MotionInView>

            <MotionInView variants={isRTL ? varFadeInRight : varFadeInLeft}>
              <TextField
                fullWidth label="Enter your message here."
                multiline
                rows={4}
                {...getFieldProps('Message')}
                error={Boolean(touched.Message && errors.Message)}
              />
            </MotionInView>

          </Stack>

          <MotionInView variants={isRTL ? varFadeInRight : varFadeInLeft}>
            <LoadingButton size="large" type="submit" variant="contained" loading={isSubmitting}
              sx={{
                mt: 1,
                color: theme.palette.mode === 'light' ? '#fcf2ec' : '#371f0e',
                backgroundColor: theme.palette.mode === 'light' ? '#371f0e' : '#fcf2ec'

              }}
            >
              Submit Now
            </LoadingButton>
          </MotionInView>

        </Form>

      </FormikProvider>

    </Stack>

  );

}
