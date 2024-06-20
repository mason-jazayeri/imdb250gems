import { useState, useEffect, Fragment } from "react";
import { Link, useSearchParams, createSearchParams } from "react-router-dom";
import { Typography, Row, Col, Card, Pagination } from "antd";
import { styled } from "styled-components";
import MainLayout from "../../Components/Layouts/MainLayout";
import Loading from "../../Components/Loading";
import MOVIESAPI from "../../helpers/moviesapiBaseURL";

const { Title } = Typography;
const { Meta } = Card;

const CustomizedMeta = styled(Meta)`
	// min-height: 600px;
`;

const CustomizedCoverImage = styled.img`
	// width: 100%;
	// height: 400px;
	// object-fit: cover;
`;

function AllMoviesListPage() {
	const [queryStrings, setQueryStrings] = useSearchParams();
	const [moviesData, setMoviesData] = useState({
		data: [
			{
				// country: "",
				// genres: [],
				// id: "",
				// images: [],
				// imdb_rating: "",
				// poster: "",
				// title: "",
				// website: "",
				// year: "",
			},
		],
		metadata: {
			// current_page: "",
			// page_count: "",
			// per_page: "",
			// total_count: "",
		},
	});
	const { current_page, page_count, per_page, total_count } =
		moviesData.metadata;

	const [loading, setLoading] = useState(true);

	function callMoviesAPI() {
		MOVIESAPI.get(`movies?page=${queryStrings.get("page")}`)
			.then(function (res) {
				console.log(res.data);
				setLoading(false);
				setMoviesData(res.data);
			})
			.catch(function (err) {
				console.log(err);
				setLoading(false);
			});
	}

	useEffect(
		function () {
			callMoviesAPI();
		},
		[queryStrings]
	);

	function renderFarm() {
		return moviesData.data.map(function (item) {
			return (
				<Col key={item.id} xs={24} sm={12} md={8} lg={6} xl={6} xxl={4}>
					<Link to={`/movies/${item.id}`}>
						<Card
							hoverable
							cover={<CustomizedCoverImage src={item.poster} />}
						>
							<CustomizedMeta title={item.title} />
						</Card>
					</Link>
				</Col>
			);
		});
	}

	function handlePageChange(page) {
		setLoading(true);
		setQueryStrings(createSearchParams({ page: page }));
	}

	return (
		<MainLayout>
			{loading ? (
				<Loading />
			) : (
				<Fragment>
					<Title level={3}>All Movies</Title>
					<Row gutter={[16, 16]}>{renderFarm()}</Row>
					<Pagination
						current={current_page}
						pageSize={per_page}
						total={total_count}
						onChange={handlePageChange}
						hideOnSinglePage={true}
						showSizeChanger={false}
					/>
				</Fragment>
			)}
		</MainLayout>
	);
}

export default AllMoviesListPage;
