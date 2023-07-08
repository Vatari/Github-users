import React, { useState, useEffect } from "react";
import mockUser from "./mockData.js/mockUser";
import mockRepos from "./mockData.js/mockRepos";
import mockFollowers from "./mockData.js/mockFollowers";
import axios from "axios";

const rootUrl = "https://api.github.com";

const GithubContext = React.createContext();

const GitHubProvider = ({ children }) => {
  return <GithubContext.Provider>{children}</GithubContext.Provider>;
};

export { GitHubProvider, GithubContext };
