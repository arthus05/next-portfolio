import { ReactComponentElement, ReactNode, useEffect } from "react";
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
      <section id={styles[idName]} className={`app__container ${classNames}`}>
        <SocialMedia />

        <section className="app__wrapper app__flex">
          <Component />

          <div className="copyright">
            <p className="p-text">@2022 Arthus Vinícius</p>
            <p className="p-text">All rights reserved</p>
          </div>
        </section>

        <NavigationDots active={idName} />
      </section>
    );
  };
