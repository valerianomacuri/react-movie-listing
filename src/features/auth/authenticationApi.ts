export interface LoginResponse {
  isAuthenticated: boolean
}

export function fetchLogin(
  email: string,
  password: string,
) {
  return new Promise<LoginResponse>((resolve, reject) => {
    if (
      email === "leonardo.valeriano.2000@gmail.com" &&
      password.length >= 12
    ) {
      setTimeout(
        () =>
          resolve({
            isAuthenticated: true,
          }),
        3000,
      )
    } else {
      setTimeout(
        () =>
          reject(
            "El email no es correcto, el email correcto es leonardo.valeriano.2000@gmail.com",
          ),
        3000,
      )
    }
  })
}
