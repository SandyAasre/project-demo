import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import { Button, IconButton } from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
import RemoveIcon from "@material-ui/icons/Remove";
import styled from "styled-components";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import Badge from "@material-ui/core/Badge";
import { withStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";
const Table = styled.table`
  width: 100%;
`;
const Tb = styled.td`
  width: 33%;
`;
const ButtonContainer = styled.div`
  float: right;
  margin: 10px;
`;
const CShoppingCartIcon = styled(ShoppingCartIcon)`
  &.MuiSvgIcon-root {
    color: white;
  }
`;
const StyledBadge = withStyles((theme) => ({
  badge: {
    right: -3,
    top: 13,
    border: `2px solid ${theme.palette.background.paper}`,
    padding: "0 4px",
    backgroundColor: "blue",
  },
}))(Badge);

function getModalStyle() {
  return {
    top: `50%`,
    left: `50%`,
    transform: `translate(-50%, -50%)`,
  };
}

const useStyles = makeStyles((theme) => ({
  paper: {
    position: "absolute",
    width: 600,
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
    borderRadius: 10,
  },
}));

export default function SimpleModal() {
  const classes = useStyles();
  const [modalStyle] = React.useState(getModalStyle);
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const body = (
    <div style={modalStyle} className={classes.paper}>
      <h2 id="simple-modal-title">Order Summary</h2>
      <Table>
        <tbody>
          <tr>
            <Tb>Coke</Tb>
            <Tb>2</Tb>
            <Tb>
              <Button size="small" color="primary" variant="contained">
                <AddIcon />
              </Button>
              <Button
                size="small"
                style={{ backgroundColor: "#e75480" }}
                variant="contained"
              >
                <RemoveIcon />
              </Button>
            </Tb>
          </tr>
          <tr>
            <Tb>Fries</Tb>
            <Tb>1</Tb>
            <Tb>
              <Button size="small" color="primary" variant="contained">
                <AddIcon />
              </Button>
              <Button
                size="small"
                style={{ backgroundColor: "#e75480" }}
                variant="contained"
              >
                <RemoveIcon />
              </Button>
            </Tb>
          </tr>
          <tr>
            <Tb>Total (INR): 200</Tb>
            <Tb></Tb>
            <Tb></Tb>
          </tr>
        </tbody>
      </Table>
      <ButtonContainer>
        <Button
          size="small"
          color="primary"
          variant="contained"
          style={{ marginRight: "10px" }}
          component={Link
          } to='/checkout'
          onClick={handleClose}
        >
          SAVE AND CHECKOUT
        </Button>
        <Button size="small" color="primary">
          CANCEL
        </Button>
      </ButtonContainer>
    </div>
  );

  return (
    <div>
      <IconButton aria-label="cart" onClick={handleOpen} >
        <StyledBadge badgeContent={4} color="secondary">
          <CShoppingCartIcon />
        </StyledBadge>
      </IconButton>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        {body}
      </Modal>
    </div>
  );
}
