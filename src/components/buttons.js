import LoveIsBlindButton from './love-is-blind-button';
import DawsonsCreekButton from './dawsons-creek-button';
import StandupButton from './stand-up-button'
import styled from 'styled-components'
import React from "react";

const ButtonWrapper = styled.div`
	display: flex;
	flex-direction: column;
`;

const Buttons = ({setVideoType, videoType}) => {
	return (<ButtonWrapper>
		<LoveIsBlindButton setVideoType={setVideoType} videoType={videoType}  />
		<DawsonsCreekButton setVideoType={setVideoType} videoType={videoType} />
		<StandupButton setVideoType={setVideoType} videoType={videoType} />
	</ButtonWrapper>)
}

export default Buttons
