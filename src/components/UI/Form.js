import React from 'react'
import styled from 'styled-components'

const FormBackground = styled.div`
    > div {
        top: 0;
        left: 0;
        position: absolute;
        width: 100vw;
        height: 100vh;
    }
    top: 0;
    left: 0;
    position: absolute;
    width: 100vw;
    height: 100vh;
    display: ${props => props.isFormVisible ? "flex" : "none"};
    align-items: center;
    justify-content: center;
    background-color: rgba(0, 0, 0, 0.3);
    z-index: 0;
`

const StyledForm = styled.form`
    width: 70%;
    max-width: 400px;
    max-height: 50%;
    background-color: #eeeeee;
    border-radius: 15px;
    padding: 30px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    z-index: 100;

    h1 {
        font-size: 26px;
    }

    > div {
        height: 70%;
        width: 100%;
        display: flex;
        flex-direction: column;
        padding: 20px 40px;

        * {
            margin: 10px 0;
            height: 40px;
            font-size: 22px;
        }
    }
`

const FormButtons = styled.section`
    height: 15% ;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-evenly;

    button {
        width: 30%;
        padding: 8px 0;
        border: none;
        border-radius: 5px;
        background-color: #ddd;
        font-size: 20px;
    }

    button:first-child {
        background-color: #adbce6;
        color: white;
    }
`

const Form = ({children, isFormVisible, setIsFormVisible, title, onOK, props}) => {
  return (
    <FormBackground
        isFormVisible={isFormVisible}>
            <div onClick={() => setIsFormVisible(false)}></div>
            <StyledForm {...props} onSubmit={e => e.preventDefault()}>
                <h1>{title}</h1>
                <div>
                    {children}
                </div>
                <FormButtons>
                    <button onClick={() => {
                        onOK()
                        setIsFormVisible(false)
                    }}>ОК</button>
                    <button onClick={() => setIsFormVisible(false)}>Закрыть</button>
                </FormButtons>
            </StyledForm>
    </FormBackground>

  )
}

export default Form