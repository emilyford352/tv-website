import LoveIsBlindButton from './love-is-blind-button';
import DawsonsCreekButton from './dawsons-creek-button';
import StandupButton from './stand-up-button'
import styled from 'styled'

const ButtonWrapper = styled.div`
	display: flex;
`;

const Buttons = () => {
	return <ButtonWrapper><LoveIsBlindButton/> <DawsonsCreekButton/><StandupButton /></ButtonWrapper>
}

export default Buttons
