import { useState } from 'react'
import GlobalStyle from './theme/global-styles'
import BigScreenTv from './images/big-screen-tv.png'
import SmallScreenTv from './images/small-screen-tv.png';
import MobileScreenTv from './images/mobile-screen-tv.png'
import VideoButtons from './components/video-buttons'
import styled from 'styled-components'
import { useMediaQuery } from 'react-responsive'
import SocialMedia from './components/social-media'


const ImageWrapper = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	vertical-align: middle;
	padding: 10px;
	@media only screen and (max-width: 1150px) {
		padding: 0 20px;
		flex-direction: column;
	}
`

const TvSocialMediaWrapper = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	@media only screen and (max-width: 1300px) {
		flex-direction: column;
	}
	@media only screen and (max-width: 750px) {
		padding-top: 10px;
	}
	@media only screen and (min-width: 750px) {
		padding-top: 50px;
	}
`

const VideoButtonsWrapper = styled.div`
	display: flex;
`

const Home = () => {
	const isDesktopOrLaptop = useMediaQuery({
		query: '(min-width: 1150px)',
	})
	const isMobile = useMediaQuery({
		query: '(max-width: 750px)',
	})
	const [videoType, setVideoType] = useState('loveIsBlind')
	const getYoutubeVideo = () => {
		let video
		switch (videoType) {
			case 'loveIsBlind':
				video =
					'https://www.youtube.com/embed/videoseries?list=PLNg2nx_iQMJTpSk1LBQbkOYt3mGOHwYmi'
				break
			case 'dawsonsCreek':
				video =
					'https://www.youtube.com/embed/videoseries?list=PLNg2nx_iQMJQJbyJB4OIdhgCSqx-Ldh-t'
				break
			default:
				video =
					'https://www.youtube.com/embed/videoseries?list=PLNg2nx_iQMJS6jJpUxIxwTuBjms19FsnI'
		}
		return video
	}
	const selectedVideo = getYoutubeVideo()
	return (
		<div>
			<TvSocialMediaWrapper>
				<div>
					<VideoButtonsWrapper>
						<VideoButtons selectedVideo={selectedVideo} videoType={videoType} setVideoType={setVideoType} />
					</VideoButtonsWrapper>
					<ImageWrapper>
						<img src={isDesktopOrLaptop ? BigScreenTv : isMobile ? MobileScreenTv : SmallScreenTv} />
					</ImageWrapper>
				</div>
				<SocialMedia />
			</TvSocialMediaWrapper>
			<GlobalStyle />
		</div>
	)
}

export default Home
