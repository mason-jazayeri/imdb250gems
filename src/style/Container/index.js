import styled from "styled-components";

const Container = styled.div`
	padding: 0 15px;

	@media (min-width: 576px) {
		max-width: 540px;
		margin: 0 auto;
	}

	@media (min-width: 768px) {
		max-width: 720px;
		margin: 0 auto;
	}

	@media (min-width: 992px) {
		max-width: 960px;
		margin: 0 auto;
	}

	@media (min-width: 1200px) {
		max-width: 1140px;
		margin: 0 auto;
	}

	@media (min-width: 1400px) {
		max-width: 1320px;
		margin: 0 auto;
	}
`;

export default Container;
