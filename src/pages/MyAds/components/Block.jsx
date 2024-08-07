import React, { memo, useCallback } from 'react';
import MyFirstBlock from '../../../components/MyAds/MyFirstBlock';

const Block = ({e, i, setSecondPage }) => {
    const clickHandler = useCallback( (p) => {
        if (
            p.target.closest(".FirstMain__bottom-right") === null &&
            p.target.closest(".first__photos") === null
          ) {
            //  setTask(e);
            setSecondPage({ isActive: true, task: e, index: i });
          }
        
    } , [setSecondPage, e, i]) 
    return (
        <>
          <div 
              className="block"
              onClick={(p) => {
                    clickHandler(p)
                }}
            >
              <MyFirstBlock
    
                {...e}
  
                myAdsFunc={(value) => {
                  setSecondPage({ isActive: true, task: e, index: i });
                }}
                isButton={true}
              />


            </div>
           

    </>

    );
};

export default memo(Block);