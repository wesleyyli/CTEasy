import "./calendar.scss";
import React, { useState } from 'react';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { StaticDatePicker } from '@mui/x-date-pickers/StaticDatePicker';
import { DateCalendar } from '@mui/x-date-pickers/DateCalendar';
import dayjs from 'dayjs';
import Badge from '@mui/material/Badge';
import { PickersDay } from '@mui/x-date-pickers/PickersDay';
import { DayCalendarSkeleton } from '@mui/x-date-pickers/DayCalendarSkeleton';
import { styled } from '@mui/material/styles';
import { SIZE } from "rsuite/esm/utils/constants";
import { Today } from "@mui/icons-material";

const Calendar = ({ title }) => {
    const [date, setDate] = useState(new Date());
    const [highlightedDays, setHighlightedDays] = useState([1, 2, 13]);
    
    const StyledBadge = styled(Badge)(({ theme }) => ({
        '& .MuiBadge-badge': {
          right: 3,
          top: 9,
          border: `2px solid ${theme.palette.background.paper}`,
          padding: '0 4px',
        },
      }));

    function getRandomNumber(min, max) {
        return Math.round(Math.random() * (max - min) + min);
      }
      
      /**
       * Mimic fetch with abort controller https://developer.mozilla.org/en-US/docs/Web/API/AbortController/abort
       * ⚠️ No IE11 support
       */
      function ServerDay(props) {
        const { highlightedDays = [], day, outsideCurrentMonth, ...other } = props;
      
        const isSelected =
          !props.outsideCurrentMonth && highlightedDays.indexOf(props.day.date()) >= 0;
      
        return (
          <StyledBadge
            key={props.day.toString()}
            overlap="circular"
            badgeContent={isSelected ? '1' : undefined}
            color="secondary"
          >
            <PickersDay {...other} outsideCurrentMonth={outsideCurrentMonth} day={day} />
          </StyledBadge>
        );
      }
      

    return (
        <div className="calendar">
        <div className="title">{title}</div>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
                <StaticDatePicker 
                    orientation="landscape" 
                    defaultValue={dayjs()}
                    slots={{
                        day: ServerDay,
                    }}
                    slotProps={{
                        day: {
                        highlightedDays,
                        },
                    }}
                    />
            </LocalizationProvider>
        </div>
    );
};

export default Calendar