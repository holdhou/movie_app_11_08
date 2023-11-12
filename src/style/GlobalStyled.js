import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

export const mainColors={
    blackColr:"#000000",
    pointColor:"0D1282",
    
}
export const GlobalStyled = createGlobalStyle`
    ${reset}

    *{
        box-sizing: border-box;
    }
    body{
        background-color:${mainColors.blackColr} ;
        color: white;
        letter-spacing: -1px;
        word-break:break-all ;
    }

    ul,li{
        list-style: none;
    }

    a{
        text-decoration: none;
        color: red;
    }
` 