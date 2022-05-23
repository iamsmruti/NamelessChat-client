import * as React from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';

const MemoCard = ({ memo, handleDelete }) => {
    return (
        <Card elevation={1} sx={{ maxWidth: 345 }}>
            <CardHeader
                avatar={
                    <Avatar 
                        sx={{ bgcolor: red[500] }} 
                    >
                        {memo.category[0].toUpperCase()}
                    </Avatar>
                }
                action={
                    <IconButton onClick={() => handleDelete(memo._id)}>
                        <DeleteOutlineIcon />
                    </IconButton>
                }
                title={memo.title}
                subheader={memo.category}
            />
            <CardContent>
                <Typography variant="body2" color="text.secondary">
                    {memo.details}
                </Typography>
            </CardContent>
        </Card>
    );
}

export default MemoCard;