import { useState } from 'react'
import GlobalStyle from './theme/global-styles'
import EmilyTv from './components/Group-2'
import EmilyTv2 from './components/Group-3'
import VideoButtons from './components/video-buttons'
import styled from 'styled-components'
import { useMediaQuery } from 'react-responsive'
import SocialMedia from './components/social-media'

const DesktopTv = styled(EmilyTv)``

const SmallerTv = styled(EmilyTv2)``

const ImageWrapper = styled.div`
	height: 100vh;
	display: flex;
	align-items: center;
	justify-content: center;
	vertical-align: middle;
	padding: 10px;
	@media only screen and (max-width: 900px) {
		padding: 0 20px;
		flex-direction: column;
	}
`
const YoutubeWrapper = styled.div`
	position: absolute;
	width: 100%;
	height: 100vh;
`

const YoutubeOverlay = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	vertical-align: middle;
	height: 100%;
	width: 100%;
`

const Home = () => {
	const isDesktopOrLaptop = useMediaQuery({
		query: '(min-width: 900px)',
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
	console.log(videoType)
	const selectedVideos = getYoutubeVideo()
	return (
		<div>
			<VideoButtons selectedVideos={selectedVideos} />
			<ImageWrapper>
				{isDesktopOrLaptop ? (
					<DesktopTv setVideoType={setVideoType} />
				) : (
					<SmallerTv setVideoType={setVideoType} />
				)}
				<SocialMedia />
			</ImageWrapper>
			<GlobalStyle />
		</div>
	)
}

export default Home
