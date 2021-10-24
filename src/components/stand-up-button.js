import styled from 'styled-components'

const StyledSvg = styled.svg`
    padding: 5px 10px;
    cursor: pointer;
    @media only screen and (max-width: 750px) {
		padding: 0;
		margin-top: -5px;
	}
   :hover {
        .top-button {
            fill: white;
            stroke: none;
        }
       .lower-button {
            fill: lightgrey;
       }
   }
   .top-button {
    	${props => props.videoType === 'standUp' ? {
			strokeWidth: 4,
			stroke: '#435D71'
		} : ''}
    }
    .text {
		${props => props.videoType === 'standUp' ? {
			fill: 'black'
		} : ''}
    }
`;

const StandupButton = ({setVideoType, videoType}) => {
	return (
		<div onClick={() => setVideoType('standUp')}>
			<StyledSvg
				width='126'
				height='48'
				viewBox='0 0 126 48'
				fill='none'
				xmlns='http://www.w3.org/2000/svg'
				videoType={videoType}
			>
				<rect x='2.00006' y='4.00002' width='124' height='44' fill='#435D71' className="lower-button" />
				<rect x='6.10352e-05' width='124' height='44' fill='#92D1FF' className="top-button" />
				<path
					className="text"
					d='M9.62808 24.802C9.62808 25.6887 9.38541 26.412 8.90008 26.972C8.42408 27.5227 7.81274 27.798 7.06608 27.798C6.31008 27.798 5.69408 27.518 5.21808 26.958C4.75141 26.3887 4.49474 25.6047 4.44808 24.606C4.58808 24.55 4.74208 24.508 4.91008 24.48C5.07808 24.452 5.26474 24.4287 5.47008 24.41C5.47008 25.2313 5.61474 25.8753 5.90408 26.342C6.19341 26.7993 6.58541 27.028 7.08008 27.028C7.53741 27.028 7.89208 26.86 8.14408 26.524C8.40541 26.1787 8.53608 25.698 8.53608 25.082C8.53608 24.186 8.27941 23.5093 7.76608 23.052C7.26208 22.5853 6.54341 22.3847 5.61008 22.45C5.58208 22.3193 5.55874 22.2027 5.54008 22.1C5.53074 21.9973 5.52608 21.89 5.52608 21.778C6.14208 21.3953 6.67408 20.9893 7.12208 20.56C7.57008 20.1307 7.96674 19.6547 8.31208 19.132C7.42541 19.2067 6.66474 19.2953 6.03008 19.398C5.40474 19.4913 4.80274 19.6127 4.22408 19.762C4.18674 19.6127 4.16341 19.4587 4.15408 19.3C4.14474 19.132 4.14941 18.9687 4.16808 18.81C5.05474 18.6233 5.92741 18.4833 6.78608 18.39C7.65408 18.2873 8.49408 18.2313 9.30608 18.222C9.33408 18.3527 9.35274 18.4927 9.36208 18.642C9.38074 18.782 9.38541 18.922 9.37608 19.062C9.06808 19.6033 8.72274 20.084 8.34008 20.504C7.96674 20.9147 7.48608 21.344 6.89808 21.792C7.79408 21.96 8.47074 22.3007 8.92808 22.814C9.39474 23.3273 9.62808 23.99 9.62808 24.802ZM10.4247 25.936C10.6673 25.88 10.896 25.852 11.1107 25.852C11.3253 25.8427 11.54 25.8567 11.7547 25.894C11.7453 26.1927 11.7313 26.4213 11.7127 26.58C11.7033 26.7293 11.6847 26.8787 11.6567 27.028C11.4233 27.056 11.2133 27.07 11.0267 27.07C10.8493 27.07 10.6627 27.056 10.4667 27.028C10.4667 26.972 10.462 26.916 10.4527 26.86C10.4527 26.7947 10.4527 26.706 10.4527 26.594C10.4433 26.426 10.434 26.2953 10.4247 26.202C10.4247 26.1087 10.4247 26.02 10.4247 25.936ZM20.3442 22.968C20.5309 23.248 20.6662 23.5513 20.7502 23.878C20.8435 24.1953 20.8902 24.5453 20.8902 24.928C20.8902 25.7027 20.6429 26.3373 20.1482 26.832C19.6535 27.3173 19.0189 27.56 18.2442 27.56C17.3109 27.56 16.5782 27.2193 16.0462 26.538C15.5235 25.8473 15.2622 24.9513 15.2622 23.85C15.4115 23.7753 15.5749 23.71 15.7522 23.654C15.9295 23.598 16.1022 23.5653 16.2702 23.556C16.2609 24.5547 16.4242 25.3387 16.7602 25.908C17.1055 26.4773 17.5862 26.762 18.2022 26.762C18.6689 26.762 19.0422 26.608 19.3222 26.3C19.6115 25.9827 19.7562 25.5673 19.7562 25.054C19.7562 24.5593 19.6442 24.1207 19.4202 23.738C19.1962 23.346 18.7109 22.8747 17.9642 22.324C17.5162 21.988 17.1895 21.722 16.9842 21.526C16.7789 21.3207 16.6062 21.1107 16.4662 20.896C16.2795 20.616 16.1395 20.3127 16.0462 19.986C15.9529 19.6593 15.9062 19.3047 15.9062 18.922C15.9062 18.11 16.1349 17.466 16.5922 16.99C17.0589 16.5047 17.6795 16.262 18.4542 16.262C19.1635 16.262 19.7142 16.4673 20.1062 16.878C20.5075 17.2793 20.8015 17.9653 20.9882 18.936C20.8575 19.0107 20.7129 19.0667 20.5542 19.104C20.4049 19.1413 20.2135 19.1647 19.9802 19.174C19.8962 18.4367 19.7329 17.9047 19.4902 17.578C19.2475 17.2513 18.8882 17.088 18.4122 17.088C17.9735 17.088 17.6375 17.2327 17.4042 17.522C17.1709 17.8113 17.0542 18.2313 17.0542 18.782C17.0542 19.286 17.1662 19.7387 17.3902 20.14C17.6235 20.532 18.1135 21.008 18.8602 21.568C19.3082 21.904 19.6302 22.17 19.8262 22.366C20.0315 22.562 20.2042 22.7627 20.3442 22.968ZM24.9663 24.102C25.1156 24.1207 25.2603 24.1533 25.4003 24.2C25.5496 24.2373 25.6756 24.2887 25.7783 24.354C25.7596 25.138 25.6009 25.754 25.3023 26.202C25.0129 26.6407 24.6163 26.86 24.1123 26.86C23.5243 26.86 23.0809 26.5287 22.7823 25.866C22.4836 25.194 22.3343 24.2047 22.3343 22.898C22.3343 22.4687 22.3483 22.0393 22.3763 21.61C22.4043 21.1807 22.4463 20.742 22.5023 20.294C22.3249 20.2847 22.1476 20.266 21.9703 20.238C21.8023 20.21 21.6296 20.1773 21.4523 20.14C21.4616 20.0093 21.4803 19.8833 21.5083 19.762C21.5363 19.6407 21.5736 19.5287 21.6203 19.426C21.7976 19.4633 21.9656 19.496 22.1243 19.524C22.2829 19.552 22.4416 19.5707 22.6003 19.58C22.6376 19.3373 22.6843 19.076 22.7403 18.796C22.8056 18.5067 22.8896 18.152 22.9923 17.732C23.1883 17.7413 23.3796 17.7647 23.5663 17.802C23.7623 17.83 23.9489 17.872 24.1263 17.928C24.0329 18.236 23.9489 18.5347 23.8743 18.824C23.7996 19.1133 23.7389 19.3933 23.6923 19.664C24.0656 19.6733 24.4296 19.6733 24.7843 19.664C25.1389 19.6453 25.4843 19.622 25.8203 19.594C25.8203 19.6873 25.8063 19.7947 25.7783 19.916C25.7596 20.028 25.7316 20.1493 25.6943 20.28C25.3489 20.3173 24.9943 20.3453 24.6303 20.364C24.2756 20.3733 23.9209 20.3733 23.5663 20.364C23.5009 20.8027 23.4496 21.2507 23.4123 21.708C23.3749 22.1653 23.3563 22.6133 23.3563 23.052C23.3563 24.0413 23.4263 24.7973 23.5663 25.32C23.7156 25.8333 23.9256 26.09 24.1963 26.09C24.4483 26.09 24.6349 25.9313 24.7563 25.614C24.8869 25.2873 24.9569 24.7833 24.9663 24.102ZM31.8836 22.226C31.8836 22.842 31.7996 23.6587 31.6316 24.676C31.4636 25.6933 31.2629 26.6267 31.0296 27.476C30.8896 27.476 30.7403 27.462 30.5816 27.434C30.4229 27.406 30.2689 27.3687 30.1196 27.322C30.1289 27.2847 30.1383 27.238 30.1476 27.182C30.1569 27.1353 30.1756 27.07 30.2036 26.986C30.2316 26.8367 30.2549 26.7293 30.2736 26.664C30.2923 26.5893 30.3063 26.524 30.3156 26.468C30.1196 26.608 29.8956 26.7153 29.6436 26.79C29.4009 26.8647 29.1396 26.902 28.8596 26.902C28.2249 26.902 27.7116 26.734 27.3196 26.398C26.9276 26.0527 26.7316 25.6 26.7316 25.04C26.7316 24.4333 26.9883 23.9713 27.5016 23.654C28.0149 23.3367 28.7709 23.178 29.7696 23.178C29.9189 23.178 30.0636 23.1827 30.2036 23.192C30.3436 23.192 30.5303 23.1967 30.7636 23.206C30.7729 23.1127 30.7776 23.01 30.7776 22.898C30.7776 22.786 30.7776 22.6087 30.7776 22.366C30.7776 21.6193 30.6843 21.078 30.4976 20.742C30.3203 20.406 30.0216 20.238 29.6016 20.238C29.1723 20.238 28.8129 20.4293 28.5236 20.812C28.2343 21.1853 28.0803 21.6613 28.0616 22.24C27.8003 22.2027 27.5903 22.142 27.4316 22.058C27.2729 21.9647 27.1516 21.8433 27.0676 21.694C27.1796 21.078 27.4876 20.5553 27.9916 20.126C28.5049 19.6967 29.0883 19.482 29.7416 19.482C30.4509 19.482 30.9829 19.7153 31.3376 20.182C31.7016 20.6393 31.8836 21.3207 31.8836 22.226ZM27.8376 25.068C27.8376 25.4133 27.9496 25.6887 28.1736 25.894C28.3976 26.09 28.6916 26.188 29.0556 26.188C29.3169 26.188 29.5643 26.1507 29.7976 26.076C30.0403 25.992 30.2643 25.8707 30.4696 25.712C30.5443 25.3293 30.6003 24.9887 30.6376 24.69C30.6843 24.3913 30.7169 24.0927 30.7356 23.794C29.7743 23.738 29.0509 23.8173 28.5656 24.032C28.0803 24.2373 27.8376 24.5827 27.8376 25.068ZM34.4477 24.662C34.4477 25.1007 34.457 25.6 34.4757 26.16C34.4943 26.7107 34.5177 27.112 34.5457 27.364C34.4243 27.4013 34.2797 27.434 34.1117 27.462C33.9437 27.49 33.7803 27.504 33.6217 27.504C33.5563 26.524 33.5003 25.2547 33.4537 23.696C33.407 22.1373 33.3837 20.8167 33.3837 19.734C33.477 19.6873 33.589 19.65 33.7197 19.622C33.8503 19.594 33.9857 19.58 34.1257 19.58C34.219 19.58 34.3077 19.5847 34.3917 19.594C34.485 19.6033 34.5783 19.6173 34.6717 19.636C34.653 19.804 34.6297 20.0747 34.6017 20.448C34.583 20.812 34.569 21.05 34.5597 21.162C34.8677 20.6487 35.1943 20.266 35.5397 20.014C35.885 19.762 36.249 19.636 36.6317 19.636C37.2103 19.636 37.6303 19.8507 37.8917 20.28C38.1623 20.7 38.2977 21.3627 38.2977 22.268C38.2977 22.996 38.237 23.8127 38.1157 24.718C38.0037 25.6233 37.8823 26.3327 37.7517 26.846C37.6023 26.8367 37.4343 26.818 37.2477 26.79C37.0703 26.7527 36.907 26.7107 36.7577 26.664C36.9257 25.7493 37.047 24.9373 37.1217 24.228C37.1963 23.5187 37.2337 22.8513 37.2337 22.226C37.2337 21.638 37.159 21.2133 37.0097 20.952C36.8697 20.6907 36.6363 20.56 36.3097 20.56C35.983 20.56 35.6563 20.7233 35.3297 21.05C35.0123 21.3767 34.737 21.8247 34.5037 22.394C34.485 23.066 34.471 23.556 34.4617 23.864C34.4523 24.172 34.4477 24.438 34.4477 24.662ZM44.6388 27.462C44.5268 27.4993 44.3915 27.5273 44.2328 27.546C44.0835 27.574 43.9528 27.588 43.8408 27.588C43.8128 27.2893 43.7895 26.9907 43.7708 26.692C43.7521 26.384 43.7381 26.0807 43.7288 25.782C43.5515 26.342 43.3181 26.7527 43.0288 27.014C42.7395 27.2847 42.3755 27.42 41.9368 27.42C41.2181 27.42 40.6488 27.084 40.2288 26.412C39.8088 25.74 39.5988 24.8487 39.5988 23.738C39.5988 22.5153 39.8741 21.54 40.4248 20.812C40.9848 20.0747 41.7268 19.706 42.6508 19.706C42.8001 19.706 42.9541 19.7153 43.1128 19.734C43.2715 19.7527 43.4161 19.7807 43.5468 19.818C43.5375 18.9407 43.5281 18.32 43.5188 17.956C43.5188 17.592 43.5188 17.2653 43.5188 16.976C43.6028 16.9293 43.7101 16.892 43.8408 16.864C43.9715 16.836 44.0975 16.822 44.2188 16.822C44.2935 16.822 44.3728 16.8313 44.4568 16.85C44.5408 16.8593 44.6341 16.8733 44.7368 16.892C44.6901 17.4707 44.6528 18.3013 44.6248 19.384C44.6061 20.4573 44.5968 22.4267 44.5968 25.292C44.5968 25.712 44.5968 26.0807 44.5968 26.398C44.6061 26.706 44.6201 27.0607 44.6388 27.462ZM40.6628 23.584C40.6628 24.5453 40.7888 25.292 41.0408 25.824C41.2928 26.3467 41.6428 26.608 42.0908 26.608C42.5015 26.608 42.8375 26.3793 43.0988 25.922C43.3695 25.4553 43.5515 24.774 43.6448 23.878C43.6261 23.3553 43.6075 22.814 43.5888 22.254C43.5795 21.694 43.5701 21.1293 43.5608 20.56C43.4488 20.5227 43.3275 20.4993 43.1968 20.49C43.0661 20.4713 42.9261 20.462 42.7768 20.462C42.1421 20.462 41.6288 20.742 41.2368 21.302C40.8541 21.8527 40.6628 22.6133 40.6628 23.584ZM49.0619 23.486C48.4366 23.5607 47.8486 23.5887 47.2979 23.57C46.7473 23.5513 46.3179 23.4953 46.0099 23.402C46.0006 23.206 46.0006 23.038 46.0099 22.898C46.0286 22.7487 46.0566 22.5993 46.0939 22.45C46.3179 22.4967 46.5933 22.534 46.9199 22.562C47.2466 22.59 47.5639 22.604 47.8719 22.604C48.1706 22.604 48.4179 22.5993 48.6139 22.59C48.8193 22.5807 48.9966 22.562 49.1459 22.534C49.1459 22.7113 49.1366 22.8793 49.1179 23.038C49.1086 23.1873 49.0899 23.3367 49.0619 23.486ZM52.1864 27.14C51.5051 27.14 50.9871 26.8087 50.6324 26.146C50.2871 25.4833 50.1144 24.508 50.1144 23.22C50.1144 22.5667 50.1658 21.9133 50.2684 21.26C50.3804 20.5973 50.5158 20.1213 50.6744 19.832C50.7584 19.804 50.8424 19.7853 50.9264 19.776C51.0104 19.7573 51.0944 19.748 51.1784 19.748C51.2624 19.748 51.3371 19.7573 51.4024 19.776C51.4771 19.7853 51.5471 19.8087 51.6124 19.846C51.4724 20.294 51.3651 20.8073 51.2904 21.386C51.2158 21.9647 51.1784 22.59 51.1784 23.262C51.1784 24.1673 51.2811 24.9093 51.4864 25.488C51.7011 26.0667 51.9858 26.356 52.3404 26.356C52.7791 26.356 53.1104 26.02 53.3344 25.348C53.5678 24.676 53.6844 23.7333 53.6844 22.52C53.6844 22.1467 53.6658 21.7593 53.6284 21.358C53.5911 20.9473 53.5538 20.6627 53.5164 20.504C53.6564 20.4387 53.8291 20.3873 54.0344 20.35C54.2398 20.3127 54.4358 20.294 54.6224 20.294C54.6691 20.5087 54.7018 20.7653 54.7204 21.064C54.7484 21.3627 54.7624 21.666 54.7624 21.974C54.7624 23.6447 54.5431 24.9233 54.1044 25.81C53.6751 26.6967 53.0358 27.14 52.1864 27.14ZM57.2006 25.796C57.3126 25.908 57.434 25.992 57.5646 26.048C57.6953 26.104 57.8353 26.132 57.9846 26.132C58.526 26.132 58.9973 25.7447 59.3986 24.97C59.8 24.186 60.0006 23.22 60.0006 22.072C60.0006 21.484 59.9026 21.022 59.7066 20.686C59.5106 20.35 59.2446 20.182 58.9086 20.182C58.5166 20.182 58.1713 20.364 57.8726 20.728C57.574 21.092 57.336 21.6287 57.1586 22.338C57.1493 22.45 57.1446 22.576 57.1446 22.716C57.1446 22.856 57.1446 23.066 57.1446 23.346C57.1446 23.6913 57.1493 24.0507 57.1586 24.424C57.168 24.7973 57.182 25.2547 57.2006 25.796ZM57.2566 26.762C57.294 27.3033 57.3406 27.8307 57.3966 28.344C57.462 28.8573 57.5413 29.3893 57.6346 29.94C57.504 29.9867 57.35 30.0193 57.1726 30.038C57.0046 30.066 56.846 30.08 56.6966 30.08C56.538 28.8853 56.4073 27.56 56.3046 26.104C56.202 24.648 56.1506 23.3227 56.1506 22.128C56.1506 21.5773 56.16 21.0827 56.1786 20.644C56.1973 20.2053 56.23 19.7713 56.2766 19.342C56.398 19.2767 56.5286 19.23 56.6686 19.202C56.818 19.1647 56.972 19.146 57.1306 19.146C57.1773 19.146 57.2333 19.1507 57.2986 19.16C57.364 19.1693 57.4433 19.1833 57.5366 19.202C57.4713 19.4727 57.4153 19.734 57.3686 19.986C57.3313 20.238 57.2986 20.4853 57.2706 20.728C57.5226 20.2427 57.8213 19.8693 58.1666 19.608C58.5213 19.3467 58.9086 19.216 59.3286 19.216C59.87 19.216 60.304 19.468 60.6306 19.972C60.9573 20.476 61.1206 21.148 61.1206 21.988C61.1206 23.3787 60.8173 24.5407 60.2106 25.474C59.604 26.398 58.862 26.86 57.9846 26.86C57.8633 26.86 57.742 26.8553 57.6206 26.846C57.4993 26.8273 57.378 26.7993 57.2566 26.762ZM69.88 16.556C70.02 16.6027 70.1554 16.6633 70.286 16.738C70.4167 16.8127 70.5427 16.9013 70.664 17.004C69.852 18.9547 68.9187 21.0407 67.864 23.262C66.8094 25.4833 65.722 27.6627 64.602 29.8C64.462 29.7627 64.3267 29.7067 64.196 29.632C64.056 29.5667 63.9207 29.4873 63.79 29.394C64.574 28.022 65.4887 26.2347 66.534 24.032C67.5794 21.82 68.6947 19.328 69.88 16.556ZM76.3169 22.968C76.5035 23.248 76.6389 23.5513 76.7229 23.878C76.8162 24.1953 76.8629 24.5453 76.8629 24.928C76.8629 25.7027 76.6155 26.3373 76.1209 26.832C75.6262 27.3173 74.9915 27.56 74.2169 27.56C73.2835 27.56 72.5509 27.2193 72.0189 26.538C71.4962 25.8473 71.2349 24.9513 71.2349 23.85C71.3842 23.7753 71.5475 23.71 71.7249 23.654C71.9022 23.598 72.0749 23.5653 72.2429 23.556C72.2335 24.5547 72.3969 25.3387 72.7329 25.908C73.0782 26.4773 73.5589 26.762 74.1749 26.762C74.6415 26.762 75.0149 26.608 75.2949 26.3C75.5842 25.9827 75.7289 25.5673 75.7289 25.054C75.7289 24.5593 75.6169 24.1207 75.3929 23.738C75.1689 23.346 74.6835 22.8747 73.9369 22.324C73.4889 21.988 73.1622 21.722 72.9569 21.526C72.7515 21.3207 72.5789 21.1107 72.4389 20.896C72.2522 20.616 72.1122 20.3127 72.0189 19.986C71.9255 19.6593 71.8789 19.3047 71.8789 18.922C71.8789 18.11 72.1075 17.466 72.5649 16.99C73.0315 16.5047 73.6522 16.262 74.4269 16.262C75.1362 16.262 75.6869 16.4673 76.0789 16.878C76.4802 17.2793 76.7742 17.9653 76.9609 18.936C76.8302 19.0107 76.6855 19.0667 76.5269 19.104C76.3775 19.1413 76.1862 19.1647 75.9529 19.174C75.8689 18.4367 75.7055 17.9047 75.4629 17.578C75.2202 17.2513 74.8609 17.088 74.3849 17.088C73.9462 17.088 73.6102 17.2327 73.3769 17.522C73.1435 17.8113 73.0269 18.2313 73.0269 18.782C73.0269 19.286 73.1389 19.7387 73.3629 20.14C73.5962 20.532 74.0862 21.008 74.8329 21.568C75.2809 21.904 75.6029 22.17 75.7989 22.366C76.0042 22.562 76.1769 22.7627 76.3169 22.968ZM79.1674 23.696C79.1674 24.3867 79.1861 25.0493 79.2234 25.684C79.2607 26.3187 79.3214 26.9533 79.4054 27.588C79.2467 27.6253 79.0787 27.6533 78.9014 27.672C78.7241 27.6907 78.5701 27.7 78.4394 27.7C78.3274 26.5893 78.2527 25.6793 78.2154 24.97C78.1781 24.2607 78.1594 23.5187 78.1594 22.744C78.1594 21.7173 78.1921 20.6813 78.2574 19.636C78.3321 18.5907 78.4347 17.62 78.5654 16.724C78.7707 16.7053 78.9807 16.7053 79.1954 16.724C79.4101 16.7427 79.5874 16.7753 79.7274 16.822C79.5687 17.8113 79.4427 18.7913 79.3494 19.762C79.2561 20.7233 79.2001 21.68 79.1814 22.632C79.8441 22.0533 80.4041 21.498 80.8614 20.966C81.3281 20.4247 81.8274 19.7387 82.3594 18.908C82.4994 18.9733 82.6301 19.062 82.7514 19.174C82.8821 19.2767 82.9941 19.3887 83.0874 19.51C82.6114 20.2287 82.1587 20.826 81.7294 21.302C81.3094 21.778 80.7961 22.268 80.1894 22.772C80.6094 23.388 81.0574 23.9247 81.5334 24.382C82.0094 24.83 82.6394 25.32 83.4234 25.852C83.2647 26.0853 83.1294 26.258 83.0174 26.37C82.9147 26.482 82.8027 26.5707 82.6814 26.636C82.0841 26.1693 81.5614 25.698 81.1134 25.222C80.6654 24.7367 80.1427 24.0927 79.5454 23.29C79.4801 23.3367 79.4147 23.388 79.3494 23.444C79.2934 23.4907 79.2327 23.5373 79.1674 23.584C79.1674 23.6027 79.1674 23.6213 79.1674 23.64C79.1674 23.6587 79.1674 23.6773 79.1674 23.696ZM85.3731 22.618C85.6438 22.7113 85.9331 22.786 86.2411 22.842C86.5584 22.8887 86.8898 22.912 87.2351 22.912C87.3284 22.912 87.4358 22.9073 87.5571 22.898C87.6878 22.8887 87.7811 22.8747 87.8371 22.856C87.9118 22.5853 87.9631 22.338 87.9911 22.114C88.0284 21.8807 88.0471 21.6707 88.0471 21.484C88.0471 21.0733 87.9771 20.7793 87.8371 20.602C87.7064 20.4247 87.4918 20.336 87.1931 20.336C86.8011 20.336 86.4418 20.546 86.1151 20.966C85.7884 21.386 85.5411 21.9367 85.3731 22.618ZM88.4951 24.62C88.6444 24.648 88.7938 24.704 88.9431 24.788C89.1018 24.872 89.2371 24.97 89.3491 25.082C89.1718 25.614 88.8078 26.0947 88.2571 26.524C87.7158 26.944 87.1511 27.154 86.5631 27.154C85.8071 27.154 85.2098 26.86 84.7711 26.272C84.3418 25.684 84.1271 24.8953 84.1271 23.906C84.1271 22.7953 84.4351 21.7967 85.0511 20.91C85.6764 20.0233 86.4184 19.58 87.2771 19.58C87.8278 19.58 88.2618 19.7573 88.5791 20.112C88.9058 20.4573 89.0691 20.9287 89.0691 21.526C89.0691 21.8433 89.0364 22.1653 88.9711 22.492C88.9151 22.8093 88.8358 23.1127 88.7331 23.402C88.5464 23.4673 88.3178 23.5187 88.0471 23.556C87.7858 23.584 87.4591 23.598 87.0671 23.598C86.7684 23.598 86.4604 23.5747 86.1431 23.528C85.8351 23.472 85.5364 23.3927 85.2471 23.29C85.2284 23.402 85.2144 23.514 85.2051 23.626C85.2051 23.7287 85.2051 23.8313 85.2051 23.934C85.2051 24.6713 85.3311 25.2687 85.5831 25.726C85.8444 26.174 86.1898 26.398 86.6191 26.398C86.9924 26.398 87.3658 26.2253 87.7391 25.88C88.1124 25.5253 88.3644 25.1053 88.4951 24.62ZM93.4624 24.102C93.6117 24.1207 93.7564 24.1533 93.8964 24.2C94.0457 24.2373 94.1717 24.2887 94.2744 24.354C94.2557 25.138 94.097 25.754 93.7984 26.202C93.509 26.6407 93.1124 26.86 92.6084 26.86C92.0204 26.86 91.577 26.5287 91.2784 25.866C90.9797 25.194 90.8304 24.2047 90.8304 22.898C90.8304 22.4687 90.8444 22.0393 90.8724 21.61C90.9004 21.1807 90.9424 20.742 90.9984 20.294C90.821 20.2847 90.6437 20.266 90.4664 20.238C90.2984 20.21 90.1257 20.1773 89.9484 20.14C89.9577 20.0093 89.9764 19.8833 90.0044 19.762C90.0324 19.6407 90.0697 19.5287 90.1164 19.426C90.2937 19.4633 90.4617 19.496 90.6204 19.524C90.779 19.552 90.9377 19.5707 91.0964 19.58C91.1337 19.3373 91.1804 19.076 91.2364 18.796C91.3017 18.5067 91.3857 18.152 91.4884 17.732C91.6844 17.7413 91.8757 17.7647 92.0624 17.802C92.2584 17.83 92.445 17.872 92.6224 17.928C92.529 18.236 92.445 18.5347 92.3704 18.824C92.2957 19.1133 92.235 19.3933 92.1884 19.664C92.5617 19.6733 92.9257 19.6733 93.2804 19.664C93.635 19.6453 93.9804 19.622 94.3164 19.594C94.3164 19.6873 94.3024 19.7947 94.2744 19.916C94.2557 20.028 94.2277 20.1493 94.1904 20.28C93.845 20.3173 93.4904 20.3453 93.1264 20.364C92.7717 20.3733 92.417 20.3733 92.0624 20.364C91.997 20.8027 91.9457 21.2507 91.9084 21.708C91.871 22.1653 91.8524 22.6133 91.8524 23.052C91.8524 24.0413 91.9224 24.7973 92.0624 25.32C92.2117 25.8333 92.4217 26.09 92.6924 26.09C92.9444 26.09 93.131 25.9313 93.2524 25.614C93.383 25.2873 93.453 24.7833 93.4624 24.102ZM100.268 21.848C100.118 21.9227 99.955 21.9787 99.7777 22.016C99.6004 22.044 99.409 22.058 99.2037 22.058C99.2037 21.4327 99.115 20.9613 98.9377 20.644C98.7697 20.3267 98.5177 20.168 98.1817 20.168C97.6684 20.168 97.225 20.574 96.8517 21.386C96.4784 22.1887 96.2917 23.108 96.2917 24.144C96.2917 24.9 96.4177 25.4973 96.6697 25.936C96.931 26.3747 97.295 26.594 97.7617 26.594C98.1164 26.594 98.443 26.4493 98.7417 26.16C99.0497 25.8613 99.3204 25.4367 99.5537 24.886C99.6937 24.9327 99.8197 24.9933 99.9317 25.068C100.044 25.1427 100.142 25.2313 100.226 25.334C100.076 25.894 99.7497 26.37 99.2457 26.762C98.751 27.154 98.1957 27.35 97.5797 27.35C96.8237 27.35 96.2404 27.0793 95.8297 26.538C95.4284 25.9873 95.2277 25.2173 95.2277 24.228C95.2277 22.856 95.5077 21.7127 96.0677 20.798C96.6277 19.8833 97.337 19.426 98.1957 19.426C98.849 19.426 99.3577 19.6407 99.7217 20.07C100.086 20.4993 100.268 21.092 100.268 21.848ZM106.607 22.436C106.607 23.192 106.491 24.0787 106.257 25.096C106.033 26.104 105.8 26.888 105.557 27.448C105.399 27.4293 105.24 27.3967 105.081 27.35C104.932 27.3033 104.787 27.2427 104.647 27.168C104.927 26.412 105.142 25.6187 105.291 24.788C105.45 23.9573 105.529 23.178 105.529 22.45C105.529 21.722 105.455 21.2133 105.305 20.924C105.165 20.6253 104.913 20.476 104.549 20.476C104.167 20.476 103.789 20.6907 103.415 21.12C103.042 21.54 102.753 22.1093 102.547 22.828V22.87C102.547 23.3927 102.571 24.0413 102.617 24.816C102.664 25.5907 102.711 26.1553 102.757 26.51C102.655 26.538 102.51 26.566 102.323 26.594C102.137 26.6127 101.959 26.622 101.791 26.622C101.717 25.642 101.661 24.7227 101.623 23.864C101.586 22.996 101.567 22.198 101.567 21.47C101.567 20.714 101.595 19.8413 101.651 18.852C101.707 17.8533 101.773 17.1113 101.847 16.626C101.969 16.5607 102.095 16.514 102.225 16.486C102.356 16.4487 102.487 16.43 102.617 16.43C102.711 16.43 102.818 16.4487 102.939 16.486C103.061 16.514 103.14 16.5327 103.177 16.542C103.028 17.2513 102.902 18.0213 102.799 18.852C102.697 19.6733 102.627 20.4947 102.589 21.316C102.879 20.7747 103.21 20.3593 103.583 20.07C103.957 19.7807 104.344 19.636 104.745 19.636C105.399 19.636 105.87 19.86 106.159 20.308C106.458 20.7467 106.607 21.456 106.607 22.436ZM108.984 22.618C109.255 22.7113 109.544 22.786 109.852 22.842C110.17 22.8887 110.501 22.912 110.846 22.912C110.94 22.912 111.047 22.9073 111.168 22.898C111.299 22.8887 111.392 22.8747 111.448 22.856C111.523 22.5853 111.574 22.338 111.602 22.114C111.64 21.8807 111.658 21.6707 111.658 21.484C111.658 21.0733 111.588 20.7793 111.448 20.602C111.318 20.4247 111.103 20.336 110.804 20.336C110.412 20.336 110.053 20.546 109.726 20.966C109.4 21.386 109.152 21.9367 108.984 22.618ZM112.106 24.62C112.256 24.648 112.405 24.704 112.554 24.788C112.713 24.872 112.848 24.97 112.96 25.082C112.783 25.614 112.419 26.0947 111.868 26.524C111.327 26.944 110.762 27.154 110.174 27.154C109.418 27.154 108.821 26.86 108.382 26.272C107.953 25.684 107.738 24.8953 107.738 23.906C107.738 22.7953 108.046 21.7967 108.662 20.91C109.288 20.0233 110.03 19.58 110.888 19.58C111.439 19.58 111.873 19.7573 112.19 20.112C112.517 20.4573 112.68 20.9287 112.68 21.526C112.68 21.8433 112.648 22.1653 112.582 22.492C112.526 22.8093 112.447 23.1127 112.344 23.402C112.158 23.4673 111.929 23.5187 111.658 23.556C111.397 23.584 111.07 23.598 110.678 23.598C110.38 23.598 110.072 23.5747 109.754 23.528C109.446 23.472 109.148 23.3927 108.858 23.29C108.84 23.402 108.826 23.514 108.816 23.626C108.816 23.7287 108.816 23.8313 108.816 23.934C108.816 24.6713 108.942 25.2687 109.194 25.726C109.456 26.174 109.801 26.398 110.23 26.398C110.604 26.398 110.977 26.2253 111.35 25.88C111.724 25.5253 111.976 25.1053 112.106 24.62ZM116.51 22.968C117.182 23.4533 117.621 23.8687 117.826 24.214C118.041 24.55 118.148 24.9233 118.148 25.334C118.148 25.978 117.943 26.51 117.532 26.93C117.122 27.35 116.599 27.56 115.964 27.56C115.302 27.56 114.76 27.322 114.34 26.846C113.93 26.37 113.724 25.74 113.724 24.956C113.864 24.9093 114.009 24.8767 114.158 24.858C114.317 24.83 114.471 24.8207 114.62 24.83C114.602 25.4553 114.709 25.9453 114.942 26.3C115.185 26.6547 115.53 26.832 115.978 26.832C116.314 26.832 116.58 26.72 116.776 26.496C116.982 26.2627 117.084 25.95 117.084 25.558C117.084 25.2407 116.996 24.9467 116.818 24.676C116.641 24.396 116.258 24.0413 115.67 23.612C114.98 23.108 114.527 22.6787 114.312 22.324C114.098 21.96 113.99 21.5587 113.99 21.12C113.99 20.532 114.168 20.0653 114.522 19.72C114.877 19.3653 115.358 19.188 115.964 19.188C116.543 19.188 116.996 19.356 117.322 19.692C117.658 20.028 117.892 20.5647 118.022 21.302C117.882 21.3673 117.738 21.4187 117.588 21.456C117.448 21.484 117.299 21.5073 117.14 21.526C117.066 20.9753 116.93 20.574 116.734 20.322C116.548 20.07 116.286 19.944 115.95 19.944C115.67 19.944 115.446 20.0373 115.278 20.224C115.12 20.4107 115.04 20.6627 115.04 20.98C115.04 21.3067 115.134 21.61 115.32 21.89C115.507 22.17 115.904 22.5293 116.51 22.968Z'
					fill='gray'
				/>
			</StyledSvg>
		</div>
	)
}

export default StandupButton