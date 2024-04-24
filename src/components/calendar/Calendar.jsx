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
        
          switch(highlightedDays.indexOf(props.day.date())) {
            case 0:
              return (
                <a href="#event0"><StyledBadge
                  key={props.day.toString()}
                  overlap="circular"
                  badgeContent={isSelected ? '1' : undefined}
                  color="secondary"
                >
                  <PickersDay {...other} outsideCurrentMonth={outsideCurrentMonth} day={day} />
                  
                </StyledBadge></a>
              );
            case 1:
              return (
                <a href="#event1"><StyledBadge
                  key={props.day.toString()}
                  overlap="circular"
                  badgeContent={isSelected ? '1' : undefined}
                  color="secondary"
                >
                  <PickersDay {...other} outsideCurrentMonth={outsideCurrentMonth} day={day} />
                  
                </StyledBadge></a>
              );
            case 2:
              return (
                <a href="#event2"><StyledBadge
                  key={props.day.toString()}
                  overlap="circular"
                  badgeContent={isSelected ? '1' : undefined}
                  color="secondary"
                >
                  <PickersDay {...other} outsideCurrentMonth={outsideCurrentMonth} day={day} />
                  
                </StyledBadge></a>
              );
            default:
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
      }

    const handleDateChange = (selDate) => {
        const day = selDate.toString().substring(8,10)
        const badge = highlightedDays.indexOf(parseInt(day))

        switch(badge) {
            case 0:
              break;
            case 1:
              // code block
              break;
            case -1:
                break;
            default:
              break;
          }
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
                    onChange={(selDate) => {
                        handleDateChange(selDate.$d)
                    }}
                    />
            </LocalizationProvider>
            <div id="event0" class="overlay">
              <div class="popup" >
                  <h2>Meeting with Jeff Bezos</h2>
                  <a class="close" href="#">&times;</a>
                  <div class="content">
                      <h3>3:00pm - 4:00pm</h3>
                      <p>Discuss future plans to connect students to internship opportunities</p>
                  </div>
              </div>
          </div>
          <div id="event1" class="overlay">
              <div class="popup" >
                  <h2>College Fair</h2>
                  <a class="close" href="#">&times;</a>
                  <div class="content">
                      <h3>9:00am - 1:30pm</h3>
                      <p>35 colleges are coming in and students can visit booths as they please. Make sure to meet colleges at 8:30am to facilitate setup.</p>
                      
                  </div>
              </div>
          </div>
          <div id="event2" class="overlay">
              <div class="popup" >
                  <h2>Forcasting Day</h2>
                  <a class="close" href="#">&times;</a>
                  <div class="content">
                    <h3>11:15am - 12:15pm</h3>
                      <p>Make sure students know the CTE opportunities available to them!</p>
                  </div>
              </div>
          </div>
        </div>
    );
};

export default Calendar