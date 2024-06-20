import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "../../Pages/HomePage";
import AllMoviesListPage from "../../Pages/AllMoviesListPage";
import MoviesListByGenrePage from "../../Pages/MoviesListByGenrePage";
import MovieDetailPage from "../../Pages/MovieDetailPage";
import SearchResaultPage from "../../Pages/SearchResaultPage";
import Experiment from "../../Pages/Experiment";
import NotFoundPage from "../../Pages/NotFoundPage";

const router = createBrowserRouter([
	{
		path: "/",
		element: <HomePage />,
	},
	{
		path: "/movies",
		element: <AllMoviesListPage />,
	},
	{
		path: "/genres/:genreId/movies",
		element: <MoviesListByGenrePage />,
	},
	{
		path: "/movies/:movieId",
		element: <MovieDetailPage />,
	},
	{
		path: "/search",
		element: <SearchResaultPage />,
	},
	{
		path: "/experiment",
		element: <Experiment />,
	},
	{
		path: "*",
		element: <NotFoundPage />,
	},
]);

function Router() {
	return <RouterProvider router={router} />;
}

export default Router;
