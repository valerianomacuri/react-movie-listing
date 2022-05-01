export const getIsAuth = () => {
  return localStorage.getItem("IS_AUTHENTICATED")
    ? JSON.parse(
        localStorage.getItem("IS_AUTHENTICATED") as string,
      )
    : false
}

export const setIsAuth = (isLoggedIn: boolean) => {
  localStorage.setItem(
    "IS_AUTHENTICATED",
    JSON.stringify(isLoggedIn),
  )
}
