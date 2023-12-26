import PropTypes from "prop-types";
import { useState,useContext } from "react";
import Box from "@mui/material/Box";
import Link from "@mui/material/Link";
import Card from "@mui/material/Card";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import { fCurrency } from "../../utils/format-number";
import Label from "../../components/label";
import { ColorPreview } from "../../components/color-utils";
import LoadingButton from "@mui/lab/LoadingButton";
import {AuthContext} from '../../context/AuthProvider';
import{addSubscriberToInternship} from '../../utils/internshipUtils';

// ----------------------------------------------------------------------
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

function ConfirmDialog({ open, handleClose, handleConfirm }) {
  return (
    <Dialog open={open} onClose={handleClose}>
      <DialogTitle>Xác nhận đồng ý</DialogTitle>
      <DialogContent>
        <DialogContentText>
          Bạn có chắc chắn muốn thực hiện hành động này?
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose} color="primary">
          Hủy bỏ
        </Button>
        <Button onClick={handleConfirm} color="primary">
          Đồng ý
        </Button>
      </DialogActions>
    </Dialog>
  );
}

export default function ShopProductCard({ product }) {
  const [loading, setLoading] = useState(false);
  const {user:{uid}} = useContext(AuthContext);
  const [confirmDialogOpen, setConfirmDialogOpen] = useState(false);




  const handleOpenConfirmDialog = () => {
    setConfirmDialogOpen(true);
  };

  const handleCloseConfirmDialog = () => {
    setConfirmDialogOpen(false);
  };

  const handleConfirmAction = () => {
    // Thực hiện hành động xác nhận đồng ý ở đây
    // Đóng popup sau khi hoàn thành hành động
    setConfirmDialogOpen(false);
  };






  async function handleClick() {
    setLoading(true);
    const fetchInternshipData = async () => {
      try {
        const result = await addSubscriberToInternship(product.internshipId, uid);
        console.log('Result:', result);
      } catch (error) {
        console.error('Error:', error);
      }
    };

    fetchInternshipData();

    setLoading(false);
  }


  





  const renderStatus = (
    <Label
      variant="filled"
      color={(product.status === "sale" && "error") || "info"}
      sx={{
        zIndex: 9,
        top: 16,
        right: 16,
        position: "absolute",
        textTransform: "uppercase",
      }}
    >
      {product.status}
    </Label>
  );

  const renderImg = (
    <Box
      component="img"
      alt={product.companyName}
      src={product.avatarUrl}
      sx={{
        top: 0,
        width: 1,
        height: 1,
        objectFit: "cover",
        position: "absolute",
      }}
    />
  );

  const renderPrice = (
    <Typography variant="subtitle1">
      {/* <Typography
        component="span"
        variant="body1"
        sx={{
          color: 'text.disabled',
          textDecoration: 'line-through',
        }}
      >
        {product.priceSale && fCurrency(product.priceSale)}
      </Typography>
      &nbsp;
      {fCurrency(product.price)} */}
      {product.position}
    </Typography>
  );

  return (
    <Card>
      <Box sx={{ pt: "100%", position: "relative" }}>
        {product.status && renderStatus}

        {renderImg}
      </Box>

      <Stack spacing={2} sx={{ p: 3 }}>
        <Link color="inherit" underline="hover" variant="subtitle2" noWrap>
          {product.companyName}
        </Link>

        <Stack
          direction="row"
          alignItems="center"
          justifyContent="space-between"
        >
          {/* <ColorPreview colors={product.colors} /> */}
          <ColorPreview colors={["#00AB55","#FFFFFF"]} />
          {renderPrice}
        </Stack>
        <Typography>
          {product.information.length > 30
            ? `${product.information.substring(0, 30)}...`
            : product.information}
        </Typography>
      </Stack>
     
      <LoadingButton
        onClick={handleOpenConfirmDialog}
        loading={loading}
        loadingIndicator="Loading…"
        variant="outlined"
        style={{ width: "80%", marginLeft: "10%", marginBottom: "5%" }}
      >
        <span>Đăng ký</span>
      </LoadingButton>
      <ConfirmDialog 
        open={confirmDialogOpen}
        handleClose={handleCloseConfirmDialog}
        handleConfirm={handleConfirmAction}
      />
    </Card>
    
  );
}

ShopProductCard.propTypes = {
  product: PropTypes.object,
};
