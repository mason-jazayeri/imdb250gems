import { Layout, Flex, Typography } from "antd";
import styled from "styled-components";
import Container from "../../../style/Container";

const { Header, Footer, Content } = Layout;
const { Title } = Typography;
const CustomizedContainerForHeader = styled(Container)`
	height: 100%;
`;
const CustomizedHeader = styled(Header)`
	padding: 0;
`;
const CustomizedFooter = styled(Footer)`
	padding: 24px 0;
`;

function MainLayout({ children }) {
	return (
		<Layout>
			<CustomizedHeader>
				<CustomizedContainerForHeader>
					<Flex align="center" style={{ height: "100%" }}>
						<div className="logo">
							<Title
								level={2}
								style={{
									margin: 0,
									paddingRight: "20px",
									color: "#f5c518",
								}}
							>
								IMDB250GEMS
							</Title>
						</div>
					</Flex>
				</CustomizedContainerForHeader>
			</CustomizedHeader>
			<Content>
				<Container>{children}</Container>
			</Content>
			<CustomizedFooter>
				<Container>Footer</Container>
			</CustomizedFooter>
		</Layout>
	);
}

export default MainLayout;
