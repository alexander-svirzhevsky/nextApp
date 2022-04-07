import { FunctionComponent } from "react";
import { Footer } from "./Footer/Footer";
import { Header } from "./Header/Header";
import { LayoutProprs } from "./Layout.props";
import { Sidebar } from "./Sidebar/Sidebar";

const Layout = ({ children }: LayoutProprs): JSX.Element => {
  return (
    <>
      <Header />
      <div>
        <Sidebar />
        <div>{children}</div>
      </div>
      <Footer />
    </>
  );
};

export const withLayout = <T extends Record<string, unknown>>(
  Componet: FunctionComponent<T>
) => {
  return function withLayoutComponent(props: T): JSX.Element {
    return (
      <Layout>
        <Componet {...props} />
      </Layout>
    );
  };
};
