import styled from 'styled-components';

export const LoginFormWrapper = styled.div`
    margin: 100px auto;
    padding: 32px;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 90%;
    border: none;
    border-radius: 20px;
    -webkit-box-shadow: -1px 4px 13px -1px rgba(0,0,0,0.77); 
    box-shadow: -1px 4px 13px -1px rgba(0,0,0,0.77);
    @media (min-width: 992px) {
        width: 50%;
    }
    form {
        width: 100%;
    }
    button {
        width: 100%;
        margin-top: 12px;
    }
`;