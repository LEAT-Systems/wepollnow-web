import swal from "sweetalert";

const SwalAlert = async (props) => {
  const swalres = await swal({
    title: props.title,
    icon: props.icon,
    buttons: {
      confirm: {
        text: "Close",
        className: "swalButton",
      },
    },
  }).then(() => props.close);
  return swalres;
};

export default SwalAlert;
