import React from 'react';
import {
    Box,
    Button,
    ButtonGroup,
    FormControl,
    FormControlLabel,
    FormLabel, Radio,
    RadioGroup,
    Typography
} from '@mui/material';
import LocalMallOutlinedIcon from '@mui/icons-material/LocalMallOutlined';
import LocalMallIcon from '@mui/icons-material/LocalMall';
import LaptopOutlinedIcon from '@mui/icons-material/LaptopOutlined';
import LaptopIcon from '@mui/icons-material/Laptop';
import CheckroomOutlinedIcon from '@mui/icons-material/CheckroomOutlined';
import CheckroomIcon from '@mui/icons-material/Checkroom';
import BookOutlinedIcon from '@mui/icons-material/BookOutlined';
import BookIcon from '@mui/icons-material/Book';

const FilterPanel = ({onFilterChange}) => {
    const categories = [
        {value: 'all', label: 'Все', icon: <LocalMallOutlinedIcon/>, checkedIcon: <LocalMallIcon/>},
        {value: 'electronics', label: 'Техника', icon: <LaptopOutlinedIcon/>, checkedIcon: <LaptopIcon/>},
        {value: 'clothing', label: 'Одежда', icon: <CheckroomOutlinedIcon/>, checkedIcon: <CheckroomIcon/>},
        {value: 'books', label: 'Книжки', icon: <BookOutlinedIcon/>, checkedIcon: <BookIcon/>},
    ];
    return (
        <FormControl>
            <FormLabel id="demo-radio-buttons-group-label">Категории</FormLabel>
            <RadioGroup
                aria-labelledby="demo-radio-buttons-group-label"
                defaultValue={categories[0].value}
                row
                name="radio-buttons-group"
                onChange={(_, value) => onFilterChange(value)}
            >
                {categories.map((category) => (
                    <FormControlLabel
                        key={category.value} value={category.value}
                        control={<Radio icon={category.icon} checkedIcon={category.checkedIcon} />}
                        label={category.label} />
                ))}
            </RadioGroup>
        </FormControl>
        // <Box sx={{display: "flex", gap: 2}}>
        //     <Typography variant="h6" sx={{verticalAlign: 'middle', my: "auto"}}>Категории:</Typography>
        //     <ButtonGroup variant="contained" color='inherit' sx={{my: 2}}>
        //         {categories.map((category) => (
        //             <Button key={category.value} onClick={() => onFilterChange(category.value)}>
        //                 {category.label}
        //             </Button>
        //         ))}
        //     </ButtonGroup>
        // </Box>
    );
};

export default FilterPanel;