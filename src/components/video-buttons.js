import styled, { keyframes } from 'styled-components'
import Switch from '../images/switch.png'
import Buttons from './buttons';
import { useMediaQuery } from 'react-responsive'

const IframeWrapper = styled.div`
	flex: 2;
`

const YoutubeWrapper = styled.div`

`

const YoutubeOverlay = styled.div`

`

const rotate = keyframes`
  0% {
	transform: rotate(0);
  }
  100% {
    transform: rotate(90deg);
  }
`;

const StyledSwitch = styled.img`
	animation: 1s ease-out 0s 1 ${rotate};
	animation-fill-mode: forwards;
	justify-content: center;
	@media only screen and (min-width: 750px) {
		margin-left: 26px;
		margin-bottom: 10px;
	}
	@media only screen and (max-width: 750px) {
		display: flex;
		justify-content: center;
	}
`

const ButtonSwitchWrapper = styled.div`
	display: flex; 
	flex-direction: column;
	@media only screen and (min-width: 750px) {
		margin-left: 18px;
	}
	@media only screen and (max-width: 750px) {
		left: calc(50% - 152px);
	}
`

const Wrapper = styled.div`
	position: absolute;
    top: 265.5px;
	display: flex;
	@media only screen and (max-width: 750px) {
		left: calc(50% - 152px);
			flex-direction: column;
	}
	@media only screen and (min-width: 750px) {
		left: calc(50% - 326px);
	}
	@media only screen and (min-width: 1150px) {
		left: calc(50% - 540px);
	}
	@media only screen and (max-width: 1150px) {
		top: 262.5px;
	}
	@media only screen and (min-width: 1300px) {
		left: calc(50% - 593.5px);
	}
`

const appear = keyframes`
   from {opacity: 0;}
   to {
   	opacity: 1;
   	box-shadow: 0 0 8px 4px lightgrey;
   }
`;

const OnCircle = styled.div`
	animation: 1.5s ease-out 0s 1 ${appear};
	animation-fill-mode: forwards;
	border-radius: 50%;
	width: 12px;
    height: 12px;
    background-color: #66FF00;
    align-self: end;
    margin-bottom: 18px;
    margin-right: 21px;
    margin-top: 6px;
`

const VideoButtons = ({ videoType, selectedVideo, setVideoType }) => {
	const isMobile = useMediaQuery({
		query: '(max-width: 750px)',
	})
	return (
		<Wrapper>
			<iframe id="ytplayer" type="text/html"
					width={isMobile ? '300' : '480'}
					height={isMobile ? '240' : '300'}
					src={selectedVideo}
					frameBorder="0"></iframe>
			<ButtonSwitchWrapper>
				<OnCircle />
				<StyledSwitch src={Switch} width={isMobile ? '50px' : '90px'}/>
				<Buttons setVideoType={setVideoType} videoType={videoType} />
			</ButtonSwitchWrapper>
		</Wrapper>
	)
}

export default VideoButtons
