import { Card, CardContent, List, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

export default function internshipPostList({ data }) {
  return (
    <List sx={{ overflowY: "auto" }}>
      {data.map(({ createDate, studentId,status,companyId}) => {
        return (
          <Link
            key={studentId}
            to={`internshipList/${studentId}`}
            style={{ textDecoration: "none" }}
          >
            <Card sx={{ marginBottom: "10px" }}>
              <CardContent
                sx={{ "&:last-child": { pb: "10px" }, padding: "10px" }}
              >
                <Typography>
                  <b>Ngày tạo: </b> {createDate}
                </Typography>
                <Typography>
                  <b>Trạng thái: </b> {status}
                </Typography>
              </CardContent>
            </Card>
          </Link>
        );
      })}
    </List>
  );
}
