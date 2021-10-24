import styled from 'styled-components'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTwitter } from '@fortawesome/free-brands-svg-icons'
import { faInstagram } from '@fortawesome/free-brands-svg-icons'
import { faTiktok } from '@fortawesome/free-brands-svg-icons'
import { faYoutube } from '@fortawesome/free-brands-svg-icons'

const SocialMediaWrapper = styled.div`
	padding-left: 30px;
	text-align: center;
	display: flex;
	@media only screen and (min-width: 1300px) {
		flex-direction: column;
	}
`

const SocialMediaIcon = styled(FontAwesomeIcon)`
	font-size: 50px;
	padding: 10px;
`

const Link = styled.a`
	color: purple;
	flex: 1;
	text-decoration: none;
	:hover {
		color: lime;
	}
	:visited {
		text-decoration: none;
	}
`

const SocialMedia = () => {
	return (
		<SocialMediaWrapper>
			<Link href='https://twitter.com/emilymameford' target='_blank'>
				<SocialMediaIcon icon={faTwitter} />
			</Link>
			<Link href='https://www.instagram.com/emilymameford/' target='_blank'>
				<SocialMediaIcon icon={faInstagram} />
			</Link>
			<Link href='https://www.tiktok.com/@emilymameford' target='_blank'>
				<SocialMediaIcon icon={faTiktok} />
			</Link>
			<Link href='https://www.youtube.com/c/emilymameford' target='_blank'>
				<SocialMediaIcon icon={faYoutube} />
			</Link>
		</SocialMediaWrapper>
	)
}

export default SocialMedia
