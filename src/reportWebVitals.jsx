const reportWebVitals = async (onPerfEntry) => {
  if (typeof onPerfEntry === "function") {
    try {
      const { onCLS, onFCP, onLCP, onTTFB, onINP } = await import("web-vitals");
      onCLS(onPerfEntry);
      onFCP(onPerfEntry);
      onLCP(onPerfEntry);
      onTTFB(onPerfEntry);
      onINP(onPerfEntry);
    } catch (error) {
      console.error("Failed to load web-vitals", error);
    }
  }
};

export default reportWebVitals;
