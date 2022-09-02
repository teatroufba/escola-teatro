import styled from 'styled-components';

export const StyledStaffTableContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: #F7F6F5;  

    h1 {
		box-sizing: border-box;
		width: fit-content;
		font-family: "Merriweather", sans-serif;
		font-weight: 400;
		font-size: 48px;
		color: #282b62;
		margin: 3rem;
		border-bottom: 5px solid #282b62;
		text-align: center;
	}
`;

export const StyledStaffTable = styled.table`
    font-family: "Merriweather", sans-serif;
    font-size: 20px;
    width: min(1236px, 80%);
    text-align: left;
    vertical-align: middle;
    border-collapse: separate;
    border-spacing: 0px;
    border-left: 1px solid #958FA0;
    border-right: 1px solid #958FA0;
    margin-bottom: 80px;  
    

    th {
        color: #9A1A4B;
        border-top: 1px solid #958FA0;
        border-bottom: 1px solid #958FA0;
        padding: 10px 10px 10px 34px;
    }

    td {
        border-bottom: 1px solid #958FA0;
        padding: 10px 10px 10px 34px;
    }
`;
