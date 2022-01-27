import axios, { AxiosRequestConfig } from "axios";

const defaultAxiosSettings: AxiosRequestConfig = {
  withCredentials: true,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
};

const appPath = process.env.REACT_APP_APP_PATH;

export const axiosNetCore = axios.create({
  baseURL: `${appPath}`,
  ...defaultAxiosSettings,
});