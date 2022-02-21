import { NavigationDots, SocialMedia } from "../../components";

export const AppWrap = (
  Component: React.ComponentType,
  styles: {
    readonly [key: string]: string;
  },
  idName: string,
  classNames?: string
) =>
  function HOC() {
    return (
      <div id={idName} className={`app__container ${classNames}`}>
        <SocialMedia />

        <div className="app__wrapper app__flex">
          <Component />

          <div className="copyright">
            <p className="p-text">@2022 Arthus Vinícius</p>
            <p className="p-text">All rights reserved</p>
          </div>
        </div>

        <NavigationDots active={idName} />
      </div>
    );
  };
