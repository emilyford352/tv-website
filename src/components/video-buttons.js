import styled from 'styled-components'

const IframeWrapper = styled.div`
	flex: 2;
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

const VideoButtons = ({ selectedVideos }) => {
	return (
		<YoutubeWrapper>
			<YoutubeOverlay>
				<IframeWrapper>
					<iframe
						title='youtube'
						width='450px'
						height='250px'
						src={selectedVideos}
						frameBorder='0'
						allowFullScreen
					/>
				</IframeWrapper>
				<div />
				<div />
			</YoutubeOverlay>
		</YoutubeWrapper>
	)
}

export default VideoButtons
