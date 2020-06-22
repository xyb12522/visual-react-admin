import React, { useEffect } from "react";
import { Spin } from "antd";
import NProgress from "nprogress"; // progress bar
import "nprogress/nprogress.css"; // progress bar style

NProgress.configure({ showSpinner: false }); // NProgress Configuration

const Loading = () => {
  useEffect(() => {
    NProgress.start();
    return () => {
      NProgress.done();
    };
  }, []);

  return (
    <div className="app-container" style={{ paddingTop: 100, textAlign: 'center' }}>
      <Spin size="large" tip={"Loading..."} />
    </div>
  );
};

export default Loading;
