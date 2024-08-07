import React, { useMemo } from 'react';
import cl from './Pallete.module.css'
import PalleteImg from '../../../images/icons/Palitra.png'
import ItSvg from "../../../images/icons/IT.svg"
import MoreSvg from "../../../images/icons/More.svg"
const Pallete = ({className , category}) => {
    const imageSrc = useMemo( () => {
        switch (category){
            case 1 : 
                return PalleteImg
            case 2:
                return ItSvg
            default :
                return MoreSvg

        }
    } , [category]  )
    return (
        <div className = {className ? [cl.Pallete , className].join(' ') : cl.Pallete}>
            <img src = {imageSrc} alt="" />
        </div>
    );
};

export default Pallete;