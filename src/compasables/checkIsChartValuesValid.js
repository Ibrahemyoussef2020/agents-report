
const isValidChart = (series, chartType) => {
    if (!Array.isArray(series)) return false;

    switch (chartType) {
        case "line":
        case "area":
        case "bar":
        case "rangeBar":
            return series.every(
                (item) =>
                    typeof item === "object" &&
                    item !== null &&
                    typeof item.name === "string" &&
                    Array.isArray(item.data) &&
                    item.data.every((num) => typeof num === "number")
            );

        case "pie":
        case "donut":
        case "radialBar":
            return series.every((item) => typeof item === "number");

        case "scatter":
        case "bubble":
            return series.every(
                (item) =>
                    typeof item === "object" &&
                    item !== null &&
                    Array.isArray(item.data) &&
                    item.data.every(
                        (point) =>
                            Array.isArray(point) &&
                            point.length === 2 &&
                            typeof point[0] === "number" &&
                            typeof point[1] === "number"
                    )
            );

        case "heatmap":
            return series.every(
                (item) =>
                    typeof item === "object" &&
                    item !== null &&
                    typeof item.name === "string" &&
                    Array.isArray(item.data) &&
                    item.data.every((value) => typeof value === "number")
            );

        case "radar":
            return series.every(
                (item) =>
                    typeof item === "object" &&
                    item !== null &&
                    typeof item.name === "string" &&
                    Array.isArray(item.data) &&
                    item.data.every((num) => typeof num === "number")
            );

        default:
            console.warn(`Chart type "${chartType}" is not supported.`);
            return false;
    }
};

export default isValidChart;
