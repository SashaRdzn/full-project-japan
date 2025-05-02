import ContentLoader from "react-content-loader";
const InfinityScroll = () => {
  return (
    <div className="infinity__scroll" id="infinity__scroll">
      <ContentLoader
        speed={2}
        width={310}
        height={390}
        viewBox="0 0 310 390"
        backgroundColor="#333333"
        foregroundColor="#555555"
      >
        <rect x="0" y="0" rx="3" ry="3" width="301" height="170" />

        <rect x="0" y="190" rx="3" ry="3" width="301" height="20" />
        <rect x="0" y="220" rx="3" ry="3" width="301" height="15" />
        <rect x="0" y="240" rx="3" ry="3" width="301" height="15" />

        <rect x="0" y="260" rx="3" ry="3" width="301" height="15" />
        <rect x="0" y="280" rx="3" ry="3" width="301" height="15" />
        <rect x="0" y="300" rx="3" ry="3" width="301" height="15" />

        <rect x="0" y="360" rx="3" ry="3" width="301" height="10" />
        <rect x="0" y="380" rx="3" ry="3" width="301" height="10" />
      </ContentLoader>
    </div>
  );
};

export default InfinityScroll;
