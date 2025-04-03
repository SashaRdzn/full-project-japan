import ContentLoader from "react-content-loader";

const LoaderDetail = () => (
  <ContentLoader
    speed={2}
    width={1920}
    height={1200}
    viewBox="0 0 1200 800"
    backgroundColor="#333333"
    foregroundColor="#555555"
  >
    <rect x="0" y="0" rx="10" ry="10" width="400" height="400" />
    <rect x="420" y="0" rx="10" ry="10" width="400" height="400" />
    <rect x="840" y="0" rx="10" ry="10" width="400" height="400" />

    <rect x="300" y="410" rx="5" ry="5" width="600" height="20" />

    <rect x="0" y="450" rx="5" ry="5" width="1200" height="20" />
    <rect x="0" y="470" rx="5" ry="5" width="1100" height="20" />
    <rect x="0" y="490" rx="5" ry="5" width="1000" height="20" />
  </ContentLoader>
);

export default LoaderDetail;
