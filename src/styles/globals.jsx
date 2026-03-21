import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`

    *{
		margin: 0;
		padding: 0;
		box-sizing: border-box;
		list-style: none;
	}

	body,html {
		background: ${({ theme }) => theme.colors.mainPallet.background};
		color: ${({ theme }) => theme.colors.mainPallet.standard.white};
		font-size: 18px;
		font-family: 'Roboto', sans-serif;
    	font-weight: 400;
		padding: 0px;
		scroll-behavior: smooth;

		@media (max-width: ${({ theme }) => theme.mobile}) {
    		font-size: 13px;
  		}

		@media (max-width: ${({ theme }) => theme.smallerDevices}) {
    		font-size: 10px;
  		}
	
	}

	

	p {
		line-height: 170%;
		letter-spacing: 0.5px;
		opacity: .7;

        @media (max-width: ${({ theme }) => theme.mobile}) {
			line-height: 2;
			width: 100%;
  		}

	}

	img{
		width: 100%;
		object-fit: cover;
	}

	h1, h2, h3, h4, h5 {
		font-family: 'Poppins', sans-serif;
	}



	h3 {
		font-weight: 400;
		letter-spacing: 0.25;
		font-size: ${({ theme }) => theme.fontSize.Headline3};

		@media (max-width: ${({ theme }) => theme.tablet}) {
			font-size: 120%;
		}
	}

	h4 {
		font-weight: 400;
	}

	h1 {
		font-weight: 600;
		letter-spacing: -1.3px;
		line-height: 105%;
		margin-bottom: -.2em;
		font-size: ${({ theme }) => theme.fontSize.Headline1};
	}

	h2{
		font-size: ${({ theme }) => theme.fontSize.Headline2};
		background: linear-gradient(
    		to left,
     		${({ theme }) => theme.colors.mainPallet.primary},
    		${({ theme }) => theme.colors.mainPallet.secondary} 90%
  		);
    	background-clip: text;
    	-webkit-background-clip: text;
    	color: transparent;
    	-webkit-text-fill-color: transparent;
    	z-index: 10;

    	@media (max-width: ${({ theme }) => theme.mobile}) {
    		font-size: 270%;
			line-height: 120%;
			margin-bottom: .5em;
  		}
	}

	main {
		display: flex;
		justify-content: space-between;
		align-items: center;
		height: 71px;
		border-bottom: 1px solid;
		border-image: linear-gradient(to right, transparent,#717171,transparent) 1;
	}

	nav {
		display: flex;
		grid-gap: 2em;

		@media (max-width: ${({ theme }) => theme.mobile}) {
            display: none;
        }
	}
	
	a {
		text-decoration: none;
		color: ${({ theme }) => theme.colors.mainPallet.standard.white};
		cursor: pointer;
	}

	

	button {
		height: 62px;
		display: inline-block;
		width: auto;
		padding: 0px 24px;
		font-weight: 500;
		font-size: ${({ theme }) => theme.fontSize.buttonText2};
		letter-spacing: 1.25px;
		background-color: transparent;
		color: ${({ theme }) => theme.colors.mainPallet.standard.white};
		display: flex;
		align-items: center;
		justify-content: center;
		grid-gap: 8px;
		cursor: pointer;
		border: 1px solid ${({ theme }) => theme.colors.mainPallet.standard.white};
		transition: all 0.3s ease;

		@media (max-width: ${({ theme }) => theme.mobile}) {
          font-size: ${({ theme }) => theme.fontSize.buttonText};
		  height: 40px;
		  padding: 0px 14px;
        }
	}
`;

export default GlobalStyles;
