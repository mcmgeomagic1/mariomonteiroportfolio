import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`

    *{
		margin: 0;
		padding: 0;
		box-sizing: border-box;
	}

	body,html {
		width: 100%;
		background: ${({ theme }) => theme.colors.mainPallet.background};
		color: ${({ theme }) => theme.colors.mainPallet.standard.white};
		font-size: 18px;
		font-family: 'Roboto', sans-serif;
		overflow-x: hidden;
    	font-weight: 400;
		padding: 0px;

		@media (max-width: ${({ theme }) => theme.mobile}) {
    		font-size: 14px;
  		}
	
	}

	#__next, #root{
		height: auto;
		background: ${({ theme }) => theme.colors.mainPallet.background};
	}

	p {
		line-height: 170%;
		letter-spacing: 0.5px;
		opacity: .7;
	}

	img{
		width: 100%;
		object-fit: cover;
	}

	h1, h3, h2{
		
	}

	h1 {
		font-weight: 600;
		letter-spacing: -1.3px;
		line-height: 105%;
		margin-bottom: -.2em;
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
        }
	}

    `;

export default GlobalStyles;
