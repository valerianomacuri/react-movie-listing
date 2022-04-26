import { Form, Formik } from "formik"
import * as Yup from "yup"
import { useAppDispatch } from "@/app/hooks"
import { login, useAuth } from "../authSlice"
import {
  Button,
  FormControl,
  FormErrorMessage,
  Input,
  Text,
} from "@chakra-ui/react"

export const LoginForm = () => {
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
        <Form
          onSubmit={handleSubmit}
          noValidate
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "16px",
            width: "100%",
          }}
        >
          <Text
            as="h1"
            fontSize={"6xl"}
            fontWeight="bold"
            marginBottom={"calc(40px - 16px)"}
          >
            Login
          </Text>
          <FormControl
            isInvalid={
              (errors.email && touched.email) as boolean
            }
          >
            <Input
              id="email"
              type={"email"}
              placeholder="Email"
              {...getFieldProps("email")}
            />
            <FormErrorMessage>
              {errors.email && touched.email
                ? errors.email
                : null}
            </FormErrorMessage>
          </FormControl>
          <FormControl
            isInvalid={
              (errors.password &&
                touched.password) as boolean
            }
          >
            <Input
              id="password"
              placeholder="Password"
              type="password"
              {...getFieldProps("password")}
            />
            <FormErrorMessage>
              {errors.password && touched.password
                ? errors.password
                : null}
            </FormErrorMessage>
          </FormControl>
          <Button
            type="submit"
            w="full"
            isLoading={status === "loading"}
            size={"lg"}
            marginTop="calc(40px - 16px)"
          >
            Login
          </Button>
        </Form>
      )}
    </Formik>
  )
}
