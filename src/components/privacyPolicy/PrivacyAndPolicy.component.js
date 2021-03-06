import React, { useEffect } from "react";
import "./privacy-and-policy.styles.scss";

// actions
import { getPages } from "./../../store/home/homeAction";

// react redux
import { useDispatch, useSelector } from "react-redux";

// html parser
import ReactHtmlParser from "react-html-parser";

export default function PrivacyAndPolicy() {
  const dispatch = useDispatch();
  const state = useSelector((state) => state.home.staticPages);

  function fetchData() {
    dispatch(getPages());
  }

  useEffect(() => {
    window.scrollTo(0, 0);
    fetchData();
  }, []);

  let filtered, privacyAndPolicy;

  // checking if privacy policy data exist in state
  if (state !== undefined) {
    // filter data with the name of partner
    filtered = state.filter(
      (each) => each.page_group.toLowerCase() === "orders"
    );

    // find ou data for affilate program page
    privacyAndPolicy = filtered[0].page.filter(
      (each) => each.page_name === "Privacy & Policy"
    );
    privacyAndPolicy = privacyAndPolicy[0].contents;
  }

  // if affilate page content exist return this html
  if (privacyAndPolicy) {
    return ReactHtmlParser(privacyAndPolicy);
  }

  return (
    <div className="privacy-policy">
      <div className="loading">
        <div className="spinner"></div>
      </div>
    </div>
  );
}
