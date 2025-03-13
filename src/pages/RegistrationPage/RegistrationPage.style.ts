    import styled from 'styled-components';

    export const SRegistrationPage = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;
    background-color: #f5f5f5;
    font-family: Arial, sans-serif;

    h1 {
        font-size: 24px;
        margin-bottom: 20px;
    }   
    form {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        width: 300px;
        background-color: #fff;
        border-radius: 5px;
        padding: 20px;
        box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    }
    input {
        width: 100%;
        padding: 10px;
        margin-bottom: 10px;
        border: 1px solid #ccc;
        border-radius: 5px;
        outline: none;
    }
    button {
        width: 100%;
        padding: 10px;
        background-color: #007bff;
        color: #fff;
        border: none;
        border-radius: 5px;
        cursor: pointer;
    }
    button:disabled {
        background-color: #ccc;
        cursor: not-allowed;
    }
    a {
        color: #007bff;
        text-decoration: none;
        margin-top: 10px;
    }
    a:hover {
        text-decoration: underline;
    }
    @media (max-width: 530px) {
    width: 100%;
  }

    `