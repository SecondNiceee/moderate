import { Triangle } from "react-loader-spinner";
import cl from "./MyLoader.module.css"
import { forwardRef } from "react";
const MyLoader = forwardRef(({...props}, ref) => {
    return (
      <div
       {...props}
        className={cl.main}
      >

            <div ref={ref} style={{
                width : "280px",
                height : "700px",
                position : "absolute",
                top : "-700px",
                opacity : "0"
            }} className="catch_block"></div>
        <Triangle
          visible={true}
          height="80"
          width="80"
          color="white"
          ariaLabel="triangle-loading"
          wrapperStyle={{}}
          wrapperClass=""
        />
      </div>
    );
  } );
  export default MyLoader