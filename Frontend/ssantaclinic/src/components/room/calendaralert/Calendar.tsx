import React, { useEffect, useState } from 'react';
import { CalendarAlertDiv, CalendarButton } from './style';
import { useParams } from 'react-router-dom';
import { CalendarModal } from '../../calendar/CalendarModal';
import axios from 'axios';
import { API_BASE_URL } from '../../../apis/url';
// interface Iprops {
//   return;
// }

export function CalendarAlert(props: any) {
  const BASE_URL = API_BASE_URL;
  const [isHelp, setisHelp] = useState<boolean>(false);
  const param = useParams();
  const ACCESS_TOKEN = localStorage.getItem('jwt') || '';
  useEffect(() => {
    GetOtherCalendar();
  });
  const GetOtherCalendar = () => {
    axios
      .get(BASE_URL + 'calendar?' + param.id, {
        headers: {
          Authorization: ACCESS_TOKEN,
        },
      })
      .then((res) => {
        console.log(res.data, '캘린더 정보');
      })
      .catch((err) => {
        console.log(err.response);
      });
  };

  function help() {
    setisHelp(true);
  }

  if (!isHelp) {
    return (
      <CalendarAlertDiv className="calendar">
        선물이 많이 왔을까?
        <CalendarButton onClick={help}>구경</CalendarButton>
      </CalendarAlertDiv>
    );
  } else {
    return <CalendarModal onClose={setisHelp}></CalendarModal>;
  }
}
