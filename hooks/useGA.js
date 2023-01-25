import { useRouter } from "next/router";
import React, { useEffect } from "react";
import { CONFIG } from "../constants/config";

// https://developers.google.com/analytics/devguides/collection/gtagjs/pages
const pageview = (url) => {
  window.gtag("config",CONFIG.GA_TRACKING_ID, {
    page_path: url,
  });
};



// https://developers.google.com/analytics/devguides/collection/gtagjs/events
const event = ({ action, category, label, value }) => {
  window.gtag("event", action, {
    event_category: category,
    event_label: label,
    value,
  });
};
const ga = {
  pageview,
  event,
};


function useGA() {
  const router = useRouter();
  const isProduction = process.env.NODE_ENV !== "development";

  useEffect(() => {
    const handleRouteChange = (url) => {
      /* invoke analytics function only for production */
      ga.pageview(url);
      if (isProduction) {
        ga.pageview(url);
      }
    };
    router.events.on("routeChangeComplete", handleRouteChange);
    return () => {
      router.events.off("routeChangeComplete", handleRouteChange);
    };
  }, [isProduction, router.events]);
  return null;
}

export default useGA;
