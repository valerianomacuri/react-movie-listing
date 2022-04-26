export const shortTitle = (title: string) =>
  title.length > 23
    ? title.substring(0, 23) + " ..."
    : title
