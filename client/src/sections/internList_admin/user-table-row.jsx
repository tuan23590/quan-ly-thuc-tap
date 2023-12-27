import { useState } from "react";
import PropTypes from "prop-types";

import Stack from "@mui/material/Stack";
import Avatar from "@mui/material/Avatar";
import Popover from "@mui/material/Popover";
import TableRow from "@mui/material/TableRow";
import Checkbox from "@mui/material/Checkbox";
import MenuItem from "@mui/material/MenuItem";
import TableCell from "@mui/material/TableCell";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";

import Label from "../../components/label";
import Iconify from "../../components/iconify";

// ----------------------------------------------------------------------

export default function UserTableRow({
  internId,
  selected,
  internName,
  avatarUrl,
  phone,
  email,
  classOfIntern,
  status,
  dateOfBirth,
  handleClick,
}) {
  const [open, setOpen] = useState(null);

  const handleOpenMenu = (event) => {
    setOpen(event.currentTarget);
  };

  const handleCloseMenu = () => {
    setOpen(null);
  };

  return (
    <>
      <TableRow hover tabIndex={-1} role="checkbox" selected={selected}>

      <TableCell padding="checkbox">
          <Checkbox disableRipple checked={selected} onChange={handleClick} />
        </TableCell>

        <TableCell component="th" scope="row" padding="none">
          <Stack direction="row" alignItems="center" spacing={2}>
            <Avatar alt={internName} src={avatarUrl} />
          </Stack>
        </TableCell>

        <TableCell>{internId}</TableCell>

        <TableCell>{internName}</TableCell>

        <TableCell>{classOfIntern}</TableCell>

        <TableCell>{dateOfBirth}</TableCell>

        <TableCell>{phone}</TableCell>

        <TableCell>{email}</TableCell>


        <TableCell>
          <Label
            color={
              (status === "Chưa tham gia thực tập" && "error") || "success"
            }
          >
            {status}
          </Label>
        </TableCell>

        <TableCell align="right">
          <IconButton onClick={handleOpenMenu}>
            <Iconify icon="eva:more-vertical-fill" />
          </IconButton>
        </TableCell>
      </TableRow>

      <Popover
        open={!!open}
        anchorEl={open}
        onClose={handleCloseMenu}
        anchorOrigin={{ vertical: "top", horizontal: "left" }}
        transformOrigin={{ vertical: "top", horizontal: "right" }}
        PaperProps={{
          sx: { width: 140 },
        }}
      >
        <MenuItem onClick={handleCloseMenu}>
          <Iconify icon="eva:edit-fill" sx={{ mr: 2 }} />
          Edit
        </MenuItem>

        <MenuItem onClick={handleCloseMenu} sx={{ color: "error.main" }}>
          <Iconify icon="eva:trash-2-outline" sx={{ mr: 2 }} />
          Delete
        </MenuItem>
      </Popover>
    </>
  );
}

UserTableRow.propTypes = {
  avatarUrl: PropTypes.any,
  phone: PropTypes.any,
  handleClick: PropTypes.func,
  classOfIntern: PropTypes.any,
  internName: PropTypes.any,
  email: PropTypes.any,
  selected: PropTypes.any,
  status: PropTypes.string,
};
