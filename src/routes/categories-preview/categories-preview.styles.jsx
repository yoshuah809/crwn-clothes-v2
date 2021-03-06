import styled from "styled-components";

export const CollectionPreview = styled.div`
	display: flex;
	flex-direction: column;
	margin=botton: 30px;

	@media screen and (max-width: 800px) {
		align-items: center;
	}
`;

export const TitleContainer = styled.h1`
	font-size: 28px;
	flex-direction: column;
	margin=botton: 30px;
`;

export const PreviewContainer = styled.div`
	display: flex;
	justify-content: space-between;

	@media screen and (max-width: 800px) {
		display: grid;
		grid-template-columns: 1fr 1fr;
		grid-gap: 15px;
	}
`;
