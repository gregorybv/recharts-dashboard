import { SalesMapWrap } from "./SalesMap.styles";
import { ComposableMap, Geographies, Geography } from "react-simple-maps";
import geoJson from "../../../data/world-50m.v1.json";
import { BlockContentWrap, BlockTitle } from "../../../styles/global/default";
import { SALES_MAP_DATA } from "../../../data/mockData";

const COLOR_MAP = {
  red: "#ef4444",
  violet: "#a700ff",
  dodgerBlue: "#0095ff",
  emerald: "#00e096",
  yellow: "#ffcf00",
};

const getFillColor = (fillCode) => COLOR_MAP[fillCode] || "#ececec";

const findByCountryId = (countryId) => {
  const matchedCountry = SALES_MAP_DATA.find(
    (country) => country.countryId === countryId
  );
  return matchedCountry ? getFillColor(matchedCountry.fillColor) : "#ececec";
};

const SalesMap = () => {
  return (
    <SalesMapWrap>
      <div className="block-head">
        <BlockTitle className="block-title">
          <h3>Sales Mapping by Country</h3>
        </BlockTitle>
      </div>
      <BlockContentWrap className="map-chart">
        <ComposableMap
          projection="geoNaturalEarth1"
          projectionConfig={{
            rotate: [0, 0, 0],
            scale: 200,
          }}
        >
          <Geographies geography={geoJson}>
            {({geographies}) =>
              geographies.map((geo) => {
                if (geo.code !== "010") {
                  return (
                    <Geography
                      key={geo.rsmKey}
                      geography={geo}
                      fill={findByCountryId(geo.id)}
                    />
                  );
                }
              })
            }
          </Geographies>
        </ComposableMap>
      </BlockContentWrap>
    </SalesMapWrap>
  );
};

export default SalesMap;
