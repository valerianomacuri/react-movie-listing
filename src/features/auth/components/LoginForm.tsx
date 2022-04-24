import styled from "styled-components"
import * as Yup from "yup"
import { useAppDispatch } from "@/app/hooks"
import { Formik } from "formik"
import { Button, InputText, Typography } from "@/components"
import { css } from "styled-components"
import { login, useAuth } from "../authSlice"

const styles = css`
  display: flex;
  flex-direction: column;
  gap: 16px;
  width: 100%;
  & > button {
    margin-top: calc(40px - 16px);
  }
  & > ${Typography} {
    margin-bottom: calc(40px - 16px);
  }
`

export const LoginForm = styled(({ ...rest }) => {
  const dispatch = useAppDispatch()
  const { status } = useAuth()
  return (
    <Formik
      initialValues={{
        email: "leonardo.valeriano.2000@gmail.com",
        password: "12345678",
      }}
      onSubmit={values => {
        dispatch(login(values))
      }}
      validationSchema={Yup.object({
        email: Yup.string()
          .email("Debe de ser un email")
          .required("Este valor es requerido"),
        password: Yup.string()
          .min(
            12,
            "La contraseña es cualquier combinación de carácteres mayor a once",
          )
          .required("Este campo es requerido"),
      })}
    >
      {({
        handleSubmit,
        getFieldProps,
        errors,
        touched,
      }) => (
        <form onSubmit={handleSubmit} {...rest} noValidate>
          <Typography as={"h1"} variant="h1">
            Login
          </Typography>
          <InputText
            inputProps={{
              type: "email",
              ...getFieldProps("email"),
            }}
            label="Email"
            fullWidth
            error={!!errors.email && touched.email}
            helperText={
              errors.email && touched.email
                ? errors.email
                : null
            }
          />
          <InputText
            inputProps={{
              type: "password",
              ...getFieldProps("password"),
            }}
            label="Password"
            fullWidth
            error={!!errors.password && touched.password}
            helperText={
              errors.password && touched.password
                ? errors.password
                : null
            }
          />
          <Button
            type="submit"
            fullWidth
            loading={status === "loading"}
          >
            Login
          </Button>
        </form>
      )}
    </Formik>
  )
})`
  ${styles}
`
