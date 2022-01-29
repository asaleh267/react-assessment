import axios, { AxiosRequestConfig } from "axios";

const defaultAxiosSettings: AxiosRequestConfig = {
  withCredentials: true,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
};

export const axiosNetCore = axios.create({
  baseURL: `/`,
  ...defaultAxiosSettings,
});