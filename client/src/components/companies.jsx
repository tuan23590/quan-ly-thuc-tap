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


export default function compani({ companies, onEdit, onDelete }){
  return (
    <List>
      {companies.map((company) => (
        <ListItem key={company.companyId} alignItems="flex-start">
          <Card variant="outlined" sx={{ width: '100%' }}>
            <CardContent sx={{ display: 'flex', justifyContent: 'space-between' }}>
              <Box>
                <Typography variant="h6" component="div">
                  {company.companyName}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Email: {company.email}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Phone: {company.phone}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Status: {company.activityStatus}
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
