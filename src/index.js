import React from "react";
import ReactDOM from "react-dom/client";
import Router from "./Components/Router";
import { ConfigProvider, theme } from "antd";
import "antd/dist/reset.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
	<ConfigProvider
		theme={{
			algorithm: theme.defaultAlgorithm,
			token: {},
		}}
	>
		<Router />
	</ConfigProvider>
);
