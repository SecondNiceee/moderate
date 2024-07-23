import React, { memo, useCallback } from 'react';
import cl from './ShowMyResponse.module.css'
import Top from '../../UI/Top/Top';
import ResponseBlock from '../ResponseBlock';
import MyReaction from '../MyReaction';
import Customer from '../Customer/Customer';
import options from '../../../constants/options';
import formatDate from '../../../functions/makeDate';
import { useDispatch } from 'react-redux';
import { deleteResponse } from '../../../store/responses';
import MyLoader from '../../UI/MyLoader/MyLoader';
const ShowMyResponse = ({response , openDetails, index, deleteFunction}) => {
    console.log(response)
    const dispatch = useDispatch()

    return (
        <>
        { response ? <MyLoader style = {{width : "100vw" , height : "100vh" }}/> :
        <div className={cl.wrapper}>
            <Top  name={"Мой отклик"}  />
            <ResponseBlock isWatched={response.isWatched} index={index} func={openDetails} className={cl.response} buttonText={"Подробнее"} {...response.advertisement} task={response.advertisement}   />
            <MyReaction deleteFunction={deleteFunction} responce={response} />
            <Customer fl={response.advertisement.user.fl} photo={response.advertisement.user.photo} link={response.advertisement.user.link}  />
            <p className={cl.dateObject}>Создано { formatDate(new Date(response.advertisement.creationTime))}</p>
        </div>
}
        </>
    );
};

export default  memo(ShowMyResponse);