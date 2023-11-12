import styled from "styled-components"

const MainBanner=styled.section`
height: 80vh;
background-color: lightblue;
position: relative;
padding: 400px 5%;
h3,p{
    position: relative;
    
}
h3{
    font-size: 80px;
    font-weight: 700;
    margin-bottom: 30px;
    letter-spacing: -3px;
    line-height: 100px;
}
p{
    font-size: 18px;
    font-weight: 400;
    line-height: 26px;
    opacity: 0.8;
}
`;

const BlackBg=styled.div`
    width: 100%;
    height: 100%;
    background: linear-gradient(
        0deg,rgba(0,0,0,1) 0%,
        rgba(55,55,55,1) 46%,
        rgba(255,255,255,1) 98%
        );
    position: absolute;
    top: 0;
    left: 0;
`;
export const Home =()=>{
    return(
        <div>
            <MainBanner>
                <BlackBg/>
                <h3>
                    프레디의 피자가게
                </h3>
                <p>
                    80년대에 아이들이 실종대는 인형폐업하고 오래된 프레디...야간
                    경비알바르르 마이크가 어두운 피자가게
                </p>
            </MainBanner>
        </div>
    )
}