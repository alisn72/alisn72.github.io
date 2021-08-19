import { FC } from "react";
import { Switch, Route } from "react-router-dom";
import { useState } from "react";
import { Routes } from "../constants";
import { EThemes } from "../@types/enums";
import { Header } from "../components";
import StorageService from "../services/StorageService";
import SearchPage from "./searchPage/SearchPage";
import ResultPage from "./resultPage/ResultPage";
import WatchPage from "./watchPage/WatchPage";
import './Main.scss'

type Props = {};

const Main: FC<Props> = () => {
  const currentTheme = StorageService.get('THEME', 'light')
  const [theme, setTheme] = useState<EThemes>(currentTheme as EThemes)

  const onThemeChange = (theme: EThemes) => {
    StorageService.set('THEME', theme)
    setTheme(theme)
  }

  return (
    <div className={`root theme--${theme}`}>
      <Header onThemeChange={onThemeChange} />
      <div className={'body-container'}>
        <div className={'page-container'}>
          <Switch>
            <Route path={Routes.ROOT} exact>
              <SearchPage />
            </Route>
            <Route path={Routes.RESULT} exact>
              <ResultPage />
            </Route>
            <Route path={Routes.WATCH} exact>
              <WatchPage />
            </Route>
            <Route path="*">
              <div>404 - Not found</div>
            </Route>
          </Switch>
        </div>
      </div>
    </div>
  );
};

export default Main;
