import styled, {css} from "styled-components"

export const Main = styled.main`
    width: 100%;
    height: 77%;
    background-color: white;
`

export const WeekSection = styled.div`
    width: 100%;
    height: 17%;
    background-color: #eee;
    padding-left: 80px;

    display: flex;
    flex-direction: column;
    justify-content: space-between;
`


export const WeekDays = styled.div`
    width: 100%;
    height: 50%;
    display: grid;
    grid-template-columns: repeat(7, 1fr);
    justify-content: space-between;
`


export const WeekChanger = styled.div`
    width: 100%;
    font-size: 18px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-right: 20px;

`

export const Day = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    div {
        margin-top: 5px;
        font-size: 15px;
        font-weight: 600;
    }

    div:nth-child(2) {
        font-size: 20px;
        margin: 10px 0;
        width: 35px;
        height: 35px;
        display: flex;
        align-items: center;
        justify-content: center;
        text-align: center;
        padding: 5px;
        border-radius: 50%;

        ${
        props => props.selected &&
            css`
                background-color: red;
                color: white;
            `
        };
    }
`

export const TodoTable = styled.div`
    width: 100%;
    height: 80%;
    display: flex;
    overflow-y: scroll;

    ::-webkit-scrollbar {
        width: 2px;
    }
`

export const Timestamps = styled.div`
    width: 80px;
    div {
        height: 20px;
        margin: 30px 0;
        display: flex;
        align-items: center;
        justify-content: flex-end;
        padding-right: 3px;
        color: gray;
        font-weight: 600;
    }
    div:first-child{
        margin-top: 0;
    }
`

export const Table = styled.div`
    transform: translateY(7px);
    width: 100%;
    display: grid;
    grid-template-columns: repeat(7, 1fr);
    grid-template-rows: repeat(24, 1fr);
    border: 2px solid white;
`

export const TableDay = styled.div`
    display: grid;
    grid-template-rows: repeat(24, 1fr);

    div > div {
        ${
        props => props.selected &&
            css`
                background-color: #add8e6;
                color: white;
            `
        };
    }

    :nth-child(7) div {
        border-right: none
    }
    :nth-child(1) div {
        border-left: none
    }
`

export const TableBlock = styled.div`
    height: 50px;
    border: 1.5px solid lightgray;
    padding: ${props => props.selected ? "0px" : "5px"};

    div {
        width: 100%;
        height: 100%;
        opacity: 0.5;
        transition: 0.25s;

        ${
        props => props.hasTodo && 
            css`
                opacity: 0.7;
                background-color: #adbce6 !important;
            `
        };

        :hover {
            transform: ${props => props.selected ? "scale(1)" : "scale(0.9)"};
        }
    } 
`
