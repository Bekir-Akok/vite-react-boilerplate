import NotFoundPage from "./not-found-page";

const notFoundPageConfig = {
  path: "*",
  element: <NotFoundPage />,
  title: "404 Sayfa Bulunamadı",
  isAuthProtected: false,
};

export default notFoundPageConfig;
