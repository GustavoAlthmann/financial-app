import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default class NotificationService {
  static notifySuccess(message) {
    toast.success(message, {
      position: "top-right",
    });
  }

  static notifyError(message) {
    toast.error(message, {
      position: "top-right",
    });
  }

  static notifyWarning(message) {
    toast.warn(message, {
      position: "top-right",
    });
  }
}
