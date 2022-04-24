import theme from "@/theme"
import Swal from "sweetalert2"
import "./alerts.css"

type AlertProps = {
  title: String
  text?: String
  type: "success" | "error" | "info"
}
export const customAlert = ({
  title,
  text,
  type,
}: AlertProps) => {
  return Swal.fire({
    title: `<h4 class='AlertTitle'>${title}</h4>`,
    icon: type,
    iconColor: theme.colors.grey[600],
    html: `
      <p class="AlertParagraph">
      ${text}
      </p>
    `,
    background: "rgba(18, 24, 41, 0.8)",
    showCloseButton: true,
    showConfirmButton: false,
  })
}
