import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Link from "next/link";
import { getToken } from './auth';

function Notice() {
    const token = getToken();
    const [Notices, setNotices] = useState([]);
    
    useEffect(() => 
        {
            axios.get('http://localhost:5000/api/notice',{
                headers : {
                    "Authorization" : `Bearer ${token}`
                }
            }).then(res=>{
                setNotices(res.data);
                
            }).catch(err=>console.log(err));
        }
    , [token]);
    Notices.map(Notice => console.log(Notice))

    return (
        <div className="notice">
            <h1>NOTICE</h1>

        <div className="notice__container">
            <div className="notice__box">
            {Notices.map(notice=> {
            const {notice_id, notice_headline, notice_file} = notice;
            
            return (
                <li key={notice_id} className="notice__box">
                    <Link 
                    href={notice_file}
                    className='notice__headline'
                    >
                    {notice_headline}
                    </Link>
                </li>
           )
        })}
            </div>
        </div>
        </div>
    )
}

export default Notice
