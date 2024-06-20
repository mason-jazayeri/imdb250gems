import { useState, useEffect, Fragment } from "react";
import { Link, useParams } from "react-router-dom";
import { Flex, Typography, Row, Col, Card } from "antd";
import { styled } from "styled-components";
import MainLayout from "../../Components/Layouts/MainLayout";
import Loading from "../../Components/Loading";
import MOVIESAPI from "../../helpers/moviesapiBaseURL";

const { Title } = Typography;
const { Meta } = Card;

function MovieDetailPage() {
	const { movieId } = useParams();
	const [movieDetails, setMovieDetails] = useState();
	const [loading, setLoading] = useState(true);

	function callMoviesAPI() {
		MOVIESAPI.get(`movies/${movieId}`)
			.then(function (res) {
				console.log(res.data);
				setLoading(false);
				setMovieDetails(res.data);
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
		[movieId]
	);

	function renderRatings(ratingsString) {
		const ratings = JSON.parse(ratingsString);
		console.log(ratings);
		return ratings.map(function (item) {
			<li>{`${item.Source}: ${item.Value}`}</li>;
		});
	}

	return (
		<MainLayout>
			{loading ? (
				<Loading />
			) : (
				<Flex gap="large">
					<Card
						hoverable
						cover={<img src={movieDetails.poster} />}
					></Card>
					<Flex vertical="true">
						<div>{movieDetails.title}</div>
						<ul vertical="true">
							{renderRatings(movieDetails.ratings)}
						</ul>
					</Flex>
				</Flex>
			)}
		</MainLayout>
	);
}

export default MovieDetailPage;
