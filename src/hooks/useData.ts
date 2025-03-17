/** @format */

import { createContext, useContext } from "react";
import { NewType } from "../types/NewType";
type AppContext = {
  articles: NewType[];
  searchTerm: string;
  handleSearchTerm: (e: string) => void;
  topic: string;
  handleChangeTopic: (e: string) => void;
  isLoading: boolean;
  pageNumber: number;
  handleChangePageNumbaer: (e: number) => void;
};

export const AppContext = createContext<AppContext>({
  searchTerm: "",
  handleChangeTopic: (e: string) => console.log(e),
  topic: "",
  handleSearchTerm: (e: string) => console.log(e),
  articles: [],
  isLoading: false,
  pageNumber: 1,
  handleChangePageNumbaer: (e) => console.log(e),
});

export const useData = () => {
  const context = useContext(AppContext);
  return context;
};
