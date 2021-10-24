import LoveIsBlindButton from './love-is-blind-button';
import DawsonsCreekButton from './dawsons-creek-button';
import StandupButton from './stand-up-button'
import styled from 'styled-components'
import React from "react";

const ButtonWrapper = styled.div`
	display: flex;
	flex-direction: column;
	@media only screen and (max-width: 750px) {
		align-items: center;
	}
`;

const TopButtonsWrapper = styled.div`
	@media only screen and (max-width: 750px) { 
		display: flex;
	}
`

const Buttons = ({setVideoType, videoType}) => {
	return (<ButtonWrapper>
		<TopButtonsWrapper>
			<LoveIsBlindButton setVideoType={setVideoType} videoType={videoType}  />
			<DawsonsCreekButton setVideoType={setVideoType} videoType={videoType} />
		</TopButtonsWrapper>
		<StandupButton setVideoType={setVideoType} videoType={videoType} />
	</ButtonWrapper>)
}

export default Buttons
