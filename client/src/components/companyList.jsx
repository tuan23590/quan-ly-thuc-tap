import { Box, Typography } from "@mui/material";
import React from "react";
import CompanyItem from './companyItem';
import {useLoaderData} from 'react-router-dom'
export default function companyList(){
    const {companys} = useLoaderData();
      return (
        <div>
          <Typography variant="h4"sx={{width: '100%', textAlign: 'Center',marginTop: '10px'}}>
            Company List
          </Typography>
          <CompanyItem data={companys} />
        </div>
      );
}
