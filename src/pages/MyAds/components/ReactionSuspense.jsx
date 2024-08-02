import React, { lazy, Suspense, useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';
import BlockSpinner from '../../../components/UI/BlockSpinner/BlockSpinner';
const Reaction = lazy(() => import('./Reaction'))
const ReactionSuspense = ({openAboutReactionFunc, setSliderActive, responce, setOpen}) => {

    const { ref, inView } = useInView({
        threshold: 0, // Порог видимости (от 0 до 1)
      });
    
      const [isVisible, setVisible] = useState(false);
      useEffect(() => {
        if (inView) {
          setVisible(true);
        }
      }, [setVisible, inView]);


    return (
        <div
        style={!isVisible ? { minHeight: "144px" , width : "100%", position : "relative" } : {position : "relative"}}
      >

        {isVisible && <Suspense fallback={<BlockSpinner style = { responce.photos.length > 0 ? {minHeight : "282px"} :{minHeight : "114px"}} />} >

            <Reaction
            openAboutReactionFunc={openAboutReactionFunc}
            setSliderActive={setSliderActive}
            responce={responce}
            setOpen={setOpen}
          />

           </Suspense>
        }


        <div ref={ref} style={{
                width : "280px",
                height : "1100px",
                position : "absolute",
                top : "-900px",
                opacity : "0",
                zIndex : -1,
              
            }} className="catch_block"></div>
            </div>

        
    );
};

export default ReactionSuspense;