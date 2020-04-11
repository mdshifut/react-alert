import React from "react";
import Button from "@material-ui/core/Button";
import PropTypes from "prop-types";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";

const ConfirmModal = ({
  onClose,
  title,
  description,
  confirmText,
  cancelText,
  ButtonComponent,
  CustomUI,
}) => {
  const handleClose = () => {
    onClose(false);
  };

  const handleConfirm = () => {
    onClose(true);
  };

  const buttons = ButtonComponent ? (
    <ButtonComponent onClose={onClose} />
  ) : (
    <>
      <Button onClick={handleClose} color="primary">
        {cancelText}
      </Button>
      <Button onClick={handleConfirm} color="primary" autoFocus>
        {confirmText}
      </Button>
    </>
  );

  const AlertUi = () => (
    <>
      <DialogTitle id="alert-dialog-title">{title}</DialogTitle>
      <DialogContent>
        <DialogContentText id="alert-dialog-description">
          {description}
        </DialogContentText>
      </DialogContent>
      <DialogActions>{buttons}</DialogActions>
    </>
  );

  return (
    <Dialog
      open
      onClose={handleClose}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      {CustomUI ? <CustomUI onClose={onClose} /> : <AlertUi />}
    </Dialog>
  );
};

ConfirmModal.propTypes = {
  onClose: PropTypes.func.isRequired,
  title: PropTypes.string,
  description: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.node,
    PropTypes.element,
  ]),
  confirmText: PropTypes.string,
  cancelText: PropTypes.string,
  ButtonComponent: PropTypes.elementType,
  CustomUI: PropTypes.elementType,
};

ConfirmModal.defaultProps = {
  title: "Are you sure?",
  description:
    "Let Google help apps determine location. This means sending anonymous location data to Google, even when no apps are running.",
  confirmText: "Agree",
  cancelText: "Disagree",
  ButtonComponent: null,
  CustomUI: null,
};

export default ConfirmModal;
