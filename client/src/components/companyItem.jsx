import React from 'react';
import {
  Card,
  CardContent,
  Typography,
  List,
  ListItem,
  ListItemText,
  IconButton,
  Box,
} from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';

export default function companyItem({data}){
  return (
    <List>
      {data.map(({companyId,companyName,email,phone,activityStatus}) => (
        <ListItem key={companyId} alignItems="flex-start">
          <Card variant="outlined" sx={{ width: '100%' }}>
            <CardContent sx={{ display: 'flex', justifyContent: 'space-between' }}>
              <Box>
                <Typography variant="h6" component="div">
                  {companyName}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Email: {email}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Phone: {phone}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Status: {activityStatus}
                </Typography>
                {/* Add more fields as needed */}
              </Box>
              <Box>
                <IconButton color="primary" aria-label="edit" onClick={() => onEdit(company)}>
                  <EditIcon />
                </IconButton>
                <IconButton
                  color="secondary"
                  aria-label="delete"
                  onClick={() => onDelete(company)}
                >
                  <DeleteIcon />
                </IconButton>
              </Box>
            </CardContent>
          </Card>
        </ListItem>
      ))}
    </List>
  );
}
